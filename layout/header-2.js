import Link from 'next/link';
import { useState } from 'react';
function Header2() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");
    return (
        <>
            <header className="site-header mo-left header-transparent d-none">
                <div className="container">
                    <div className="top-bar">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="dlab-topbar-left">
                                <ul>
                                    <li>
                                        <i className="la la-envelope"></i>{" "}
                                        info@example.com
                                    </li>
                                    <li>
                                        <i className="la la-phone-volume"></i> +91
                                        987-654-3210
                                    </li>
                                </ul>
                            </div>
                            <div className="dlab-topbar-right">
                                <ul className="dlab-social-icon">
                                    <li>
                                        <a
                                            className="fa fa-facebook"
                                            href="https://en-gb.facebook.com/"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            className="fa fa-instagram"
                                            href="https://www.instagram.com/"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            className="fa fa-twitter"
                                            href="https://twitter.com/login?lang=en"
                                        ></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Main Header --> */}
                <div className="sticky-header main-bar-wraper navbar-expand-lg">
                    <div className="main-bar clearfix ">
                        <div className="container clearfix">
                            {/* <!-- Website Logo --> */}
                            <div className="logo-header mostion logo-dark">
                                <Link href="/">
                                    <a>
                                        <img className="custom-logo-white" src="images/logo-white.png" alt="" />
                                        <img className="custom-logo" src="images/logo.png" alt="" />
                                    </a>
                                </Link>
                            </div>
                            {/* <!-- Nav Toggle Button --> */}
                            <button
                                className={`navbar-toggler collapsed navicon justify-content-end ${
                                    show ? "open" : ""
                                }`}
                                onClick={() => setShow(!show)}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            {/* <!-- Extra Nav --> */}
                            <div className="extra-nav">
                                <div className="extra-cell">
                                <Link href="contact-us-2">
                                        <a className="btn btn-light rounded-xl shadow">Get A Quote</a>
                                    </Link>
                                </div>
                            </div>
                            <div
                                className={`header-nav navbar-collapse collapse justify-content-end ${
                                    show ? "show" : ""
                                }`}
                                id="navbarNavDropdown"
                            >
                                <div className="logo-header">
                                    <Link href="/">
                                        <a>
                                            <img src="images/logo.png" alt="" />
                                        </a>
                                    </Link>
                                </div>

                                <ul className="nav navbar-nav navbar">
                                    <li
                                        className={`${
                                            open === "home" ? "open" : ""
                                        }`}
                                    >
                                        <a onClick={() => setOpen("home")}>
                                            <span>Home</span>
                                            <i className="fa fa-chevron-down"></i>
                                        </a>
                                        <ul className="sub-menu">
                                            <li> 
												<Link href="/">
                                                    <a>Home 1</a>
                                                </Link>
                                            </li>
                                            {/* <li>
                                                <Link href="/index-2">
                                                    <a>Home 2</a>
                                                </Link>
                                            </li> 
                                            <li>
                                                <Link href="/index-3">
                                                    <a>Home 3</a>
                                                </Link>
                                            </li>*/}
                                        </ul>
                                    </li>
                                    <li
                                        className={`${
                                            open === "about" ? "open" : ""
                                        }`}
                                    >
                                        <a onClick={() => setOpen("about")}>
                                            <span>Pages</span>
                                            <i className="fa fa-chevron-down"></i>
                                        </a>
                                        <ul className="sub-menu">
                                            <li
                                                className={`${
                                                    open === "aboutsub1"
                                                        ? "open"
                                                        : ""
                                                }`}
                                            >
                                                <a
                                                    onClick={() =>
                                                        setOpen("aboutsub1")
                                                    }
                                                >
                                                    About Us{" "}
                                                    <i className="fa fa-angle-right"></i>
                                                </a>
                                                <ul className="sub-menu">
                                                    <Link href="/about-us-1">
                                                        <a>About Us 1</a>
                                                    </Link>
                                                    <Link href="/about-us-2">
                                                        <a>About Us 2</a>
                                                    </Link>
                                                    <Link href="/about-us-3">
                                                        <a>About Us 3</a>
                                                    </Link>
                                                </ul>
                                            </li>
                                            <li
                                                className={`${
                                                    open === "aboutsub2"
                                                        ? "open"
                                                        : ""
                                                }`}
                                            >
                                                <a
                                                    onClick={() =>
                                                        setOpen("aboutsub2")
                                                    }
                                                >
                                                    Faq{" "}
                                                    <i className="fa fa-angle-right"></i>
                                                </a>
                                                <ul className="sub-menu">
                                                    <Link href="/faq-1">
                                                        <a>Faq 1</a>
                                                    </Link>
                                                    <Link href="/faq-2">
                                                        <a>Faq 2</a>
                                                    </Link>
                                                    <Link href="/faq-3">
                                                        <a>Faq 3</a>
                                                    </Link>
                                                </ul>
                                            </li>
                                            <li className={`${open === "pricing" ? "open" : ""}`}><a onClick={() => setOpen("pricing")}>Pricing Table 	<i className="fa fa-angle-right"></i></a>
												<ul className="sub-menu">
													<Link href="/pricing-table-1"><a>Pricing Table 1</a></Link>
													<Link href="/pricing-table-2"><a>Pricing Table 2</a></Link>
													<Link href="/pricing-table-3"><a>Pricing Table 3</a></Link>
												</ul>
											</li>
                                            <li className={`${open === "team" ? "open" : ""}`}><a onClick={() => setOpen("team")}>Team 
												<i className="fa fa-angle-right"></i></a>
												<ul className="sub-menu">
													<Link href="/team-1"><a>Team 1</a></Link>
													<Link href="/team-2"><a>Team 2</a></Link>
													<Link href="/team-3"><a>Team 3</a></Link>
												</ul>
											</li>
                                            <li>
                                                <Link href="/coming-soon">
                                                    <a>Coming Soon</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/error-404">
                                                    <a>Error 404</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/sitedown">
                                                    <a>Site Down</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={`${open === "services" ? "open" : ""}`}><a onClick={() => setOpen("services")}><span>Services</span><i className="fa fa-chevron-down"></i></a>
										<ul className="sub-menu">
											<li className={`${open === "service" ? "open" : ""}`}><a onClick={() => setOpen("service")}>Services <i className="fa fa-angle-right"></i></a>
												<ul className="sub-menu">
													<Link href="/services-1"><a>Services 1</a></Link>
													<Link href="/services-2"><a>Services 2</a></Link>
													<Link href="/services-3"><a>Services 3</a></Link>
												</ul>
											</li>
											<li className={`${open === "servicedetails" ? "open" : ""}`}><a onClick={() => setOpen("servicedetails")}>Services Details <i className="fa fa-angle-right"></i></a>
												<ul className="sub-menu">
													<Link href="/services-details-1"><a>Services Details 1</a></Link>
													<Link href="/services-details-2"><a>Services Details 2</a></Link>
													<Link href="/services-details-3"><a>Services Details 3</a></Link>
												</ul>
											</li>
										</ul>
									</li>
									<li className={`${open === "blog" ? "open" : ""}`}><a onClick={() => setOpen("blog")}><span>Blog</span><i className="fa fa-chevron-down"></i></a>
										<ul className="sub-menu">
											<li><Link href="/blog-grid-2"><a>Blog Grid 2</a></Link></li>
											<li><Link href="/blog-large-left-sidebar"><a>Large Left Sidebar</a></Link></li>
											<li><Link href="/blog-large-right-sidebar"><a>Large Right Sidebar</a></Link></li>
											<li className={`${open === "blogdetail" ? "open" : ""}`}><a onClick={() => setOpen("blogdetail")}>Blog Details <i className="fa fa-angle-right"></i></a>
												<ul className="sub-menu">
													<Link href="/blog-details-1"><a>Blog Details 1</a></Link>
													<Link href="/blog-details-2"><a>Blog Details 2</a></Link>
													<Link href="/blog-details-3"><a>Blog Details 3</a></Link>
												</ul>
											</li>
										</ul>
									</li>
									<li className={`${open === "contact" ? "open" : ""}`}><a onClick={() => setOpen("contact")}><span>Contact Us</span><i className="fa fa-chevron-down"></i></a>
										<ul className="sub-menu">
											<li><Link href="/contact-us-1"><a>Contact Us 1</a></Link></li>
											<li><Link href="/contact-us-2"><a>Contact Us 2</a></Link></li>
											<li><Link href="/contact-us-3"><a>Contact Us 3</a></Link></li>
										</ul>
									</li>
                                </ul>
                                <div className="dlab-social-icon">
                                    <ul>
                                        <Link href="https://en-gb.facebook.com/">
                                            <a className="fa fa-facebook"></a>
                                        </Link>
                                        <Link href="https://twitter.com/login?lang=en">
                                            <a className="fa fa-twitter"></a>
                                        </Link>
                                        <Link href="https://www.linkedin.com/login">
                                            <a className="fa fa-linkedin"></a>
                                        </Link>
                                        <Link href="https://www.instagram.com/">
                                            <a className="fa fa-instagram"></a>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Main Header End --> */}
            </header>
        </>
    );
}

export default Header2;
