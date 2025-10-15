import React, { useState } from 'react'
import { Link } from 'react-scroll'
import NavLink from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'


const Header = (props) => {
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
                  <MobileMenu />
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6">
                <div className="navbar-header">
                  <NavLink className="navbar-brand logo" href='/'>Mawhub</NavLink>
                </div>
              </div>
              <div className="col-lg-8 col-md-1 col-1">
                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                  <button className="menu-close"><i className="ti-close"></i></button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li>
                      <NavLink onClick={ClickHandler} href="/">Home</NavLink>
                    </li>
                    <li><Link activeclass="active" to="couple" spy={true} smooth={true} duration={500} offset={-150} >Couple</Link></li>
                    <li><Link activeclass="active" to="story" spy={true} smooth={true} duration={500} offset={-50}>Story</Link></li>
                    <li><Link activeclass="active" to="gallery" spy={true} smooth={true} duration={500} offset={-50}>Gallery</Link></li>
                    <li><Link activeclass="active" to="RSVP" spy={true} smooth={true} duration={500} offset={-50}>RSVP</Link></li>
                    <li><Link activeclass="active" to="event" spy={true} smooth={true} duration={500} offset={-50}>Events</Link></li>
                    <li className="menu-item-has-children">
                      <NavLink onClick={ClickHandler} href="/blog">Blog</NavLink>
                      <ul className="sub-menu">
                        <li><NavLink onClick={ClickHandler} href="/blog">Blog right sidebar</NavLink></li>
                        <li><NavLink onClick={ClickHandler} href="/blog-left-sidebar">Blog left sidebar</NavLink></li>
                        <li><NavLink onClick={ClickHandler} href="/blog-fullwidth">Blog fullwidth</NavLink></li>
                        <li className="menu-item-has-children">
                          <NavLink onClick={ClickHandler} href="/">Blog details</NavLink>
                          <ul className="sub-menu">
                            <li><NavLink onClick={ClickHandler} href="/blog-single/You-must-need-a-great-photographer.">Blog details right sidebar</NavLink>
                            </li>
                            <li><NavLink onClick={ClickHandler} href="/blog-single-left-sidebar/You-must-need-a-great-photographer.">Blog details left
                              sidebar</NavLink></li>
                            <li><NavLink onClick={ClickHandler} href="/blog-single-fullwidth/You-must-need-a-great-photographer.">Blog details
                              fullwidth</NavLink></li>
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
                  <NavLink className="theme-btn" href="/rsvp"><span className="text">Attend Now</span> <span className="mobile">
                    <i className="fi flaticon-user"></i>
                  </span></NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;