import { useState } from "react";
import Footer from '../layout/footer';
import Header from '../layout/header-3';
import Link from 'next/link';
function PricingTable1() {
    const [open, setOpen] = useState("p2")
  return (
    <>
    <Header/>
      <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Pricing Table</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Pricing Table</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Pricing Table --> */}
		<section className="content-inner" style={{"backgroundImage":"url(images/banner/bg1.jpg)"}}>
			<div className="container">
				<div className="pricingtable-row">
					<div className="row">
						<div className="col-lg-4 col-md-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className={`${open === "p1" ? "pricingtable-wrapper style-1 m-b30 active" : "pricingtable-wrapper style-1 m-b30"}`} onMouseOver={() => setOpen("p1")}>
								<div className="pricingtable-inner">
									<div className="pricingtable-title">
										<h3>Basic Plan</h3>
									</div>
									<div className="pricingtable-price"> 
										<h2 className="pricingtable-bx">$49</h2>
									</div>
									<ul className="pricingtable-features">
										<li>Graphic Design </li>
										<li>Web Design</li>
										<li>UI/UX</li>
										<li>HTML/CSS</li>
										<li>SEO Marketing</li>
										<li>Business Analysis</li>
									</ul>
									<div className="pricingtable-footer"> 
										<Link href="/pricing-table-1"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Now</a></Link> 
										
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                        <div className={`${open === "p2" ? "pricingtable-wrapper style-1 m-b30 active" : "pricingtable-wrapper style-1 m-b30"}`} onMouseOver={() => setOpen("p2")}>
								<div className="pricingtable-inner">
									<div className="pricingtable-title">
										<h3>Standart Plan</h3>
									</div>
									<div className="pricingtable-price"> 
										<h2 className="pricingtable-bx">$99</h2>
									</div>
									<ul className="pricingtable-features">
										<li>Graphic Design </li>
										<li>Web Design</li>
										<li>UI/UX</li>
										<li>HTML/CSS</li>
										<li>SEO Marketing</li>
										<li>Business Analysis</li>
									</ul>
									<div className="pricingtable-footer"> 
										<Link href="pricing-table-1"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Now</a></Link> 
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 m-auto wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                        <div className={`${open === "p3" ? "pricingtable-wrapper style-1 m-b30 active" : "pricingtable-wrapper style-1 m-b30"}`} onMouseOver={() => setOpen("p3")}>
								<div className="pricingtable-inner">
									<div className="pricingtable-title">
										<h3>Premium Plan</h3>
									</div>
									<div className="pricingtable-price"> 
										<h2 className="pricingtable-bx">$149</h2>
									</div>
									<ul className="pricingtable-features">
										<li>Graphic Design </li>
										<li>Web Design</li>
										<li>UI/UX</li>
										<li>HTML/CSS</li>
										<li>SEO Marketing</li>
										<li>Business Analysis</li>
									</ul>
									<div className="pricingtable-footer"> 
										<Link href="pricing-table-1"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Start Now</a></Link> 
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
				
		{/* <!-- Call to Action --> */}
		<section style={{"backgroundImage":"url(images/background/bg5.jpg)","backgroundSize":"cover"}}>
			<div className="container">
				<div className="row action-box style-1 align-items-center">
					<div className="col-xl-7 col-lg-8 col-md-8">
						<div className="section-head style-1">
							<h6 className="sub-title bgl-primary m-b20 text-primary">More With Us</h6>
							<h2 className="title">You Want To Showcase Your Website In Top Join With Us</h2>
						</div>
					</div>
					<div className="col-xl-5 col-lg-4 col-md-4 text-right m-b30">
						<Link href='/contact-us-1'>
							<a  className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Join Now</a>
						</Link>	
					</div>
				</div>
			</div>
		</section>
		
	</div>
    <Footer/>
    </>
  )
}

export default PricingTable1;