import nodemailer from 'nodemailer';

const REQUIRED_ENV_VARS = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'];

function validatePayload(body = {}) {
  const errors = {};
  const safeValue = (value) => (typeof value === 'string' ? value.trim() : '');

  const name = safeValue(body.name);
  const email = safeValue(body.email);
  const phone = safeValue(body.phone);
  const attending = safeValue(body.attending);
  const guest = safeValue(body.guest);
  const attend = safeValue(body.attend);
  const meal = safeValue(body.meal);
  const message = safeValue(body.message);

  const validGuestCounts = ['1', '2', '3', '4'];
  const validMeals = ['Steak', 'Chicken', 'Fish', 'Vegetarian'];

  if (!name) {
    errors.name = 'Name is required.';
  }

  if (!email) {
    errors.email = 'Email is required.';
  } else {
    const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    if (!emailRegex.test(email)) {
      errors.email = 'Email must be valid.';
    }
  }

  if (!phone) {
    errors.phone = 'Phone number is required.';
  } else {
    const phoneRegex = /^\+?[\d\s().-]{7,}$/;
    if (!phoneRegex.test(phone)) {
      errors.phone = 'Phone number must be valid.';
    }
  }

  if (!attending) {
    errors.attending = 'Please let us know if you can attend.';
  } else if (!['yes', 'no'].includes(attending.toLowerCase())) {
    errors.attending = 'Attending selection is invalid.';
  }

  if (!guest) {
    errors.guest = 'Number of guests is required.';
  } else if (!validGuestCounts.includes(guest)) {
    errors.guest = 'Number of guests must be between 1 and 4.';
  }

  if (!attend) {
    errors.attend = 'Please tell us what you will be attending.';
  }

  if (!meal) {
    errors.meal = 'Meal preference is required.';
  } else if (!validMeals.includes(meal)) {
    errors.meal = 'Meal preference selection is invalid.';
  }

  return {
    errors,
    payload: {
      name,
      email,
      phone,
      attending: attending.toLowerCase(),
      guest,
      attend,
      meal,
      message,
    },
  };
}

function checkEnv() {
  const missing = REQUIRED_ENV_VARS.filter((key) => !process.env[key]);
  if (missing.length) {
    throw new Error(`Missing environment variables: ${missing.join(', ')}`);
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  try {
    checkEnv();
  } catch (error) {
    return res.status(500).json({ ok: false, error: 'Email service is not configured.', details: error.message });
  }

  const { errors, payload } = validatePayload(req.body);

  if (Object.keys(errors).length) {
    return res.status(400).json({ ok: false, error: 'Validation failed.', fieldErrors: errors });
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_SECURE,
    SMTP_FROM,
  } = process.env;

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE ? SMTP_SECURE === 'true' : Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const recipients = ['alexander@thefruehs.com', 'elidiaguer@icloud.com'];
  const { name, email, phone, attending, guest, attend, meal, message } = payload;

  const mailContent = `New RSVP Submission\n\n`
    + `Name: ${name}\n`
    + `Email: ${email}\n`
    + `Phone: ${phone}\n`
    + `Attending: ${attending === 'yes' ? 'Yes' : 'No'}\n`
    + `Guests: ${guest}\n`
    + `Attending Events: ${attend}\n`
    + `Meal Preference: ${meal}\n`
    + (message ? `Notes: ${message}\n` : '');

  const mailOptions = {
    from: SMTP_FROM || SMTP_USER,
    to: recipients,
    subject: 'New RSVP Received',
    text: mailContent,
    html: mailContent.replace(/\n/g, '<br/>'),
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ ok: true, message: 'RSVP delivered successfully.' });
  } catch (error) {
    return res.status(502).json({ ok: false, error: 'Unable to deliver RSVP at this time. Please try again later.', details: error.message });
  }
}

