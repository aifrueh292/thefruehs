import React from 'react'
import hImg1 from '/public/images/slider/s3.png'
import shape1 from '/public/images/slider/line-shape1.svg'
import shape2 from '/public/images/slider/line-shape2.svg'
import shape3 from '/public/images/slider/shape3.png'
import shape4 from '/public/images/slider/shape4.png'
import shape5 from '/public/images/slider/shape01.png'
import shape6 from '/public/images/slider/shape02.png'
import Image from 'next/image'


const Hero3 = (props) => {
    return (
        <section className="static-hero-s3">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-6  col-12">
                                <div className="wpo-static-hero-inner">
                                    <div data-swiper-parallax="300" className="slide-title">
                                        <h2>Sophia & Oliver</h2>
                                    </div>
                                    <div data-swiper-parallax="400" className="slide-text">
                                        <p>We Are Getting Married November 15,2024</p>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="shape">
                                        <Image src={shape1} alt=""/>
                                    </div>
                                    <div className="shape2">
                                        <Image src={shape2} alt=""/>
                                    </div>
                                    <div className="flower-1">
                                        <Image src={shape3} alt=""/>
                                    </div>
                                    <div className="flower-2">
                                        <Image src={shape4} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-12">
                                <div className="static-hero-right">
                                    <div className="static-hero-img">
                                        <div className="static-hero-img-inner">
                                            <Image src={hImg1} alt=""/>
                                        </div>
                                        <div className="shape01">
                                            <Image src={shape5} alt=""/>
                                        </div>
                                        <div className="shape02">
                                            <Image src={shape6} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero3;