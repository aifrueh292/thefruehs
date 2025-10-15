import React from 'react';
import Link from 'next/link'
import coupleImg1 from '/public/images/couple/middle-img-2.png'
import shape from '/public/images/couple/shape-line.png'
import Image from 'next/image';


const CoupleSection3 = (props) => {

    return (
        <section className="wpo-couple-section-s3 section-padding p-0" id="couple">
            <div className="container">
                <div className="couple-area clearfix">
                    <div className="row align-items-center">
                        <div className="col col-xl-3 col-lg-4 col-12">
                            <div className="text-grid">
                                <h3>Elidia Guerrero</h3>
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
                                    <div className="line-shape">
                                        <Image src={shape} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-3 col-lg-4 col-12">
                            <div className="text-grid">
                                <h3>Alexander Frueh</h3>
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



export default CoupleSection3;