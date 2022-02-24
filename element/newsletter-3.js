

function Newsletter3() {
	return (
      <>
			{/* <!-- Newsletter --> */}
			<section className="content-inner-3 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s" style={{ "backgroundImage": "url(images/background/bg12.png), var(--gradient-sec)", "backgroundSize": "cover, 200%", "backgroundRepeat": "no-repeat" }}>
				<div className="container">
					<div className="row align-items-center subscribe-wraper-1">
						<div className="col-lg-7 col-md-6">
							<h2 className="text-white title m-b30">Subscribe To Our Newsletter For Latest Update Of New Products</h2>
						</div>
						<div className="col-lg-5 col-md-6">
							<div className="dlab-subscribe style-3 max-w500">
								<form className="dzSubscribe" action="script/mailchamp.php" method="post">
									<div className="dzSubscribeMsg"></div>
									<div className="form-group m-b30">
										<div className="input-group mb-0">
											<input name="dzEmail" required="required" type="email" className="form-control" placeholder="Email Address"/>
												<div className="input-group-addon">
													<button name="submit" value="Submit" type="submit" className="btn btn-corner gradient shadow btn-primary">Subscribe Now</button>
												</div>
									</div>
										</div>
							</form>
						</div>
							</div>
						</div>
					</div>
		</section>
      </>
    )
  }
  
  export default Newsletter3;