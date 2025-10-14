import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import Hero4 from '../../components/hero4/Hero4';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import CoupleSection from '../../components/CoupleSection/CoupleSection';
import VideoSection from '../../components/VideoSection';
import StorySection from '../../components/StorySection/StorySection';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import BrideGrooms from '../../components/BrideGrooms/BrideGrooms';
import RSVP from '../../components/RSVP';
import EventSection from '../../components/EventSection/EventSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar'


const HomePage4 =() => {

    return(
        <Fragment>
            <Navbar2/>
            <Hero4/>
            <PartnerSection/>
            <CoupleSection cClass={'pt-0'}/>
            <VideoSection/>
            <StorySection/>
            <PortfolioSection pClass={'p-0'}/>
            <BrideGrooms/>
            <RSVP/>
            <EventSection/>
            <CtaSection/>
            <BlogSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default HomePage4;