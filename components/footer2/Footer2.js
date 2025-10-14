import React from 'react'
import Link from 'next/link'
import shape1 from '/public/images/ft-fower1.png'
import shape2 from '/public/images/ft-fower2.png'
import Image from 'next/image'

const Footer2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <footer className="wpo-site-footer-s2" style={{ backgroundImage: `url(${'/images/footer-bg2.jpg'})` }}>
            <div className="wpo-upper-footer">
                <div className="wpo-upper-wrap">
                    <h3>Thank You</h3>
                    <p>For Being With Us</p>
                    <div className="shape1"><Image src={shape1} alt=""/></div>
                    <div className="shape2"><Image src={shape2} alt=""/></div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                        <p className="copyright"> &copy; Copyright 2024 | <Link onClick={ClickHandler} href="/">Mawhub</Link> | All right
                                reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer2;