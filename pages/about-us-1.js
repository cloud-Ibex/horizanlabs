import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Header from "../layout/header-3";
import Footer from "./../layout/footer";
import Counter from "./../element/counter";
import TeamSlider from '../component/teamSlider';
import Testimonial from '../element/testimonial';
import Blog from '../element/blog';
import Link from 'next/link';
import Quote from '../element/quote';

function AboutUs1() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Header />
            <div className="page-content bg-white">
            {/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>About us 1</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">About us</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- About Us --> */}
		<section className="content-inner">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media">
							<img src="images/about/img4.png" className="move-3" alt=""/>
						</div>
					</div>
					<div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="section-head style-1 mb-4">
							<h6 className="sub-title bgl-primary m-b20 text-primary">About Us</h6>
							<h2 className="title">How We Can Help You Achieve Your Business Goal</h2>
						</div>
						<p>Integer pretium molestie nisl, non blandit lectus suscipit in. Vivamus tellus diam, iaculis eget nulla sit amet, tincidunt consectetur sem. Suspendisse laoreet, quam sed faucibus feugiat, tortor velit suscipit orci, sed consectetur ante eros id urna. Mauris luctus nulla ut pharetra tempor.</p>
						<p className="m-b30">Mauris egestas eleifend sapien eu malesuada. Phasellus at metus eget sapien tristique accumsan non sit amet augue.</p>
						<div className="row">
							<div className="col-lg-6">
								<ul className="list-arrow primary">
									<li>Nulla dict posuere veliitae.</li>
									<li>Etiam orci magna, accumsan.</li>
									<li>Donec fringilla velit risusquis.</li>
									<li>Aliquam pulvinar tempor.</li>
								</ul>
							</div>
							<div className="col-lg-6">
								<ul className="list-arrow primary">
									<li>Nulla dict posuere veliitae.</li>
									<li>Etiam orci magna, accumsan.</li>
									<li>Donec fringilla velit risusquis.</li>
									<li>Aliquam diam tempor.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		{/* <!-- Counter --> */}
		<Counter/>

		{/* <!-- About Us --> */}
		<section className="content-inner-2">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="section-head style-1">
							<h6 className="sub-title bgl-primary m-b20 text-primary">Watch Us</h6>
							<h2 className="title m-b15">Watch How Our Team Help You To Achive Goal</h2>
							<p>Suspendisse euismod eget lacus quis mattis. Nunc ut auctor justo, et pulvinar lorem nteger tempor nisi venenatis</p>
						</div>
						<div className="row">
							<div className="col-lg-12 col-md-6">
								<div className="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
									<div className="icon-bx-sm bg-white"> 
										<Link href="#">
											<a  className="icon-cell text-primary">
												<i className="flaticon-chat"></i>
											</a> 
										</Link>	
									</div>
									<div className="icon-content">
										<h4 className="dlab-title m-b5">Online Support</h4>
										<p>Quisque efficitur consequat turpis, eget consequat risus vulputate eunc ligula.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-12 col-md-6">
								<div className="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
									<div className="icon-bx-sm bg-white"> 
										<Link href="#">	
											<a className="icon-cell text-primary">
												<i className="flaticon-bullhorn"></i>
											</a> 
										</Link>	
									</div>
									<div className="icon-content">
										<h4 className="dlab-title m-b5">Worldwide Marketing</h4>
										<p>Quisque efficitur consequat turpis, eget consequat risus vulputate eunc ligula.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="video-bx style-3">
							<img src="images/video/pic3.jpg" alt=""/>
							<div className="video-btn">
								<a href="#" className="popup-youtube" onClick={()=> setOpen(true)}><i className="flaticon-play"></i></a>
								
							</div>
						</div>
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="UpolBSznWp0" onClose={() => setOpen(false)} />
					</div>
				</div>
			</div>
		</section>
		
		
		{/* <!-- Team --> */}
		<section className="content-inner">
			<div className="container">
				<div className="section-head style-1 text-center">
					<h6 className="sub-title bgl-primary m-b20 text-primary">Team</h6>
					<h2 className="title">Our Best Expertise</h2>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<TeamSlider/>
					</div>
				</div>
			</div>
		</section>	
		
		{/* <!-- Testimonials --> */}
		<Testimonial/>
		
		{/* <!-- Blog --> */}
		<Blog/>
		
		{/* <!-- Get A Quote --> */}
		<Quote/>		
		
		{/* <!-- Call To Action --> */}
		<section style={{"backgroundImage":"url(images/background/bg5.jpg)","backgroundSize":"cover"}}>
			<div className="container">
				<div className="row action-box style-1 align-items-center">
					<div className="col-xl-7 col-lg-8 col-md-8 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="section-head style-1">
							<h6 className="sub-title bgl-primary m-b20 text-primary">More With Us</h6>
							<h2 className="title">You Want To Showcase Your Website In Top Join With Us</h2>
						</div>
					</div>
					<div className="col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<Link href='/contact-us-1'><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Join Now</a></Link>
					</div>
				</div>
			</div>
		</section>
            </div>
            <Footer />
        </>
    );
}

export default AboutUs1;
