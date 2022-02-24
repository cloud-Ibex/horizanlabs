import Link from "next/link"

function Blog3() {
  return (
    <>
     {/* <!-- Blog --> */}
		<section className="content-inner">
			<div className="container">
				<div className="section-head style-3 text-center">
					<h2 className="title">Our Blog & News</h2>
					<div className="dlab-separator style-2 bg-primary"></div>
				</div>
				<div className="row">
					<div className="col-xl-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dlab-blog blog-half m-b30">
							<div className="dlab-media">
								<Link href="blog-details-3"><a><img src="images/blog/default/thum1.jpg" alt=""/></a></Link>
							</div>
							<div className="dlab-info">
								<h5 className="dlab-title">
									<Link href="blog-details-3"><a>Vestibulum massa arcu, consectetu  pellentesque scelerisque.</a></Link>
								</h5>
								<p>Sed quis sagittis velit. Aliquam velit eros, bibendum ut massa et, consequat laoreet erat nam ac imperdiet.</p>
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
										<li className="post-comment"><a href="#"><i className="flaticon-speech-bubble"></i><span>15</span></a></li>
										<li className="post-share"><i className="flaticon-share"></i>
											<ul>
												<li><a className="fa fa-facebook" href="https://en-gb.facebook.com/"></a></li>
												<li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
												<li><a className="fa fa-linkedin" href="https://www.linkedin.com/login"></a></li>
											</ul>
										</li>
									</ul>
								</div>								
							</div>
						</div>
					</div>
					<div className="col-xl-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="dlab-blog blog-half m-b30">
							<div className="dlab-media">
							<Link href="blog-details-3"><a><img src="images/blog/default/thum2.jpg" alt=""/></a></Link>
							</div>
							<div className="dlab-info">
								<h5 className="dlab-title">
									<Link href="blog-details-3"><a>Quisque egestas iaculis felis eget placerat ut pulvinar mi.</a></Link>
								</h5>
								<p>Sed quis sagittis velit. Aliquam velit eros, bibendum ut massa et, consequat laoreet erat nam ac imperdiet.</p>
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
										<li className="post-comment"><a href="#"><i className="flaticon-speech-bubble"></i><span>15</span></a></li>
										<li className="post-share"><i className="flaticon-share"></i>
											<ul>
												<li><a className="fa fa-facebook" href="https://en-gb.facebook.com/"></a></li>
												<li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
												<li><a className="fa fa-linkedin" href="https://www.linkedin.com/login"></a></li>
											</ul>
										</li>
									</ul>
								</div>								
							</div>
						</div>
					</div>
					<div className="col-xl-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="dlab-blog blog-half m-b30">
							<div className="dlab-media">
								<Link href="blog-details-3"><a><img src="images/blog/default/thum3.jpg" alt=""/></a></Link>
							</div>
							<div className="dlab-info">
								<h5 className="dlab-title">
									<Link href="blog-details-3"><a>Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere.</a></Link>
								</h5>
								<p>Sed quis sagittis velit. Aliquam velit eros, bibendum ut massa et, consequat laoreet erat nam ac imperdiet.</p>
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
										<li className="post-comment"><a href="#"><i className="flaticon-speech-bubble"></i><span>15</span></a></li>
										<li className="post-share"><i className="flaticon-share"></i>
											<ul>
												<li><a className="fa fa-facebook" href="https://en-gb.facebook.com/"></a></li>
												<li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
												<li><a className="fa fa-linkedin" href="https://www.linkedin.com/login"></a></li>
											</ul>
										</li>
									</ul>
								</div>								
							</div>
						</div>
					</div>
					<div className="col-xl-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">
						<div className="dlab-blog blog-half m-b30">
							<div className="dlab-media">
								<Link href="blog-details-3"><a><img src="images/blog/default/thum4.jpg" alt=""/></a></Link>
							</div>
							<div className="dlab-info">
								<h5 className="dlab-title">
									<Link href="blog-details-3"><a>Donec feugiat mollis nisi in dignissim. Morbi sollicitudin quis.</a></Link>
								</h5>
								<p>Sed quis sagittis velit. Aliquam velit eros, bibendum ut massa et, consequat laoreet erat nam ac imperdiet.</p>
								<div className="dlab-meta">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
										<li className="post-comment"><a href="#"><i className="flaticon-speech-bubble"></i><span>15</span></a></li>
										<li className="post-share"><i className="flaticon-share"></i>
											<ul>
												<li><a className="fa fa-facebook" href="https://en-gb.facebook.com/"></a></li>
												<li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
												<li><a className="fa fa-linkedin" href="https://www.linkedin.com/login"></a></li>
											</ul>
										</li>
									</ul>
								</div>								
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </>
  )
}

export default Blog3;