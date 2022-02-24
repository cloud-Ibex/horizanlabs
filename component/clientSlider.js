import Slider from "react-slick";

function ClientSlider() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        arrows: false,
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				
			  }
			},	
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				
			  }
			},
		]
    };
    return (
        <>
            <Slider {...settings}>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-purple1.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-light1.png"
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-purple2.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-light2.png"
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-purple3.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-light3.png"
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-purple4.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-light4.png"
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-purple5.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-light5.png"
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-purple6.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-light6.png"
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-purple6.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-light6.png"
							alt=""
						/>
					</div>
				</div>
			</Slider>
        </>
    );
}

export default ClientSlider;
