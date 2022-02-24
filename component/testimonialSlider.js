import { useState } from 'react';
import Slider from "react-slick";


function TestimonialSlider() {
    const [asd, setAsd] = useState();
    const settings = {
        dots:true,
        arrows:false,
        centerMode:true,
        slidesToShow:3,
        dots:false,
        infinite:true,
        slidesToScroll:1,
        autoplay:true,
		responsive: [
			
			{
			  breakpoint: 1320,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				centerMode:false,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				centerMode:false,
			  }
			},
		]	
	};
const renderArrows = () => {
    return (
      <div className="owl-nav">
        <div
          className="owl-prev"
          onClick={() => asd.slickPrev()}
        >
          <i className="fa fa-arrow-left"></i>
        </div>
        <div
          className="owl-next"
          onClick={() => asd.slickNext()}
        >
          <i className="fa fa-arrow-right"></i>
        </div>
      </div>
    );
  };
    return (
        <>
        <div className="testimonials-carousel1 owl-carousel owl-theme owl-btn-2 owl-btn-white owl-btn-center">
            <Slider
                ref={c => setAsd(c)}
                {...settings} 
                
            >
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.2s"
					
                >
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                “Aenean massa diam, sollicitudin non dui ut,
                                facilisis viverra libero. Nulla facilisi. Nunc
                                sed purus erat. Praesent placerat dictum libero,
                                eu varius nulla vulputate non”
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <img
                                    src="images/testimonials/pic3.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                    Cak Dikin
                                </strong>
                                <span className="testimonial-position">
                                    CEO & Founder{" "}
                                </span>
                                <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.4s"
                >
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                “Aenean massa diam, sollicitudin non dui ut,
                                facilisis viverra libero. Nulla facilisi. Nunc
                                sed purus erat. Praesent placerat dictum libero,
                                eu varius nulla vulputate non”
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <img
                                    src="images/testimonials/pic3.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                    Lora Price
                                </strong>
                                <span className="testimonial-position">
                                    CEO & Founder{" "}
                                </span>
                                <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                “Aenean massa diam, sollicitudin non dui ut,
                                facilisis viverra libero. Nulla facilisi. Nunc
                                sed purus erat. Praesent placerat dictum libero,
                                eu varius nulla vulputate non”
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <img
                                    src="images/testimonials/pic3.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                    Cak Dikin
                                </strong>
                                <span className="testimonial-position">
                                    CEO & Founder{" "}
                                </span>
                                <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                “Aenean massa diam, sollicitudin non dui ut,
                                facilisis viverra libero. Nulla facilisi. Nunc
                                sed purus erat. Praesent placerat dictum libero,
                                eu varius nulla vulputate non”
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <img
                                    src="images/testimonials/pic3.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                    Cak Dikin
                                </strong>
                                <span className="testimonial-position">
                                    CEO & Founder{" "}
                                </span>
                                <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
            {renderArrows()}
            </div>
        </>
    );
}

export default TestimonialSlider;
