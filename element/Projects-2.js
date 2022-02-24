import Portfolio2 from "../component/portfolio-2";

function Projects2() {
    return (
      <>
        {/* <!-- Projects --> */}
		<section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg17.png)","backgroundSize":"cover","backgroundPosition":"top center","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="section-head style-3 text-center">
					<h6 className="sub-title text-primary bgl-primary m-b15">PORTFOLIO</h6> 
					<h2 className="title">Take A Look At Our Latest Work</h2>
				</div>
				<Portfolio2/>
			</div>
		</section>
      </>
    )
  }
  
  export default Projects2;