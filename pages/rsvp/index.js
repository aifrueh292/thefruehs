import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle'
import RSVP3 from '../../components/RSVP3';
import Navbar2 from '../../components/Navbar2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar'
import EventSection from '../../components/EventSection/EventSection';

const RSVPPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'RSVP'} pagesub={'RSVP'}/> 
            <RSVP3 />
            <EventSection eClass={'pt-0'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default RSVPPage;
