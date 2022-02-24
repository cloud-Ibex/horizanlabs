import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
	console.log("Captcha value:", value);
  }

function Quote3() {
	return (
		<>
			<div className="content-inner">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-xl-6 m-b30 wow fadeInLeft"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="dlab-media">
                  <img src="images/about/img3.png" className="move-3" alt="" />
                </div>
              </div>
              <div
                className="col-xl-6 m-b30 wow fadeInRight"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <form
                  className="dlab-form dzForm"
                  method="POST"
                  action="script/contact.php"
                >
                  <div className="dzFormMsg"></div>
                  <input
                    type="hidden"
                    className="form-control"
                    name="dzToDo"
                    value="Contact"
                  />
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="input-group">
                        <input
                          name="dzName"
                          required
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <input
                          name="dzOther[last_name"
                          required
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <input
                          name="dzEmail"
                          required
                          type="text"
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <input
                          name="dzOther[phone]"
                          required
                          type="text"
                          className="form-control"
                          placeholder="Phone No."
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <input
                          name="dzOther[project_title]"
                          required
                          type="text"
                          className="form-control"
                          placeholder="Project Title"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <select
                          name="dzOther[choose_service]"
                          className="form-control"
                          required
                        >
                          <option selected>Choose Service</option>
                          <option value="1">Web Development</option>
                          <option value="2">Web Design</option>
                          <option value="3">Strategy & Research</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="input-group">
                        <textarea
                          name="dzMessage"
                          required
                          className="form-control"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="input-group">
                        <input
                          name="dzOther[choose_file]"
                          type="file"
                          required
                          className="form-control custom-file-input"
                        />
                        <label className="custom-file-label">Choose file</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <input
                          name="dzOther[estimated_buget]"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Estimated Buget"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <select
                          name="dzOther[priority]"
                          className="form-control"
                          required
                        >
                          <option selected>Priority</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <input
                          name="dzOther[country]"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Country"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="input-group">
                        <div
                          className="g-recaptcha"
                          data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                          data-callback="verifyRecaptchaCallback"
                          data-expired-callback="expiredRecaptchaCallback"
                        ></div>
                        <input
                          className="form-control d-none"
                          style={{ display: "none" }}
                          data-recaptcha="true"
                          required
                          data-error="Please complete the Captcha"
                        />
                      </div>
                    </div>
					<ReCAPTCHA
										sitekey="Your client site key"
										onChange={onChange}
									/>
                    <div className="col-sm-12">
                      <button
                        name="submit"
                        type="submit"
                        value="Submit"
                        className="btn btn-corner gradient btn-primary"
                      >
                        Submit Now
                      </button>
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

export default Quote3;