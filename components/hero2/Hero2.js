import React from 'react'
import hImg1 from '/public/images/slider/s2.png'
import shape1 from '/public/images/slider/shape2.png'
import TimeCountDown from '../countdown'
import Image from 'next/image'


const Hero2 = (props) => {
    return (
        <section className="static-hero-s2">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6 col-12">
                                <div className="wpo-static-hero-inner">
                                    <div className="shape-1"><Image src={shape1} alt="" /></div>
                                    <div data-swiper-parallax="300" className="slide-title">
                                        <h2>Sophia & Oliver</h2>
                                    </div>
                                    <div data-swiper-parallax="400" className="slide-text">
                                        <p>We Are Getting Married November 15,2024</p>
                                    </div>
                                    <div className="wpo-wedding-date">
                                        <div className="clock-grids">
                                            <TimeCountDown />
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="static-hero-right">
                                    <div className="static-hero-img">
                                        <div className="static-hero-img-inner">
                                            <Image src={hImg1} alt="" />
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

export default Hero2;