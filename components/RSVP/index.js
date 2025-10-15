import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';


const RSVP = (props) => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        address: '',
        meal: '',
        attend: '',
        guest: '',
        attendance: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        const { name, value } = e.target;
        setForms({ ...forms, [name]: value })
        setStatus({ type: '', message: '' });
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                address: '',
                meal: '',
                attend: '',
                guest: '',
                attendance: ''
            })
            setStatus({ type: 'success', message: 'Thank you! Your RSVP has been received.' });
        } else {
            validator.showMessages();
            setStatus({ type: 'error', message: 'Please fix the errors in the form and try again.' });
        }
    };

    const nameError = validator.message('name', forms.name, 'required|alpha_space');
    const emailError = validator.message('email', forms.email, 'required|email');
    const attendanceError = validator.message('attendance', forms.attendance, 'required');
    const guestError = validator.message('guest', forms.guest, 'required');
    const attendError = validator.message('attend', forms.attend, 'required');
    const mealError = validator.message('meal', forms.meal, 'required');

    return (
        <section className="wpo-contact-section section-padding" style={{ backgroundImage: `url(${'/images/rsvp-bg.jpg'})` }}
            id="RSVP">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-12 col-md-12 col-12">
                        <div className="wpo-contact-section-wrapper">
                            <div className="wpo-contact-section-inner">
                                <div className="wpo-contact-form-area">
                                    <div className="wpo-contact-title">
                                        <h2 id="rsvp-title">Make an Inquiry</h2>
                                        <p>We Will Be Very Happy if You Join Our Big Day. We are Waiting For You.</p>
                                    </div>
                                    <form method="post" className="contact-validation-active" onSubmit={(e) => submitHandler(e)}
                                        noValidate
                                        aria-labelledby="rsvp-title">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="form-field">
                                                    <label className="form-label" htmlFor="rsvp-name">Full name</label>
                                                    <p id="rsvp-name-help" className="form-helper">Use the name that appears on your invitation so we can match your RSVP.</p>
                                                    <input
                                                        id="rsvp-name"
                                                        value={forms.name}
                                                        type="text"
                                                        name="name"
                                                        onBlur={(e) => changeHandler(e)}
                                                        onChange={(e) => changeHandler(e)}
                                                        className="form-control"
                                                        placeholder="Your name"
                                                        autoComplete="name"
                                                        required
                                                        aria-required="true"
                                                        aria-invalid={!!nameError}
                                                        aria-describedby={`rsvp-name-help${nameError ? ' rsvp-name-error' : ''}`}
                                                    />
                                                    {nameError && (
                                                        <p id="rsvp-name-error" className="errorMessage" role="alert">{nameError}</p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="form-field">
                                                    <label className="form-label" htmlFor="rsvp-email">Email address</label>
                                                    <p id="rsvp-email-help" className="form-helper">We&apos;ll send updates and reminders to this address.</p>
                                                    <input
                                                        id="rsvp-email"
                                                        value={forms.email}
                                                        type="email"
                                                        name="email"
                                                        onBlur={(e) => changeHandler(e)}
                                                        onChange={(e) => changeHandler(e)}
                                                        className="form-control"
                                                        placeholder="name@example.com"
                                                        autoComplete="email"
                                                        required
                                                        aria-required="true"
                                                        aria-invalid={!!emailError}
                                                        aria-describedby={`rsvp-email-help${emailError ? ' rsvp-email-error' : ''}`}
                                                    />
                                                    {emailError && (
                                                        <p id="rsvp-email-error" className="errorMessage" role="alert">{emailError}</p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-12">
                                                <div className="radio-buttons">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <fieldset className="form-field">
                                                                <legend id="rsvp-attendance-label">Will you attend?</legend>
                                                                <p id="rsvp-attendance-help" className="form-helper">Choose one option to let us know if you&apos;ll join the celebration.</p>
                                                                <div role="radiogroup" aria-labelledby="rsvp-attendance-label" aria-describedby={`rsvp-attendance-help${attendanceError ? ' rsvp-attendance-error' : ''}`} aria-invalid={!!attendanceError}>
                                                                    <label htmlFor="rsvp-attending-yes" className="radio-label">
                                                                        <input
                                                                            type="radio"
                                                                            id="rsvp-attending-yes"
                                                                            name="attendance"
                                                                            value="yes"
                                                                            checked={forms.attendance === 'yes'}
                                                                            onChange={(e) => changeHandler(e)}
                                                                            required
                                                                            aria-required="true"
                                                                        />
                                                                        Yes, I will be there
                                                                    </label>
                                                                    <label htmlFor="rsvp-attending-no" className="radio-label">
                                                                        <input
                                                                            type="radio"
                                                                            id="rsvp-attending-no"
                                                                            name="attendance"
                                                                            value="no"
                                                                            checked={forms.attendance === 'no'}
                                                                            onChange={(e) => changeHandler(e)}
                                                                        />
                                                                        Sorry, I can’t come
                                                                    </label>
                                                                </div>
                                                                {attendanceError && (
                                                                    <p id="rsvp-attendance-error" className="errorMessage" role="alert">{attendanceError}</p>
                                                                )}
                                                            </fieldset>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="form-field">
                                                    <label className="form-label" htmlFor="rsvp-guest">Number of guests</label>
                                                    <p id="rsvp-guest-help" className="form-helper">Let us know how many people, including you, will attend.</p>
                                                    <select
                                                        id="rsvp-guest"
                                                        onBlur={(e) => changeHandler(e)}
                                                        onChange={(e) => changeHandler(e)}
                                                        value={forms.guest}
                                                        className="form-control"
                                                        name="guest"
                                                        autoComplete="honorific-prefix"
                                                        required
                                                        aria-required="true"
                                                        aria-invalid={!!guestError}
                                                        aria-describedby={`rsvp-guest-help${guestError ? ' rsvp-guest-error' : ''}`}
                                                    >
                                                        <option value="">Select number of guests</option>
                                                        <option value="1">01</option>
                                                        <option value="2">02</option>
                                                        <option value="3">03</option>
                                                        <option value="4">04</option>
                                                        <option value="5">05</option>
                                                    </select>
                                                    {guestError && (
                                                        <p id="rsvp-guest-error" className="errorMessage" role="alert">{guestError}</p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div>
                                                    <div className="form-field">
                                                        <label className="form-label" htmlFor="rsvp-attend">What will you attend?</label>
                                                        <p id="rsvp-attend-help" className="form-helper">Tell us which portions of the day (ceremony, reception, etc.) you plan to join.</p>
                                                        <input
                                                            id="rsvp-attend"
                                                            value={forms.attend}
                                                            type="text"
                                                            name="attend"
                                                            onBlur={(e) => changeHandler(e)}
                                                            onChange={(e) => changeHandler(e)}
                                                            className="form-control"
                                                            placeholder="Ceremony and reception"
                                                            autoComplete="organization-title"
                                                            required
                                                            aria-required="true"
                                                            aria-invalid={!!attendError}
                                                            aria-describedby={`rsvp-attend-help${attendError ? ' rsvp-attend-error' : ''}`}
                                                        />
                                                        {attendError && (
                                                            <p id="rsvp-attend-error" className="errorMessage" role="alert">{attendError}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-12">
                                                <div className="fullwidth">
                                                    <div className="form-field">
                                                        <label className="form-label" htmlFor="rsvp-meal">Meal preference</label>
                                                        <p id="rsvp-meal-help" className="form-helper">Share your preferred entrée or any dietary needs.</p>
                                                        <select
                                                            id="rsvp-meal"
                                                            onBlur={(e) => changeHandler(e)}
                                                            onChange={(e) => changeHandler(e)}
                                                            value={forms.meal}
                                                            className="form-control"
                                                            name="meal"
                                                            autoComplete="dietary-restrictions"
                                                            required
                                                            aria-required="true"
                                                            aria-invalid={!!mealError}
                                                            aria-describedby={`rsvp-meal-help${mealError ? ' rsvp-meal-error' : ''}`}
                                                        >
                                                            <option value="">Select a meal preference</option>
                                                            <option value="chicken-soup">Chicken Soup</option>
                                                            <option value="mutton-kabab">Motton Kabab</option>
                                                            <option value="chicken-bbq">Chicken BBQ</option>
                                                            <option value="mix-salad">Mix Salad</option>
                                                            <option value="beef-ribs">Beef Ribs</option>
                                                        </select>
                                                        {mealError && (
                                                            <p id="rsvp-meal-error" className="errorMessage" role="alert">{mealError}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="submit-area">
                                            <button type="submit" className="theme-btn">RSVP</button>
                                        </div>
                                        <div className={`form-status${status.type ? ` status-${status.type}` : ''}`} role="status" aria-live="polite">
                                            {status.message}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default RSVP;
