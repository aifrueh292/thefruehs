import React from 'react'
import Link from 'next/link'
import ins1 from '/public/images/instragram/1.jpg'
import ins2 from '/public/images/instragram/2.jpg'
import ins3 from '/public/images/instragram/3.jpg'
import Image from 'next/image'

const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <footer className="wpo-site-footer" style={{ backgroundImage: `url(${'/images/footer-bg.jpg'})` }}>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <a className="logo" href="/">Mawhub</a>
                                </div>
                                <p>We can’t wait to see all of our beloved friends and relatives at our wedding.</p>
                                <ul>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-twitter-alt"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-instagram"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Links</h3>
                                </div>
                                <div className="link-wrap">
                                    <ul>
                                        <li><Link onClick={ClickHandler} href="/#couple">About</Link></li>
                                        <li><Link onClick={ClickHandler} href="/#story">Story</Link></li>
                                        <li><Link onClick={ClickHandler} href="/#RSVP">RSVP</Link></li>
                                    </ul>
                                    <ul>
                                        <li><Link onClick={ClickHandler} href="/#gallery">Gallery</Link></li>
                                        <li><Link onClick={ClickHandler} href="/#RSVP">Get Quote</Link></li>
                                        <li><Link onClick={ClickHandler} href="/#RSVP">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact </h3>
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li>mawhub@gmail.com</li>
                                        <li>+0123 456 789</li>
                                        <li>4517 Washington Ave. Manchester, Kentucky 3945</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget instagram">
                                <div className="widget-title">
                                    <h3>Instagram</h3>
                                </div>
                                <ul className="d-flex">
                                    <li><Image src={ins1} alt="" /></li>
                                    <li><Image src={ins2} alt="" /></li>
                                    <li><Image src={ins3} alt="" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
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

export default Footer;