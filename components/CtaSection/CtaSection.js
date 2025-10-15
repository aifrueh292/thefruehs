import React from 'react'
import Link from 'next/link'


const CtaSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className={`wpo-cta-section ${props.ctClass}`}>
            <div className="conatiner-fluid">
                <div className="wpo-cta-item">
                    <h2>We Can’t Wait To See You</h2>
                    <p>We Will Be Very Happy if You Join Our Big Day. We are Waiting For You.</p>
                    <Link onClick={ClickHandler} href="/#RSVP" className="theme-btn-s2">Join With Us</Link>
                </div>
            </div>
        </div>
    )
}

export default CtaSection;