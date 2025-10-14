import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import PageTitle from '../../components/pagetitle';
import Navbar2 from '../../components/Navbar2';
import Footer from '../../components/footer/Footer';
import BlogList from '../../components/BlogList';
import Scrollbar from '../../components/scrollbar';



const BlogSingle = (props) => {
    const router = useRouter()

    return (
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle='Latest News' pagesub="blog" />
            <BlogList/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogSingle;
