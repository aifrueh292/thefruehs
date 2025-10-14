import React from 'react'
import TimeCountDown from '../countdown'
import hImg1 from '/public/images/slider/s1.jpg'
import shape from '/public/images/slider/shape.png'
import Image from 'next/image'


const Hero = (props) => {
    return (
        <section className="static-hero" id='home'>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-6 col-12">
                        <div className="wpo-static-hero-inner">
                            <div data-swiper-parallax="300" className="slide-title">
                                <h1>Save The Date</h1>
                            </div>
                            <div data-swiper-parallax="300" className="slide-title-2">
                                <h2>Sophia & Oliver</h2>
                            </div>
                            <div data-swiper-parallax="400" className="slide-text">
                                <p>We Are Getting Married Jul 8, 2024</p>
                            </div>
                            <div className="wpo-wedding-date">
                                <div className="clock-grids">
                                    <TimeCountDown />
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="static-hero-right">
                <div className="static-hero-img">
                    <div className="static-hero-img-inner">
                        <Image src={hImg1} alt="" />
                    </div>
                    <div className="static-hero-shape"><Image src={shape} alt="" /></div>
                </div>
            </div>
        </section>
    )
}

export default Hero;