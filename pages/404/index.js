import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle'
import Navbar2 from '../../components/Navbar2';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar'
import Error from '../../components/404/404';



const ErrorPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'404'} pagesub={'404'}/> 
            <Error/>
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};

export default ErrorPage;
