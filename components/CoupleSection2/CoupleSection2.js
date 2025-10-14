import React from 'react';
import Link from 'next/link'
import coupleImg1 from '/public/images/couple/middle-img.png'
import Image from 'next/image';


const CoupleSection2 = (props) => {

    return (
        <section className={`wpo-couple-section-s2 section-padding ${props.ptClass}`} id="couple">
            <div className="container">
                <div className="couple-area clearfix">
                    <div className="row align-items-center">
                        <div className="col col-xl-3 col-lg-4 col-12">
                            <div className="text-grid">
                                <h3>Sophia Miles</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor vitae nisl.
                                    fringilla pellesque amet tempus.</p>
                                <div className="social">
                                    <ul>
                                        <li><Link href="/"><i className="ti-facebook"></i></Link></li>
                                        <li><Link href="/"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link href="/"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-6 col-lg-4 col-12">
                            <div className="middle-couple-pic-wrap">
                                <div className="middle-couple-pic">
                                    <div className="middle-couple-pic-inner">
                                        <Image src={coupleImg1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-3 col-lg-4 col-12">
                            <div className="text-grid">
                                <h3>Oliver Zonas</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor vitae nisl.
                                    fringilla pellesque amet tempus.</p>
                                <div className="social">
                                    <ul>
                                        <li><Link href="/"><i className="ti-facebook"></i></Link></li>
                                        <li><Link href="/"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link href="/"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}



export default CoupleSection2;