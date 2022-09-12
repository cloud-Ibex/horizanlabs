import { useState } from "react";

function AllServices() {
	const [open, setOpen] = useState("p2")
	return (
		<>
			{/* <!-- Service --> */}
		<section className="content-inner" style={{"backgroundImage":"url(images/background/bg1.png)"}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
					<div className={`${open === "p1" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p1")}>
							<div className="icon-bx-md radius bg-yellow shadow-yellow"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-office"></i>
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Source code in the Cloud</h4>
								<p>Whatever provider you choose to manage a source code with, we are ready to support and integrate it into the overall cloud architecture. As we have all the required CloudFormation templates, it’s possible to handle all types of Webhooks from Bitbucket , Github or native AWS CodeCommit .</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className={`${open === "p2" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p2")}>
							<div className="icon-bx-md radius bg-red shadow-red"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-website"></i>
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Deploy in the Cloud</h4>
								<p>With AWS CodePipeline we can configure continuous integration and always deliver infrastructure updates. AWS CodePipeline allows you to build, test, and update deployment every time there is a change in a codebase. AWS has no upfront fees or long term contracts so you are flexible and only pay for what you use.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
						<div className={`${open === "p3" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p3")}>
							<div className="icon-bx-md radius bg-green shadow-green"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-pie-charts"></i>
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">CRM in the Cloud</h4>
								<p>Just like Cloud Cards, our Cloud CRM allows you to support sales activity and manage customers or clients in an AWS Cloud. With Cloud CRM solutions, there is no need to share your client’s database with CRM providers because all the data is stored on your AWS account under your full control and watchful eye.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className={`${open === "p4" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p4")}>
							<div className="icon-bx-md radius bg-skyblue shadow-skyblue"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-dollar"></i>
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Build in the Cloud</h4>
								<p>Build and test your apps with continuous scaling whilst only paying for the build time you use. We can help you manage build services that compile source code, runs tests, and produces software packages. With AWS CodeBuild, there’s no need for equipment, managing and scale build servers.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
						<div className={`${open === "p5" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p5")}>
							<div className="icon-bx-md radius bg-orange shadow-orange"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-line-graph"></i>
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Tasks in the Cloud</h4>
								<p>Our Cloud Cards product allows you to deploy a Serverless app on the AWS account you manage. It also has all the same features of Trello and Asana, but has the added advantage of no monthly fees which means that you only pay for what you use. The product was built only using best practices of Serverless architecture, which means it is secure, safe and resilient by default. Also all the data is stored on the premise you control in an AWS DynamoDB tables.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p6" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-help"></i>
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">24X7 Support</h4>
								<p>Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
	)
}

export default AllServices;