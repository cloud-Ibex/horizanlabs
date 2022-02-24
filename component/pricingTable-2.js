import { useState } from "react";

function PricingTable2() {
	const [open, setOpen] = useState("p2")

	return (
		<>	
		{/* <!-- Pricing Table 2 --> */}
			<div className="pricingtable-row">
				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
					<div className={`${open === "p1" ? "pricingtable-wrapper style-1 m-b30 active" : "pricingtable-wrapper style-1 m-b30"}`} onMouseOver={() => setOpen("p1")}>
							<div className="pricingtable-inner">
								<div className="pricingtable-title">
									<h3>Basic Plan</h3>
								</div>
								<div className="icon-bx-sm radius bgl-primary">
									<div className="icon-cell">
										<i className="flaticon-paper-plane"></i>
									</div>
								</div>
								<div className="pricingtable-price">
									<h2 className="pricingtable-bx">$49<small className="pricingtable-type">/Month</small></h2>
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
									<a href="/pricing-table-2" className="btn btn-primary gradient shadow rounded-xl">Start Now</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
					<div className={`${open === "p2" ? "pricingtable-wrapper style-1 m-b30 active" : "pricingtable-wrapper style-1 m-b30"}`} onMouseOver={() => setOpen("p2")}>
							<div className="pricingtable-inner">
								<div className="pricingtable-title">
									<h3>Standart Plan</h3>
								</div>
								<div className="icon-bx-sm radius bgl-primary">
									<div className="icon-cell">
										<i className="flaticon-air-mail"></i>
									</div>
								</div>
								<div className="pricingtable-price">
									<h2 className="pricingtable-bx">$99<small className="pricingtable-type">/Month</small></h2>
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
									<a href="/pricing-table-2" className="btn btn-primary gradient shadow rounded-xl">Start Now</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
					<div className={`${open === "p3" ? "pricingtable-wrapper style-1 m-b30 active" : "pricingtable-wrapper style-1 m-b30"}`} onMouseOver={() => setOpen("p3")}>
							<div className="pricingtable-inner">
								<div className="pricingtable-title">
									<h3>Premium Plan</h3>
								</div>
								<div className="icon-bx-sm radius bgl-primary">
									<div className="icon-cell">
										<i className="flaticon-startup"></i>
									</div>
								</div>
								<div className="pricingtable-price">
									<h2 className="pricingtable-bx">$149<small className="pricingtable-type">/Month</small></h2>
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
									<a href="/pricing-table-2" className="btn btn-primary gradient shadow rounded-xl">Start Now</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default PricingTable2;
