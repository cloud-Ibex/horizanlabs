import Counterup from '../component/counterup';
function Counter3() {
	return (
		<>
			{/* <!-- Counters 3 --> */}
			<div className="row">
				<div className="col-sm-4 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
					<div className="dlab-content-bx style-2 text-center">
						<div className="icon-content">
							<h2 className="counter m-b0"><Counterup count={9875}/></h2>
							<span className="title">Satisfied Clients</span>
						</div>
					</div>
				</div>
				<div className="col-sm-4 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
					<div className="dlab-content-bx style-2 text-center">
						<div className="icon-content">
							<h2 className="counter m-b0"><Counterup count={7894}/></h2>
							<span className="title">Project Lunched</span>
						</div>
					</div>
				</div>
				<div className="col-sm-4 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
					<div className="dlab-content-bx style-2 text-center">
						<div className="icon-content">
							<h2 className="counter m-b0"><Counterup count={65}/></h2>
							<span className="title">Years Completed</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Counter3;