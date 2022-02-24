import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
	console.log("Captcha value:", value);
  }

function Quote2() {
	return (
		<>
			<div className="content-inner" style={{"backgroundImage":"url(images/background/bg2.png)","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 m-b30 quote-media">
						<div className="dlab-media style-1 move-1">	
							<img src="images/team/large/pic1.jpg" alt=""/>
						</div>
						<div className="dlab-media style-2 move-2">	
							<img src="images/team/large/pic2.jpg" alt=""/>
						</div>
						<div className="dlab-media style-3 move-3">	
							<img src="images/team/large/pic3.jpg" alt=""/>
						</div>
					</div>
					<div className="col-lg-6 m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
						<form className="dlab-form dzForm" method="POST" action="script/contact.php">
							<div className="dzFormMsg"></div>
							<input type="hidden" className="form-control" name="dzToDo" value="Contact" />
							<div className="row">
								<div className="col-sm-6">
									<div className="input-group">
										<input name="dzName" required type="text" className="form-control" placeholder="First Name" />
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<input name="last_name" required type="text" className="form-control" placeholder="Last Name" />
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<input name="dzEmail" required type="text" className="form-control" placeholder="Email Address" />
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<input name="dzOther[phone]" required type="text" className="form-control" placeholder="Phone No." />
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<input name="dzOther[project_title]" required type="text" className="form-control" placeholder="Project Title" />
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<select name="dzOther[choose_service]" className="form-control" required>
											<option selected>Choose Service</option>
											<option value="1">Web Development</option>
											<option value="2">Web Design</option>
											<option value="3">Strategy & Research</option>
										</select>
									</div>
								</div>
								<div className="col-sm-12">
									<div className="input-group">
										<textarea name="dzMessage" required className="form-control" placeholder="Message"></textarea>
									</div>
								</div>
								<div className="col-sm-12">
									<div className="input-group">
										<input name="dzOther[choose_file]" type="file" required className="form-control custom-file-input"/>
										<label className="custom-file-label">Choose file</label>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<input name="dzOther[estimated_buget]" type="text" required className="form-control" placeholder="Estimated Buget"/>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<select name="dzOther[priority]" className="form-control" required>
											<option selected>Priority</option>
											<option value="1">One</option>
											<option value="2">Two</option>
											<option value="3">Three</option>
										</select>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<input name="dzOther[country]" type="text" required className="form-control" placeholder="Country"/>
									</div>
								</div>
								<div className="col-sm-12">
									<div className="input-group">
										<div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
										<input className="form-control d-none" style={{"display":"none"}} data-recaptcha="true" required data-error="Please complete the Captcha"/>
									</div>
								</div>
								<ReCAPTCHA
										sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
										onChange={onChange}
									/>
								<div className="col-sm-12">
									<button name="submit" type="submit" value="Submit" className="btn btn-primary gradient border-0 rounded-xl">Submit Now</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		</>
	)
}

export default Quote2;