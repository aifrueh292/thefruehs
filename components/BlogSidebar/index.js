import React from 'react';
import Link from 'next/link'
import about from '/public/images/blog/about-widget.jpg'
import blogs from '../../api/blogs'

import ins1 from '/public/images/instragram/1.jpg'
import ins2 from '/public/images/instragram/2.jpg'
import ins3 from '/public/images/instragram/3.jpg'
import ins4 from '/public/images/instragram/4.jpg'
import ins5 from '/public/images/instragram/5.jpg'
import ins6 from '/public/images/instragram/6.jpg'
import Image from 'next/image';

const insstgram = [
    {
        insImg:ins1
    },
    {
        insImg:ins2
    },
    {
        insImg:ins3
    },
    {
        insImg:ins4
    },
    {
        insImg:ins5
    },
    {
        insImg:ins6
    },
]

const BlogSidebar = (props) => {

    const SubmitHandler = (e) =>{
       e.preventDefault()
    }

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget about-widget">
                    <div className="img-holder">
                        <Image src={about} alt=""/>
                    </div>
                    <h4>Jenny Watson</h4>
                    <p>Hi! beautiful people. I`m an authtor of this blog. Read our post - stay with us</p>
                    <div className="social">
                        <ul className="clearfix">
                            <li><Link onClick={ClickHandler} href="/blog-single/You-must-need-a-great-photographer."><i className="ti-facebook"></i></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/You-must-need-a-great-photographer."><i className="ti-twitter-alt"></i></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/You-must-need-a-great-photographer."><i className="ti-linkedin"></i></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/You-must-need-a-great-photographer."><i className="ti-pinterest"></i></Link></li>
                        </ul>
                    </div>
                    <div className="aw-shape">
                    </div>
                </div>
                <div className="widget search-widget">
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.."/>
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Categories</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} href="/blog-single/You-must-need-a-great-photographer.">Wedding Event <span>5</span></Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/You-must-need-a-great-photographer.">Photography <span>7</span></Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/You-must-need-a-great-photographer.">Album <span>3</span></Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/You-must-need-a-great-photographer.">Wedding Dress<span>6</span></Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/You-must-need-a-great-photographer.">Best Gift <span>2</span></Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/You-must-need-a-great-photographer.">Wedding Tips <span>8</span></Link></li>
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        {blogs.map((blog, Bitem) => (
                            <div className="post" key={Bitem}>
                                <div className="img-holder">
                                    <Image src={blog.screens} alt="" />
                                </div>
                                <div className="details">
                                    <h4><Link onClick={ClickHandler} href={'/blog-single/[slug]'}  as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h4>
                                    <span className="date">{blog.create_at}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="widget wpo-instagram-widget">
                    <div className="widget-title">
                        <h3>Instagram</h3>
                    </div>
                    <ul className="d-flex">
                        {insstgram.map((item, ins) => (
                            <li key={ins}><Image src={item.insImg} alt="" /></li>
                        ))}
                    </ul>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} href="/blog-single/You-must-need-a-great-photographer.">photography</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/You-must-need-a-great-photographer.">Planning</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/You-must-need-a-great-photographer.">wedding</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/You-must-need-a-great-photographer.">events</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/You-must-need-a-great-photographer.">creative</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/You-must-need-a-great-photographer.">Solution</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/You-must-need-a-great-photographer.">collection</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/You-must-need-a-great-photographer.">Idea</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/You-must-need-a-great-photographer.">bride & groom</Link></li>
                    </ul>
                </div>
            </div>
        </div>
     )
        
}

export default BlogSidebar;
