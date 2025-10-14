import React, {Fragment} from 'react';
import Footer from '../../components/footer/Footer';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle'
import CoupleSection2 from '../../components/CoupleSection2/CoupleSection2';
import VideoSection from '../../components/VideoSection';
import StorySection2 from '../../components/StorySection2/StorySection2';
import PortfolioSection2 from '../../components/PortfolioSection2/PortfolioSection2';
import Scrollbar from '../../components/scrollbar'

const AboutPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'About Us'} pagesub={'About'}/> 
            <CoupleSection2/>
            <VideoSection/>
            <StorySection2 pClass={'pb-0'}/>
            <PortfolioSection2/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AboutPage;
