import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar'
import Hero3 from '../../components/hero3/Hero3';
import WeddingTime from '../../components/weddingTime/WeddingTime';
import CoupleSection3 from '../../components/CoupleSection3/CoupleSection3';
import StorySection3 from '../../components/StorySection3/StorySection3';
import PortfolioSection2 from '../../components/PortfolioSection2/PortfolioSection2';
import RSVP3 from '../../components/RSVP3';
import BrideGrooms from '../../components/BrideGrooms/BrideGrooms';
import CtaSection from '../../components/CtaSection/CtaSection';
import EventSectionS2 from '../../components/EventSectionS2/EventSectionS2';
import Footer2 from '../../components/footer2/Footer2';
import Scrollbar from '../../components/scrollbar'


const HomePage3 = () => {

    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header-s1'} />
            <Hero3 />
            <WeddingTime />
            <CoupleSection3 />
            <StorySection3 />
            <PortfolioSection2 pClass={'pb-0'}/>
            <RSVP3/>
            <BrideGrooms tClass={'pt-0'} />
            <CtaSection ctClass={'wpo-cta-section-s2'} />
            <EventSectionS2 />
            <Footer2 />
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage3;