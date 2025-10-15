import React from 'react';
import SectionTitle from '../SectionTitle'
import sImg1 from '/public/images/story/4.png'
import sImg2 from '/public/images/story/5.png'
import sImg3 from '/public/images/story/6.png'
import Image from 'next/image';

const StorySection3 = (props) => {

    return (
        <section className="wpo-story-section-s3 section-padding pb-0" id="story">
            <div className="container">
                <SectionTitle subTitle={'Our Story'} MainTitle={'How it Happened'} />
                <div className="wpo-story-wrap">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-story-item">
                                <div className="wpo-story-img-wrap">
                                    <div className="wpo-story-img">
                                        <Image src={sImg1} alt=""/>
                                    </div>
                                </div>
                                <div className="wpo-story-content">
                                    <div className="wpo-story-content-inner">
                                        <span>July 10, 2020</span>
                                        <h2>How We Met</h2>
                                        <p>Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed.
                                            Enim
                                            tortor, faucibus netus orci donec volutpat adipiscing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-story-item">
                                <div className="wpo-story-img-wrap">
                                    <div className="wpo-story-img">
                                        <Image src={sImg2} alt=""/>
                                    </div>
                                </div>
                                <div className="wpo-story-content">
                                    <div className="wpo-story-content-inner">
                                        <span>August 15, 2022</span>
                                        <h2>He Proposed</h2>
                                        <p>Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed.
                                            Enim
                                            tortor, faucibus netus orci donec volutpat adipiscing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-story-item">
                                <div className="wpo-story-img-wrap">
                                    <div className="wpo-story-img">
                                        <Image src={sImg3} alt=""/>
                                    </div>
                                </div>
                                <div className="wpo-story-content">
                                    <div className="wpo-story-content-inner">
                                        <span>November 21, 2022</span>
                                        <h2>We Moved In</h2>
                                        <p>Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed.
                                            Enim
                                            tortor, faucibus netus orci donec volutpat adipiscing.</p>
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


export default StorySection3;