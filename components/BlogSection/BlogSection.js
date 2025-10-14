import React from 'react'
import Link from 'next/link'
import SectionTitle from '../SectionTitle'
import blogs from '../../api/blogs'
import Image from 'next/image'

const BlogSection = (props) => {
    
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <section className={`wpo-blog-section section-padding ${props.blogClass}`}>
            <div className="container">
                <SectionTitle subTitle={'News'} MainTitle={'Read Our Wedding News'}/>
                <div className="wpo-blog-items">
                    <div className="row">
                        {blogs.map((blog, Bitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={Bitem}>
                                <div className="wpo-blog-item">
                                    <div className="wpo-blog-img">
                                        <Image src={blog.screens} alt=""/>
                                    </div>
                                    <div className="wpo-blog-content">
                                        <ul>
                                            <li>By <Link onClick={ClickHandler} href={'/blog-single/[slug]'}  as={`/blog-single/${blog.slug}`}>{blog.author}</Link></li>
                                            <li>{blog.create_at}</li>
                                        </ul>
                                        <h2><Link onClick={ClickHandler} href={'/blog-single/[slug]'}  as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                        <Link className="read-more" onClick={ClickHandler} href={'/blog-single/[slug]'}  as={`/blog-single/${blog.slug}`}>Read More..</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> 
        </section>
    )
}

export default BlogSection;