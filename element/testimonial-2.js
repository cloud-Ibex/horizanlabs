
import TestimonialSlider2 from '../component/testimonialSlider-2';

function Testimonial2() {
  return (
    <>
      {/* <!-- Testimonials --> */}
		<section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg17.png)","backgroundSize":"contain","backgroundPosition":"center","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="section-head style-3 text-center">
					<h6 className="sub-title text-primary bgl-primary m-b15">TESTIMONIAL</h6>
					<h2 className="title">See What Our Clients Say’s</h2>
				</div>
				<div className="row">
					<div className="col-md-12">
						<TestimonialSlider2/>
					</div>
				</div>
			</div>
		</section>
    </>
  )
}

export default Testimonial2;