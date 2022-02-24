import Slider from "react-slick";

function TeamSlider3() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
		arrows: false,
		speed:3500,
		responsive: [
			
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				dots: true,
				
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				
			  }
			},
		]
    };
    return (
        <>
            <Slider
                {...settings}
                className="team-carousel2 owl owl-carousel owl-none owl-theme owl-dots-primary-full"
            >
				<div className="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
					<div className="dlab-team style-2 m-b10">
						<div className="dlab-media">
							<a href="#"><img src="images/team/small/pic1.jpg" alt=""/></a>
						</div>
						<div className="dlab-content">
							<div className="clearfix">
								<h3 className="dlab-name"><a href="#">John Doe</a></h3>
								<span className="dlab-position">Senior Designer</span>
							</div>
						</div>
					</div>
				</div>
				<div className="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
					<div className="dlab-team style-2 m-b10">
						<div className="dlab-media">
							<a href="#"><img src="images/team/small/pic2.jpg" alt=""/></a>
						</div>
						<div className="dlab-content">
							<div className="clearfix">
								<h3 className="dlab-name"><a href="#">Emily Smith</a></h3>
								<span className="dlab-position">Senior Designer</span>
							</div>
						</div>
					</div>
				</div>
				<div className="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
					<div className="dlab-team style-2 m-b10">
						<div className="dlab-media">
							<a href="#"><img src="images/team/small/pic3.jpg" alt=""/></a>
						</div>
						<div className="dlab-content">
							<div className="clearfix">
								<h3 className="dlab-name"><a href="#">Blake Run</a></h3>
								<span className="dlab-position">Senior Designer</span>
							</div>
						</div>
					</div>
				</div>
				<div className="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
					<div className="dlab-team style-2 m-b10">
						<div className="dlab-media">
							<a href="#"><img src="images/team/small/pic4.jpg" alt=""/></a>
						</div>
						<div className="dlab-content">
							<div className="clearfix">
								<h3 className="dlab-name"><a href="#">Jenna Smith</a></h3>
								<span className="dlab-position">Senior Designer</span>
							</div>
						</div>
					</div>
				</div>
				<div className="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
					<div className="dlab-team style-2 m-b10">
						<div className="dlab-media">
							<a href="#"><img src="images/team/small/pic1.jpg" alt=""/></a>
						</div>
						<div className="dlab-content">
							<div className="clearfix">
								<h3 className="dlab-name"><a href="#">John Doe</a></h3>
								<span className="dlab-position">Senior Designer</span>
							</div>
						</div>
					</div>
				</div>
				<div className="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
					<div className="dlab-team style-2 m-b10">
						<div className="dlab-media">
							<a href="#"><img src="images/team/small/pic2.jpg" alt=""/></a>
						</div>
						<div className="dlab-content">
							<div className="clearfix">
								<h3 className="dlab-name"><a href="#">Emily Smith</a></h3>
								<span className="dlab-position">Senior Designer</span>
							</div>
						</div>
					</div>
				</div>
				<div className="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.7s">
					<div className="dlab-team style-2 m-b10">
						<div className="dlab-media">
							<a href="#"><img src="images/team/small/pic3.jpg" alt=""/></a>
						</div>
						<div className="dlab-content">
							<div className="clearfix">
								<h3 className="dlab-name"><a href="#">Blake Run</a></h3>
								<span className="dlab-position">Senior Designer</span>
							</div>
						</div>
					</div>
				</div>
				<div className="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">
					<div className="dlab-team style-2 m-b10">
						<div className="dlab-media">
							<a href="#"><img src="images/team/small/pic4.jpg" alt=""/></a>
						</div>
						<div className="dlab-content">
							<div className="clearfix">
								<h3 className="dlab-name"><a href="#">Jenna Smith</a></h3>
								<span className="dlab-position">Senior Designer</span>
							</div>
						</div>
					</div>
				</div>
				<div className="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.9s">
					<div className="dlab-team style-2 m-b10">
						<div className="dlab-media">
							<a href="#"><img src="images/team/small/pic1.jpg" alt=""/></a>
						</div>
						<div className="dlab-content">
							<div className="clearfix">
								<h3 className="dlab-name"><a href="#">John Doe</a></h3>
								<span className="dlab-position">Senior Designer</span>
							</div>
						</div>
					</div>
				</div>
				<div className="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="1.0s">
					<div className="dlab-team style-2 m-b10">
						<div className="dlab-media">
							<a href="#"><img src="images/team/small/pic2.jpg" alt=""/></a>
						</div>
						<div className="dlab-content">
							<div className="clearfix">
								<h3 className="dlab-name"><a href="#">Emily Smith</a></h3>
								<span className="dlab-position">Senior Designer</span>
							</div>
						</div>
					</div>
				</div>
				<div className="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="1.1s">
					<div className="dlab-team style-2 m-b10">
						<div className="dlab-media">
							<a href="#"><img src="images/team/small/pic3.jpg" alt=""/></a>
						</div>
						<div className="dlab-content">
							<div className="clearfix">
								<h3 className="dlab-name"><a href="#">Blake Run</a></h3>
								<span className="dlab-position">Senior Designer</span>
							</div>
						</div>
					</div>
				</div>
				<div className="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="1.2s">
					<div className="dlab-team style-2 m-b10">
						<div className="dlab-media">
							<a href="#"><img src="images/team/small/pic4.jpg" alt=""/></a>
						</div>
						<div className="dlab-content">
							<div className="clearfix">
								<h3 className="dlab-name"><a href="#">Jenna Smith</a></h3>
								<span className="dlab-position">Senior Designer</span>
							</div>
						</div>
					</div>
				</div>
						
            </Slider>
        </>
    );
}

export default TeamSlider3;
