import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import shape1 from '/public/images/contact/4.png'
import shape2 from '/public/images/contact/3.png'
import Image from 'next/image';

const GUEST_OPTIONS = ['1', '2', '3', '4'];
const MEAL_OPTIONS = ['Steak', 'Chicken', 'Fish', 'Vegetarian'];

const initialFormState = {
    name: '',
    email: '',
    phone: '',
    attending: '',
    guest: '',
    attend: '',
    meal: '',
    message: ''
};

const RSVP3 = (props) => {

    const [forms, setForms] = useState(initialFormState);
    const [, forceUpdate] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: null, message: '' });

    const [validator] = useState(() => new SimpleReactValidator({
        className: 'errorMessage',
        autoForceUpdate: { forceUpdate: () => forceUpdate((prev) => prev + 1) },
        validators: {
            guestCount: {
                message: 'Please select a guest count between 1 and 4.',
                rule: (value) => GUEST_OPTIONS.includes(value),
                required: true,
            },
            mealChoice: {
                message: 'Please choose a valid meal preference.',
                rule: (value) => MEAL_OPTIONS.includes(value),
                required: true,
            },
        },
    }));

    const changeHandler = e => {
        const { name, value } = e.target;
        setForms({ ...forms, [name]: value });
        setStatus({ type: null, message: '' });
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = async e => {
        e.preventDefault();

        if (!validator.allValid()) {
            validator.showMessages();
            setStatus({ type: 'error', message: 'Please fix the errors in the form and try again.' });
            return;
        }

        setIsSubmitting(true);
        setStatus({ type: 'pending', message: 'Submitting your RSVP…' });

        try {
            const response = await fetch('/api/rsvp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(forms)
            });

            const data = await response.json().catch(() => ({}));

            if (!response.ok || data.ok === false) {
                const errorMessage = data.error || 'We were unable to send your RSVP. Please try again in a few minutes or reach out to us directly at alexander@thefruehs.com.';
                setStatus({ type: 'error', message: errorMessage });
            } else {
                setStatus({ type: 'success', message: 'Thank you! Your RSVP has been delivered.' });
                setForms(initialFormState);
                validator.hideMessages();
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'We could not reach the server. Please check your internet connection and try again, or email us directly.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const renderStatus = () => {
        if (!status.type || !status.message) {
            return null;
        }

        const isError = status.type === 'error';
        const role = isError ? 'alert' : 'status';
        const ariaLive = isError ? 'assertive' : 'polite';

        return (
            <div className={`form-status message-${status.type}`} role={role} aria-live={ariaLive} tabIndex={-1}>
                {status.message}
            </div>
        );
    };

    return (
        <section className={`wpo-contact-section-s3 section-padding ${props.rClass}`} id="RSVP">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-12 col-md-12 col-12">
                        <div className="wpo-contact-section-wrapper">
                            <div className="wpo-contact-section-inner">
                                <div className="wpo-contact-form-area">
                                    <div className="wpo-section-title">
                                        <h2>Are You Attending?</h2>
                                    </div>
                                    <form method="post" className="contact-validation-active" onSubmit={(e) => submitHandler(e)}>
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-12">
                                                <input
                                                    value={forms.name}
                                                    type="text"
                                                    name="name"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    className="form-control"
                                                    placeholder="Your Name" />
                                                {validator.message('name', forms.name, 'required|alpha_space')}
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-12">
                                                <input
                                                    value={forms.email}
                                                    type="email"
                                                    name="email"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    className="form-control"
                                                    placeholder="Your Email" />
                                                {validator.message('email', forms.email, 'required|email')}
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-12">
                                                <label className="form-label" htmlFor="phone">
                                                    Phone Number
                                                </label>
                                                <input
                                                    id="phone"
                                                    value={forms.phone}
                                                    type="tel"
                                                    name="phone"
                                                    autoComplete="tel"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    className="form-control"
                                                    placeholder="(555) 123-4567"
                                                />
                                                {validator.message('phone', forms.phone, 'required|phone')}
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-12">
                                                <div className="radio-buttons">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <p>
                                                                <input
                                                                    type="radio"
                                                                    id="attending-yes"
                                                                    name="attending"
                                                                    value="yes"
                                                                    checked={forms.attending === 'yes'}
                                                                    onChange={(e) => changeHandler(e)}
                                                                />
                                                                <label htmlFor="attending-yes">Yes, I will be there</label>
                                                            </p>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <p>
                                                                <input
                                                                    type="radio"
                                                                    id="attending-no"
                                                                    name="attending"
                                                                    value="no"
                                                                    checked={forms.attending === 'no'}
                                                                    onChange={(e) => changeHandler(e)}
                                                                />
                                                                <label htmlFor="attending-no">Sorry, I can’t come</label>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {validator.message('attending', forms.attending, 'required')}
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-12">
                                                <select
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    value={forms.guest}
                                                    className="form-control"
                                                    name="guest">
                                                    <option value="" disabled hidden>
                                                        Number Of Guests
                                                    </option>
                                                    {GUEST_OPTIONS.map((count) => (
                                                        <option key={count} value={count}>
                                                            {count}
                                                        </option>
                                                    ))}
                                                </select>
                                                {validator.message('guest', forms.guest, 'required|guestCount')}
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-12">
                                                <div>
                                                    <input
                                                        value={forms.attend}
                                                        type="text"
                                                        name="attend"
                                                        onBlur={(e) => changeHandler(e)}
                                                        onChange={(e) => changeHandler(e)}
                                                        className="form-control"
                                                        placeholder="What Will You Be Attending" />
                                                    {validator.message('attend', forms.attend, 'required')}
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-12">
                                                <div className="fullwidth">
                                                    <select
                                                        onBlur={(e) => changeHandler(e)}
                                                        onChange={(e) => changeHandler(e)}
                                                        value={forms.meal}
                                                        className="form-control"
                                                        name="meal">
                                                        <option value="" disabled hidden>
                                                            Meal Preferences
                                                        </option>
                                                        {MEAL_OPTIONS.map((option) => (
                                                            <option key={option} value={option}>
                                                                {option}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {validator.message('meal', forms.meal, 'required|mealChoice')}
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-12">
                                                <textarea
                                                    value={forms.message}
                                                    name="message"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    className="form-control"
                                                    placeholder="Additional Notes (optional)"
                                                    rows="3"
                                                />
                                            </div>
                                        </div>
                                        <div className="submit-area">
                                            <button type="submit" className="theme-btn" disabled={isSubmitting}>
                                                {isSubmitting ? 'Sending…' : 'RSVP'}
                                            </button>
                                        </div>
                                        {renderStatus()}
                                    </form>
                                </div>
                            </div>
                            <div className="shape-1">
                                <Image src={shape1} alt="" />
                            </div>
                            <div className="shape-2">
                                <Image src={shape2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default RSVP3;
