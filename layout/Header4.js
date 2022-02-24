
import Link from 'next/link';
import { useState } from 'react';

function Header4() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");
    return (
      <>
        {/* <!-- Header --> */}
        <header className="site-header  text-black mo-left">
            {/* <!-- Main Header --> */}
            <div className="sticky-header main-bar-wraper navbar-expand-lg">
                <div className="main-bar clearfix ">
                    <div className="container clearfix">
                        {/* <!-- Website Logo --> */}
                        <div className="logo-header mostion logo-dark">
                           <Link href="/"><a><img src="images/logo.png" alt=""/></a></Link>
                        </div>
                        {/* <!-- Nav Toggle Button --> */}
                        <button className={`navbar-toggler collapsed navicon justify-content-end ${show ? "open" : ""}`} onClick={() => setShow(!show)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        {/* <!-- Extra Nav --> */}
                        <div className="extra-nav">
                            <div className="extra-cell">
                                <Link href="contact-us-1"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Get A Quote</a></Link>
                            </div>
                        </div>
                        <div className={`header-nav navbar-collapse collapse justify-content-end ${show ? "show" : ""}`} id="navbarNavDropdown">
                            <div className="logo-header">
                                <Link href="/"><a><img src="images/logo.png" alt=""/></a></Link>
                            </div>
                            <ul className="nav navbar-nav navbar">	
                                <li className={`${open === "home" ? "open" : ""}`}><a  onClick={() => setOpen("home")}><span>Home</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                        <li><Link href="/"><a>Home 1</a></Link></li>
										
                                    </ul>
                                </li>
                                <li className={`${open === "about" ? "open" : ""}`}><a  onClick={() => setOpen("about")}><span>Pages</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                        <li className={`${open === "aboutsub1" ? "open" : ""}`}><a  onClick={() => setOpen("aboutsub1")}>About Us <i className="fa fa-angle-right"></i></a>
                                            <ul className="sub-menu">
                                                <Link href="/about-us-1"><a>About Us 1</a></Link>
                                                
                                            </ul>
                                        </li>
                                        <li className={`${open === "aboutsub2" ? "open" : ""}`}><a  onClick={() => setOpen("aboutsub2")}>Faq <i className="fa fa-angle-right"></i></a>
                                            <ul className="sub-menu">
                                                <Link href="/faq-1"><a>Faq 1</a></Link>
                                                
                                            </ul>
                                        </li>
                                        <li><a href="/javascript:void(0);">Pricing Table <i className="fa fa-angle-right"></i></a>
                                            <ul className="sub-menu">
                                                <Link href="/pricing-table-1"><a>Pricing Table 1</a></Link>
                                               
                                            </ul>
                                        </li>
                                        <li><a href="/javascript:void(0);">Team <i className="fa fa-angle-right"></i></a>
                                            <ul className="sub-menu">
                                                <Link href="/team-1"><a>Team 1</a></Link>
                                                
                                            </ul>
                                        </li>
                                        <li><Link href="/coming-soon"><a>Coming Soon</a></Link></li>
                                        <li><Link href="/error-404"><a>Error 404</a></Link></li>
                                        <li><Link href="/sitedown"><a>Site Down</a></Link></li>
                                    </ul>
                                </li>
                                <li><a href="/javascript:void(0);"><span>Services</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                        <li><a href="/javascript:void(0);">Services <i className="fa fa-angle-right"></i></a>
                                            <ul className="sub-menu">
                                                <Link href="/services-1"><a>Services 1</a></Link>
                                               
                                            </ul>
                                        </li>
                                        <li><a href="/javascript:void(0);">Services Details <i className="fa fa-angle-right"></i></a>
                                            <ul className="sub-menu">
                                                <Link href="/services-details-1"><a>Services Details 1</a></Link>
                                                
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="/javascript:void(0);"><span>Blog</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                        <li><Link href="/blog-grid-2"><a>Blog Grid 2</a></Link></li>
                                        <li><Link href="/blog-large-left-sidebar"><a>Large Left Sidebar</a></Link></li>
                                        <li><Link href="/blog-large-right-sidebar"><a>Large Right Sidebar</a></Link></li>
                                        <li><a href="/javascript:void(0);">Blog Details <i className="fa fa-angle-right"></i></a>
                                            <ul className="sub-menu">
                                                <Link href="/blog-details-1"><a>Blog Details 1</a></Link>
                                                
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="/javascript:void(0);"><span>Contact Us</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                        <li><Link href="/contact-us-1"><a>Contact Us 1</a></Link></li>
                                       
                                    </ul>
                                </li>
                            </ul>
                            <div className="dlab-social-icon">
                                <ul>
                                    <Link href="https://en-gb.facebook.com/"><a className="fa fa-facebook"></a></Link>
                                    <Link href="https://twitter.com/login?lang=en"><a className="fa fa-twitter"></a></Link>
                                    <Link href="https://www.linkedin.com/login"><a className="fa fa-linkedin"></a></Link>
                                    <Link href="https://www.instagram.com/"><a className="fa fa-instagram"></a></Link>
                                </ul>
                            </div>		
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Main Header End --> */}
        </header>
        {/* <!-- Header End --> */}
        
      </>
    )
  }
  
  export default Header4;

  