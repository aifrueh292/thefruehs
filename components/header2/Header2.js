import React, { useState } from 'react'
import Link from 'next/link'
import MobileMenu2 from '../MobileMenu2/MobileMenu2'


const Header2 = (props) => {
  const [menuActive, setMenuState] = useState(false);
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }
  const SubmitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <header id="header">
      <div className={`wpo-site-header ${props.hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu2 />
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6">
                <div className="navbar-header">
                  <Link className="navbar-brand logo" href='/'>The Fruehs</Link>
                </div>
              </div>
              <div className="col-lg-8 col-md-1 col-1">
                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                  <button className="menu-close"><i className="ti-close"></i></button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li>
                      <Link onClick={ClickHandler} href="/" >Home</Link>
                    </li>
                    <li><Link onClick={ClickHandler} href="/about">about</Link></li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="/">wedding</Link>
                      <ul className="sub-menu">
                        <li><Link onClick={ClickHandler} href="/wedding">Wedding</Link></li>
                        <li><Link onClick={ClickHandler} href="/wedding-details">Wedding Details</Link></li>
                      </ul>
                    </li>
                    <li><Link onClick={ClickHandler} href="/gallery">Gallery</Link></li>
                    <li><Link onClick={ClickHandler} href="/rsvp">RSVP</Link></li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="/blog">Blog</Link>
                      <ul className="sub-menu">
                        <li><Link onClick={ClickHandler} href="/blog">Blog right sidebar</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-left-sidebar">Blog left sidebar</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-fullwidth">Blog fullwidth</Link></li>
                        <li className="menu-item-has-children">
                          <Link onClick={ClickHandler} href="/">Blog details</Link>
                          <ul className="sub-menu">
                            <li><Link onClick={ClickHandler} href="/blog-single/You-must-need-a-great-photographer.">Blog details right sidebar</Link>
                            </li>
                            <li><Link onClick={ClickHandler} href="/blog-single-left-sidebar/You-must-need-a-great-photographer.">Blog details left
                              sidebar</Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single-fullwidth/You-must-need-a-great-photographer.">Blog details
                              fullwidth</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>

                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-2">
                <div className="header-right">
                  <div className="header-search-form-wrapper">
                    <div className="cart-search-contact">
                      <button onClick={() => setMenuState(!menuActive)} className="search-toggle-btn"><i
                        className={`fi ti-search ${menuActive ? "ti-close" : "ti-search"}`}></i></button>
                      <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                        <form onSubmit={SubmitHandler}>
                          <div>
                            <input type="text" className="form-control"
                              placeholder="Search here..." />
                            <button type="submit"><i
                              className="fi ti-search"></i></button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <Link className="theme-btn" href="/rsvp"><span className="text">Attend Now</span> <span className="mobile">
                    <i className="fi flaticon-user"></i>
                  </span></Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header2;