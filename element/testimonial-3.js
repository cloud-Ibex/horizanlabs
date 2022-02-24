
import TestimonialSlider3 from '../component/testimonialSlider-3';

function Testimonial3() {
  return (
    <>
      <section className="content-inner-1 bg-gray" style={{"backgroundImage":"url(images/background/bg3.png)"}}>
			<div className="container">
				<div className="section-head style-3 text-center">
					<h2 className="title">What Our Clients Say’s</h2>
					<div className="dlab-separator style-2 bg-primary"></div>
				</div>
				<TestimonialSlider3/>
			</div>
		</section>
    </>
  )
}

export default Testimonial3;