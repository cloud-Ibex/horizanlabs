import Slider from "react-slick";

function TestimonialSlider2() {
  const settings = {
    dots: true,
    dotsClass: "swiper-container testimonial-thumbs d-flex",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return (
        <div className="swiper-wrapper">
          <div className="testimonial-pic">
            <img src={`images/testimonials/pic${i + 1}.jpg`} alt="" />
            <div className="shape-bx"></div>
          </div>
        </div>
      );
    },
  };
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="testimonials-wraper-2">
            {/* <!-- Swiper --> */}
            {/* <div className="swiper-container testimonial-thumbs">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-pic">
                    <img src="images/testimonials/pic1.jpg" alt="" />
                    <div className="shape-bx"></div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-pic">
                    <img src="images/testimonials/pic2.jpg" alt="" />
                    <div className="shape-bx"></div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-pic">
                    <img src="images/testimonials/pic3.jpg" alt="" />
                    <div className="shape-bx"></div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="swiper-container testimonial-content">
              <div className="swiper-wrapper">
                <Slider {...settings}>
                  <div className="swiper-slide">
                    <div className="testimonial-4 quote-right">
                      <div className="testimonial-text">
                        <strong className="testimonial-name">Cak Dikin</strong>
                        <span className="testimonial-position text-primary m-b20">
                          CEO & Founder{" "}
                        </span>
                        <p>
                          Duis feugiat est tincidunt ligula maximus convallis.
                          Aenean ultricies, mi non vestibulum auctor, erat
                          tortor porttitor ipsum, nec dictum tortor sem eget
                          nunc. Etiam sed facilisis erat. Vestibulum sed posuere
                          augue, ut molestie erat. Nam ipsum tellus, tempus vel
                          ante ut, aliquet finibus dui. Proin lacinia, erat ut
                          feugiat fringilla, tortor eros ultricies sem, sed
                          finibus massa ex sit amet ligula.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-4 quote-right">
                      <div className="testimonial-text">
                        <strong className="testimonial-name">Cak Dikin</strong>
                        <span className="testimonial-position text-primary m-b20">
                          CEO & Founder{" "}
                        </span>
                        <p>
                          Duis feugiat est tincidunt ligula maximus convallis.
                          Aenean ultricies, mi non vestibulum auctor, erat
                          tortor porttitor ipsum, nec dictum tortor sem eget
                          nunc. Etiam sed facilisis erat. Vestibulum sed posuere
                          augue, ut molestie erat. Nam ipsum tellus, tempus vel
                          ante ut, aliquet finibus dui. Proin lacinia, erat ut
                          feugiat fringilla, tortor eros ultricies sem, sed
                          finibus massa ex sit amet ligula.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-4 quote-right">
                      <div className="testimonial-text">
                        <strong className="testimonial-name">Cak Dikin</strong>
                        <span className="testimonial-position text-primary m-b20">
                          CEO & Founder{" "}
                        </span>
                        <p>
                          Duis feugiat est tincidunt ligula maximus convallis.
                          Aenean ultricies, mi non vestibulum auctor, erat
                          tortor porttitor ipsum, nec dictum tortor sem eget
                          nunc. Etiam sed facilisis erat. Vestibulum sed posuere
                          augue, ut molestie erat. Nam ipsum tellus, tempus vel
                          ante ut, aliquet finibus dui. Proin lacinia, erat ut
                          feugiat fringilla, tortor eros ultricies sem, sed
                          finibus massa ex sit amet ligula.
                        </p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialSlider2;
