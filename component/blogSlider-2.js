import Link from "next/link";
import Slider from "react-slick";

function BlogSlider2() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <>
            <Slider
                {...settings}
                className="blog-carousel2 owl-carousel owl-none"
            >
					<div className="item">
						<div className="dlab-blog style-2 m-b10">
							<div className="dlab-media rounded-md">
							<Link href="blog-details-2"><a><img src="images/blog/blog-grid-2/pic1.jpg" alt=""/></a></Link>
							</div>
							<div className="dlab-info">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><span>25</span> March</li>
										<li className="post-category">
											<a href="#">Design</a>
											<a href="#">Development</a>
										</li>
									</ul>
								</div>
								<h4 className="dlab-title"><Link href="blog-details-2"><a>Maecenas maximus augue eget libero dictum, vitae tempus erat pretium.</a></Link></h4>
								<p className="m-b20">Nunc convallis sagittis dui eu dictum. Cras sodales id ipsum ac aliquam. Phasellus justo quam, sagittis vel sem congue, vehicula tempus elit. Pellentesque ut scelerisque ante.</p>
								<Link href="blog-details-2"><a className="btn-link style-1">Read More</a></Link>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="dlab-blog style-2 m-b10">
							<div className="dlab-media rounded-md">
							<Link href="blog-details-2"><a><img src="images/blog/blog-grid-2/pic2.jpg" alt=""/></a></Link>
							</div>
							<div className="dlab-info">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><span>25</span> March</li>
										<li className="post-category">
											<a href="#">Design</a>
											<a href="#">Development</a>
										</li>
									</ul>
								</div>
								<h4 className="dlab-title"><Link href="blog-details-2"><a>Maecenas maximus augue eget libero dictum, vitae tempus erat pretium.</a></Link></h4>
								<p className="m-b20">Nunc convallis sagittis dui eu dictum. Cras sodales id ipsum ac aliquam. Phasellus justo quam, sagittis vel sem congue, vehicula tempus elit. Pellentesque ut scelerisque ante.</p>
								<Link href="blog-details-2"><a className="btn-link style-1">Read More</a></Link>
							</div>
						</div>
					</div>
                    <div className="item">
						<div className="dlab-blog style-2 m-b10">
							<div className="dlab-media rounded-md">
								<Link href="blog-details-2"><a><img src="images/blog/blog-grid-2/pic1.jpg" alt=""/></a></Link>
							</div>
							<div className="dlab-info">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><span>25</span> March</li>
										<li className="post-category">
											<a href="#">Design</a>
											<a href="#">Development</a>
										</li>
									</ul>
								</div>
								<h4 className="dlab-title"><Link href="blog-details-2"><a>Maecenas maximus augue eget libero dictum, vitae tempus erat pretium.</a></Link></h4>
								<p className="m-b20">Nunc convallis sagittis dui eu dictum. Cras sodales id ipsum ac aliquam. Phasellus justo quam, sagittis vel sem congue, vehicula tempus elit. Pellentesque ut scelerisque ante.</p>
								<Link href="blog-details-2"><a className="btn-link style-1">Read More</a></Link>
							</div>
						</div>
					</div>
                    <div className="item">
						<div className="dlab-blog style-2 m-b10">
							<div className="dlab-media rounded-md">
							<Link href="blog-details-2"><a><img src="images/blog/blog-grid-2/pic1.jpg" alt=""/></a></Link>
							</div>
							<div className="dlab-info">
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><span>25</span> March</li>
										<li className="post-category">
											<a href="#">Design</a>
											<a href="#">Development</a>
										</li>
									</ul>
								</div>
								<h4 className="dlab-title"><Link href="blog-details-2"><a>Maecenas maximus augue eget libero dictum, vitae tempus erat pretium.</a></Link></h4>
								<p className="m-b20">Nunc convallis sagittis dui eu dictum. Cras sodales id ipsum ac aliquam. Phasellus justo quam, sagittis vel sem congue, vehicula tempus elit. Pellentesque ut scelerisque ante.</p>
								<Link href="blog-details-2"><a className="btn-link style-1">Read More</a></Link>
							</div>
						</div>
					</div>
			

            </Slider>
        </>
    );
}

export default BlogSlider2;
