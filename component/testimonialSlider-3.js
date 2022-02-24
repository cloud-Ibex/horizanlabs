import Slider from "react-slick";

function TestimonialSlider3() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
		speed:3500,
		arrows:false,
    };
    return (
        <>
            <Slider
                {...settings}
                className="testimonials-carousel2 owl-carousel owl-theme owl-none owl-theme owl-dots-primary-full wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s"
            >

					<div className="item">
						<div className="testimonial-2">
							<div className="testimonial-pic quote-right">
								<img src="images/testimonials/pic1.jpg" alt=""/>
							</div>
							<div className="testimonial-text">
								<p>Nullam et velit mollis, dictum eros a, vehicula turpis. Aenean feugiat congue faucibus. Nullam dapibus ex ex, vulputate gravida nisi mattis in. Duis maximus odio sed turpis vehicula auctor sit amet ut urna. Nam non libero ut ex fermentum consectetur et in dolor. Morbi tempor gravida diam nec lacinia. Suspendisse vehicula ultricies arcu.</p>
								<strong className="testimonial-name">Cak Dikin</strong> 
							</div>
						</div>
					</div>
					<div className="item">
						<div className="testimonial-2">
							<div className="testimonial-pic quote-right">
								<img src="images/testimonials/pic3.jpg" alt=""/>
							</div>
							<div className="testimonial-text">
								<p>Nullam et velit mollis, dictum eros a, vehicula turpis. Aenean feugiat congue faucibus. Nullam dapibus ex ex, vulputate gravida nisi mattis in. Duis maximus odio sed turpis vehicula auctor sit amet ut urna. Nam non libero ut ex fermentum consectetur et in dolor. Morbi tempor gravida diam nec lacinia. Suspendisse vehicula ultricies arcu.</p>
								<strong className="testimonial-name">Cak Dikin</strong> 
							</div>
						</div>
					</div>
					<div className="item">
						<div className="testimonial-2">
							<div className="testimonial-pic quote-right">
								<img src="images/testimonials/pic1.jpg" alt=""/>
							</div>
							<div className="testimonial-text">
								<p>Nullam et velit mollis, dictum eros a, vehicula turpis. Aenean feugiat congue faucibus. Nullam dapibus ex ex, vulputate gravida nisi mattis in. Duis maximus odio sed turpis vehicula auctor sit amet ut urna. Nam non libero ut ex fermentum consectetur et in dolor. Morbi tempor gravida diam nec lacinia. Suspendisse vehicula ultricies arcu.</p>
								<strong className="testimonial-name">Cak Dikin</strong> 
							</div>
						</div>
					</div>
                    <div className="item">
						<div className="testimonial-2">
							<div className="testimonial-pic quote-right">
								<img src="images/testimonials/pic3.jpg" alt=""/>
							</div>
							<div className="testimonial-text">
								<p>Nullam et velit mollis, dictum eros a, vehicula turpis. Aenean feugiat congue faucibus. Nullam dapibus ex ex, vulputate gravida nisi mattis in. Duis maximus odio sed turpis vehicula auctor sit amet ut urna. Nam non libero ut ex fermentum consectetur et in dolor. Morbi tempor gravida diam nec lacinia. Suspendisse vehicula ultricies arcu.</p>
								<strong className="testimonial-name">Cak Dikin</strong> 
							</div>
						</div>
					</div>

                </Slider>
        </>
    );
}

export default TestimonialSlider3;
