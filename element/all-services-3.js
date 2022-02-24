import { useState } from "react";
import Link from 'next/link';

function AllServices3() {
	const [open, setOpen] = useState("p2")
	return (
		<>
			{/* <!-- Service --> */}
			<section className="content-inner">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
					<div className={`${open === "p1" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p1")}>
							<div className="icon-bx"> 
								<span className="icon-cell"><i className="flaticon-office"></i></span> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Strategy & Research</h4>
								<p className="m-b20">Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.</p>
								<Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className={`${open === "p2" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p2")}>
							<div className="icon-bx"> 
								<span className="icon-cell"><i className="flaticon-coding"></i></span> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Web Development</h4>
								<p className="m-b20">Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.</p>
								<Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
						<div className={`${open === "p3" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p3")}>
							<div className="icon-bx"> 
								<span className="icon-cell"><i className="flaticon-laptop"></i></span> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Web Solution</h4>
								<p className="m-b20">Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.</p>
								<Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className={`${open === "p4" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p4")}>
							<div className="icon-bx"> 
								<span className="icon-cell"><i className="flaticon-dollar"></i></span> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Company Branding</h4>
								<p className="m-b20">Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.</p>
								<Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
						<div className={`${open === "p5" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p5")}>
							<div className="icon-bx"> 
								<span className="icon-cell"><i className="flaticon-line-chart"></i></span> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">SEO & Marketing</h4>
								<p className="m-b20">Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.</p>
								<Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p6" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx"> 
								<span className="icon-cell"><i className="flaticon-help"></i></span> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">24X7 Support</h4>
								<p className="m-b20">Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.</p>
								<Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
	)
}

export default AllServices3;