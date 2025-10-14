import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar'
import Hero2 from '../../components/hero2/Hero2';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import CoupleSection2 from '../../components/CoupleSection2/CoupleSection2';
import StorySection2 from '../../components/StorySection2/StorySection2';
import PortfolioSection2 from '../../components/PortfolioSection2/PortfolioSection2';
import RSVP2 from '../../components/RSVP2/RSVP2';
import BrideGrooms from '../../components/BrideGrooms/BrideGrooms';
import CtaSection from '../../components/CtaSection/CtaSection';
import EventSectionS2 from '../../components/EventSectionS2/EventSectionS2';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer2 from '../../components/footer2/Footer2';
import Scrollbar from '../../components/scrollbar'


const HomePage = () => {

    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header-s1'} />
            <Hero2 />
            <PartnerSection />
            <CoupleSection2 ptClass={'pt-0'}/>
            <StorySection2 pClass={'p-0'}/>
            <PortfolioSection2 pClass={'pb-0'}/>
            <RSVP2 pClass={'pb-0'} />
            <BrideGrooms />
            <CtaSection ctClass={'wpo-cta-section-s2'} />
            <EventSectionS2 />
            <BlogSection blogClass={'section-bg'}/>
            <Footer2 />
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage;