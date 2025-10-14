import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import shape1 from '/public/images/contact/4.png'
import shape2 from '/public/images/contact/3.png'
import Image from 'next/image';


const RSVP3 = (props) => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        address: '',
        meal: '',
        attend: '',
        guest: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
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
                guest: ''
            })
        } else {
            validator.showMessages();
        }
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
                                                <div className="radio-buttons">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <p>
                                                                <input type="radio" id="attend" name="radio-group" defaultChecked />
                                                                <label htmlFor="attend">Yes, I will be there</label>
                                                            </p>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <p>
                                                                <input type="radio" id="not" name="radio-group" />
                                                                <label htmlFor="not">Sorry, I can’t come</label>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-12">
                                                <select
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    value={forms.guest}
                                                    type="text"
                                                    className="form-control"
                                                    name="guest">
                                                    <option>Number Of Guests</option>
                                                    <option>01</option>
                                                    <option>02</option>
                                                    <option>03</option>
                                                    <option>04</option>
                                                    <option>05</option>
                                                </select>
                                                {validator.message('guest', forms.guest, 'required')}
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
                                                        type="text"
                                                        className="form-control"
                                                        name="meal">
                                                        <option>Meal Preferences</option>
                                                        <option>Chicken Soup</option>
                                                        <option>Motton Kabab</option>
                                                        <option>Chicken BBQ</option>
                                                        <option>Mix Salad</option>
                                                        <option>Beef Ribs </option>
                                                    </select>
                                                    {validator.message('meal', forms.meal, 'required')}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="submit-area">
                                            <button type="submit" className="theme-btn">RSVP</button>
                                        </div>
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
