import { useState } from "react";
import Link from 'next/link';

function Service3() {
    const [open, setOpen] = useState("p2")
    return (
      <>
        {/* <!-- Service --> */}
		<section className="content-inner">
			<div className="container">
				<div className="section-head style-3 text-center mb-4">
					<h2 className="title">Our Speciallization</h2>
					<div className="dlab-separator style-2 bg-primary"></div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
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
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
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
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
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
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default Service3;