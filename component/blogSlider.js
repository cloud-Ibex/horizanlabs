import Link from 'next/link';
import { useState } from 'react';
import Slider from "react-slick";

function BlogSlider() {
    const [asd, setAsd] = useState();
    const settings = {
        dots: false,
        arrows: false,
        centerMode: false,
        slidesToShow: 3,
        draggable: true,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        speed:5000,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				centerMode:false,
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				
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
            <div className="blog-carousel1 owl-btn-1 owl-btn-center-lr  owl-btn-primary" style={{"position":"relative"}}>
                <Slider ref={c => setAsd(c)}
                {...settings} 
                >
                    <div
                        className="item wow fadeInUp"
                        data-wow-duration="2s"
                        data-wow-delay="0.2s"
                    >
                        <div className="dlab-blog style-1 bg-white text-center">
                            <div className="dlab-media">
                                <img src="images/blog/blog-grid-1/pic1.jpg" alt=""/>
                            </div>
                            <div className="dlab-info">
                                <h5 className="dlab-title">
                                <Link href="/blog-details-1"><a>
                                    Praesent ut lobortis purus hasellus libero
                                    orci, accumsan.
                                        </a></Link>
                                </h5>
                                <p className="m-b0">
                                    Pellentesque vel nibh gravida erat interdum
                                    lacinia vel in lectus. Sed fermentum pulvinar.
                            </p>
                                <div className="dlab-meta meta-bottom">
                                    <ul>
                                        <li className="post-date">
                                            <i className="flaticon-clock m-r10"></i>7
                                        March, 2020
                                    </li>
                                        <li className="post-comment">
                                            <a href="#">
                                                <i className="flaticon-speech-bubble"></i>
                                                <span>15</span>
                                            </a>
                                        </li>
                                        <li className="post-share">
                                            <i className="flaticon-share"></i>
                                            <ul>
                                                <li>
                                                    <a
                                                        className="fa fa-facebook"
                                                        href="https://en-gb.facebook.com/"
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="fa fa-twitter"
                                                        href="https://twitter.com/login?lang=en"
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="fa fa-linkedin"
                                                        href="https://www.linkedin.com/login"
                                                    ></a>
                                                </li>
                                            </ul>
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
                        <div className="dlab-blog style-1 bg-white text-center">
                            <div className="dlab-media">
                            <Link href="/blog-details-1"><a>
                                    <img
                                        src="images/blog/blog-grid-1/pic2.jpg"
                                        alt=""
                                    />
                                </a></Link>
                            </div>
                            <div className="dlab-info">
                                <h5 className="dlab-title">
                                    <Link href="/blog-details-1"><a>
                                        Donec feugiat mollis nisi in dignissim.
                                        Morbi lectus.
                                        </a></Link>
                                </h5>
                                <p className="m-b0">
                                    Pellentesque vel nibh gravida erat interdum
                                    lacinia vel in lectus. Sed fermentum pulvinar.
                            </p>
                                <div className="dlab-meta meta-bottom">
                                    <ul>
                                        <li className="post-date">
                                            <i className="flaticon-clock m-r10"></i>7
                                        March, 2020
                                    </li>
                                        <li className="post-comment">
                                            <a href="#">
                                                <i className="flaticon-speech-bubble"></i>
                                                <span>15</span>
                                            </a>
                                        </li>
                                        <li className="post-share">
                                            <i className="flaticon-share"></i>
                                            <ul>
                                                <li>
                                                    <a
                                                        className="fa fa-facebook"
                                                        href="https://en-gb.facebook.com/"
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="fa fa-twitter"
                                                        href="https://twitter.com/login?lang=en"
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="fa fa-linkedin"
                                                        href="https://www.linkedin.com/login"
                                                    ></a>
                                                </li>
                                            </ul>
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
                        <div className="dlab-blog style-1 bg-white text-center">
                            <div className="dlab-media">
                            <Link href="/blog-details-1"><a>
                                    <img
                                        src="images/blog/blog-grid-1/pic3.jpg"
                                        alt=""
                                    />
                                </a></Link>
                            </div>
                            <div className="dlab-info">
                                <h5 className="dlab-title">
                                <Link href="/blog-details-1"><a>
                                        Quisque sem tortor, convallis in arcu eu,
                                        accumsan finibus.
                                        </a></Link>
                                </h5>
                                <p className="m-b0">
                                    Pellentesque vel nibh gravida erat interdum
                                    lacinia vel in lectus. Sed fermentum pulvinar.
                            </p>
                                <div className="dlab-meta meta-bottom">
                                    <ul>
                                        <li className="post-date">
                                            <i className="flaticon-clock m-r10"></i>7
                                        March, 2020
                                    </li>
                                        <li className="post-comment">
                                            <a href="#">
                                                <i className="flaticon-speech-bubble"></i>
                                                <span>15</span>
                                            </a>
                                        </li>
                                        <li className="post-share">
                                            <i className="flaticon-share"></i>
                                            <ul>
                                                <li>
                                                    <a
                                                        className="fa fa-facebook"
                                                        href="https://en-gb.facebook.com/"
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="fa fa-twitter"
                                                        href="https://twitter.com/login?lang=en"
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="fa fa-linkedin"
                                                        href="https://www.linkedin.com/login"
                                                    ></a>
                                                </li>
                                            </ul>
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
                        <div className="dlab-blog style-1 bg-white text-center">
                            <div className="dlab-media">
                            <Link href="/blog-details-1"><a>
                                    <img
                                        src="images/blog/blog-grid-1/pic3.jpg"
                                        alt=""
                                    />
                                </a></Link>
                            </div>
                            <div className="dlab-info">
                                <h5 className="dlab-title">
                                <Link href="/blog-details-1"><a>
                                        Quisque sem tortor, convallis in arcu eu,
                                        accumsan finibus.
                                        </a></Link>
                                </h5>
                                <p className="m-b0">
                                    Pellentesque vel nibh gravida erat interdum
                                    lacinia vel in lectus. Sed fermentum pulvinar.
                            </p>
                                <div className="dlab-meta meta-bottom">
                                    <ul>
                                        <li className="post-date">
                                            <i className="flaticon-clock m-r10"></i>7
                                        March, 2020
                                    </li>
                                        <li className="post-comment">
                                            <a href="#">
                                                <i className="flaticon-speech-bubble"></i>
                                                <span>15</span>
                                            </a>
                                        </li>
                                        <li className="post-share">
                                            <i className="flaticon-share"></i>
                                            <ul>
                                                <li>
                                                    <a
                                                        className="fa fa-facebook"
                                                        href="https://en-gb.facebook.com/"
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="fa fa-twitter"
                                                        href="https://twitter.com/login?lang=en"
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="fa fa-linkedin"
                                                        href="https://www.linkedin.com/login"
                                                    ></a>
                                                </li>
                                            </ul>
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

export default BlogSlider;
