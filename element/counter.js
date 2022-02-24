
import Counterup from '../component/counterup';
function Counter() {
    return (
      <>
        <section className="content-inner bg-primary" style={{"backgroundImage":"url(images/background/bg3.png)","backgroundRepeat":"no-repeat","backgroundSize":"cover"}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="icon-bx-wraper style-4 text-center">
							<div className="icon-bx-sm radius bg-green shadow-green m-b20"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-smile"></i>
								</a> 
							</div>
							<div className="icon-content">
								<span className="title">Satisfied Clients</span>
								<h2 className="counter m-b0 text-primary"><Counterup  count={9875}/></h2>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="icon-bx-wraper style-4 text-center m-tb30">
							<div className="icon-bx-sm radius bg-yellow shadow-yellow m-b20"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-line-graph"></i>
								</a> 
							</div>
							<div className="icon-content">
								<span className="title">Project Completed</span>
								<h2 className="counter m-b0 text-primary"><Counterup  count={8765}/></h2>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="icon-bx-wraper style-4 text-center">
							<div className="icon-bx-sm radius bg-blue shadow-blue m-b20"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-startup"></i>
								</a> 
							</div>
							<div className="icon-content">
								<span className="title">Project Lunched</span>
								<h2 className="counter m-b0 text-primary"><Counterup  count={7894}/></h2>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">
						<div className="icon-bx-wraper style-4 text-center m-tb30">
							<div className="icon-bx-sm radius bg-red shadow-red m-b20"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-confetti"></i>
								</a> 
							</div>
							<div className="icon-content">
								<span className="title">Years Completed</span>
								<h2 className="counter m-b0 text-primary"><Counterup  count={65}/></h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default Counter;