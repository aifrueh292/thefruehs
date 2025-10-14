import React from 'react';
import SectionTitle from '../SectionTitle'
import sImg1 from '/public/images/story/4.png'
import sImg2 from '/public/images/story/5.png'
import sImg3 from '/public/images/story/6.png'

import shape1 from '/public/images/story/shape.jpg'
import shape2 from '/public/images/story/shape2.jpg'
import Image from 'next/image';

const StorySection2 = (props) => {


    return (
        <section className={`wpo-story-section-s2 section-padding ${props.pClass}`} id="story">
            <div className="container">
                <SectionTitle subTitle={'Our Story'} MainTitle={'How it Happened'} />
                <div className="wpo-story-wrap">
                    <div className="wpo-story-item">
                        <div className="wpo-story-img-wrap">
                            <div className="wpo-story-img">
                                <Image src={sImg1} alt="" />
                            </div>
                            <div className="wpo-img-shape">
                                <Image src={shape1} alt="" />
                            </div>
                        </div>
                        <div className="wpo-story-content">
                            <div className="wpo-story-content-inner">
                                <span>15 June, 2014</span>
                                <h2>How we meet</h2>
                                <p>Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed. Enim
                                    tortor, faucibus netus orci donec volutpat adipiscing.</p>
                            </div>
                        </div>
                    </div>
                    <div className="wpo-story-item">
                        <div className="wpo-story-img-wrap">
                            <div className="wpo-story-img">
                                <Image src={sImg2} alt="" />
                            </div>
                            <div className="wpo-img-shape">
                                <Image src={shape2} alt="" />
                            </div>
                        </div>
                        <div className="wpo-story-content">
                            <div className="wpo-story-content-inner">
                                <span>02 Nov, 2020</span>
                                <h2>He proposed, I said yes</h2>
                                <p>Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed. Enim
                                    tortor, faucibus netus orci donec volutpat adipiscing.</p>
                            </div>
                        </div>
                    </div>
                    <div className="wpo-story-item">
                        <div className="wpo-story-img-wrap">
                            <div className="wpo-story-img">
                                <Image src={sImg3} alt="" />
                            </div>
                            <div className="wpo-img-shape">
                                <Image src={shape1} alt="" />
                            </div>
                        </div>
                        <div className="wpo-story-content">
                            <div className="wpo-story-content-inner">
                                <span>15 Apr, 2021</span>
                                <h2>Our Engagement Day</h2>
                                <p>Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed. Enim
                                    tortor, faucibus netus orci donec volutpat adipiscing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default StorySection2;