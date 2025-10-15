import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import shape1 from '/public/images/contact/left-bg.png'
import shape2 from '/public/images/contact/right-bg.png'
import Image from 'next/image';

const RSVP2 = (props) => {

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
        <section className={`wpo-contact-section-s2 section-padding ${props.pClass}`} id="RSVP">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-12 col-md-12 col-12">
                        <div className="wpo-contact-section-wrapper">
                            <div className="wpo-contact-section-inner">
                                <div className="wpo-contact-form-area">
                                    <div className="wpo-section-title">
                                        <h2 id="rsvp2-title">Make an Inquiry</h2>
                                    </div>
                                    <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" noValidate aria-labelledby="rsvp2-title">
                                        <div className="form-field">
                                            <label className="form-label" htmlFor="rsvp2-name">Full name</label>
                                            <p id="rsvp2-name-help" className="form-helper">Use the name that appears on your invitation so we can match your RSVP.</p>
                                            <input
                                                id="rsvp2-name"
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
                                                aria-describedby={`rsvp2-name-help${nameError ? ' rsvp2-name-error' : ''}`}
                                            />
                                            {nameError && (
                                                <p id="rsvp2-name-error" className="errorMessage" role="alert">{nameError}</p>
                                            )}
                                        </div>
                                        <div className="form-field">
                                            <label className="form-label" htmlFor="rsvp2-email">Email address</label>
                                            <p id="rsvp2-email-help" className="form-helper">We&apos;ll send updates and reminders to this address.</p>
                                            <input
                                                id="rsvp2-email"
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
                                                aria-describedby={`rsvp2-email-help${emailError ? ' rsvp2-email-error' : ''}`}
                                            />
                                            {emailError && (
                                                <p id="rsvp2-email-error" className="errorMessage" role="alert">{emailError}</p>
                                            )}
                                        </div>
                                        <div className="radio-buttons">
                                            <fieldset className="form-field">
                                                <legend id="rsvp2-attendance-label">Will you attend?</legend>
                                                <p id="rsvp2-attendance-help" className="form-helper">Choose one option to let us know if you&apos;ll join the celebration.</p>
                                                <div role="radiogroup" aria-labelledby="rsvp2-attendance-label" aria-describedby={`rsvp2-attendance-help${attendanceError ? ' rsvp2-attendance-error' : ''}`} aria-invalid={!!attendanceError}>
                                                    <label htmlFor="rsvp2-attending-yes" className="radio-label">
                                                        <input
                                                            type="radio"
                                                            id="rsvp2-attending-yes"
                                                            name="attendance"
                                                            value="yes"
                                                            checked={forms.attendance === 'yes'}
                                                            onChange={(e) => changeHandler(e)}
                                                            required
                                                            aria-required="true"
                                                        />
                                                        Yes, I will be there
                                                    </label>
                                                    <label htmlFor="rsvp2-attending-no" className="radio-label">
                                                        <input
                                                            type="radio"
                                                            id="rsvp2-attending-no"
                                                            name="attendance"
                                                            value="no"
                                                            checked={forms.attendance === 'no'}
                                                            onChange={(e) => changeHandler(e)}
                                                        />
                                                        Sorry, I can’t come
                                                    </label>
                                                </div>
                                                {attendanceError && (
                                                    <p id="rsvp2-attendance-error" className="errorMessage" role="alert">{attendanceError}</p>
                                                )}
                                            </fieldset>
                                        </div>
                                        <div className="form-field">
                                            <label className="form-label" htmlFor="rsvp2-guest">Number of guests</label>
                                            <p id="rsvp2-guest-help" className="form-helper">Let us know how many people, including you, will attend.</p>
                                            <select
                                                id="rsvp2-guest"
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                                value={forms.guest}
                                                className="form-control"
                                                name="guest"
                                                autoComplete="honorific-prefix"
                                                required
                                                aria-required="true"
                                                aria-invalid={!!guestError}
                                                aria-describedby={`rsvp2-guest-help${guestError ? ' rsvp2-guest-error' : ''}`}
                                            >
                                                <option value="">Select number of guests</option>
                                                <option value="1">01</option>
                                                <option value="2">02</option>
                                                <option value="3">03</option>
                                                <option value="4">04</option>
                                                <option value="5">05</option>
                                            </select>
                                            {guestError && (
                                                <p id="rsvp2-guest-error" className="errorMessage" role="alert">{guestError}</p>
                                            )}
                                        </div>
                                        <div className="form-field">
                                            <label className="form-label" htmlFor="rsvp2-attend">What will you attend?</label>
                                            <p id="rsvp2-attend-help" className="form-helper">Tell us which portions of the day (ceremony, reception, etc.) you plan to join.</p>
                                            <input
                                                id="rsvp2-attend"
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
                                                aria-describedby={`rsvp2-attend-help${attendError ? ' rsvp2-attend-error' : ''}`}
                                            />
                                            {attendError && (
                                                <p id="rsvp2-attend-error" className="errorMessage" role="alert">{attendError}</p>
                                            )}
                                        </div>
                                        <div className="form-field">
                                            <label className="form-label" htmlFor="rsvp2-meal">Meal preference</label>
                                            <p id="rsvp2-meal-help" className="form-helper">Share your preferred entrée or any dietary needs.</p>
                                            <select
                                                id="rsvp2-meal"
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                                value={forms.meal}
                                                className="form-control"
                                                name="meal"
                                                autoComplete="dietary-restrictions"
                                                required
                                                aria-required="true"
                                                aria-invalid={!!mealError}
                                                aria-describedby={`rsvp2-meal-help${mealError ? ' rsvp2-meal-error' : ''}`}
                                            >
                                                <option value="">Select a meal preference</option>
                                                <option value="chicken-soup">Chicken Soup</option>
                                                <option value="mutton-kabab">Motton Kabab</option>
                                                <option value="chicken-bbq">Chicken BBQ</option>
                                                <option value="mix-salad">Mix Salad</option>
                                                <option value="beef-ribs">Beef Ribs</option>
                                            </select>
                                            {mealError && (
                                                <p id="rsvp2-meal-error" className="errorMessage" role="alert">{mealError}</p>
                                            )}
                                        </div>
                                        <div className="submit-area">
                                            <button type="submit" className="theme-btn">Submit Now</button>
                                        </div>
                                        <div className={`form-status${status.type ? ` status-${status.type}` : ''}`} role="status" aria-live="polite">
                                            {status.message}
                                        </div>
                                    </form >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="left-img"><Image src={shape1} alt="" /></div>
            <div className="right-img"><Image src={shape2} alt="" /></div>
        </section>
    )
}
export default RSVP2;
