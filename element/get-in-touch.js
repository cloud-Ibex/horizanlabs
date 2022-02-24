function GetInTouch3() {
    return (
      <>
        {/* <!-- Contact Form --> */}
<section className="content-inner">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                <div className="dlab-media">
                    <img src="images/about/img8.png" className="move-1" alt=""/>
                </div>
            </div>
            <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                <form className="dlab-form style-1 dzForm" method="POST" action="script/contact.php">
                    <div className="section-head style-3">
                        <h2 className="title m-t10">Get In Touch With Us</h2>
                        <div className="dlab-separator style-2 bg-primary"></div>
                    </div>
                    <div className="dzFormMsg"></div>
                    <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                    <input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="input-group">
                                <input name="dzName" type="text" required className="form-control" placeholder="Full Name"/>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="input-group">
                                <input name="dzEmail" type="text" required className="form-control" placeholder="Email Address"/>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="input-group">
                                <input name="dzOther[phone]" type="text" required className="form-control" placeholder="Phone No."/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="input-group">
                                <input name="dzOther[project_title]" type="text" required className="form-control" placeholder="Project Title"/>
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
                                <textarea className="form-control" required placeholder="Message"></textarea>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <button type="submit" className="btn btn-corner gradient btn-block btn-primary">Submit Now</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
      </>
    )
  }
  
  export default GetInTouch3;
