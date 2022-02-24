import Header from "../layout/header-3";
import Footer from './../layout/footer';
import Link from 'next/link';


function BlogLargeRightSidebar() {
  return (
    <>
	<Header/>
      <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Blog Large</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Blog</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Blog Large --> */}
		<section className="content-inner bg-img-fix" style={{"backgroundImage":"url(images/background/bg1.png)"}}>
			<div className="container">
				<div className="row">
					<div className="col-xl-8 col-lg-8 m-b50">
						<div className="dlab-blog style-1 bg-white text-center m-b50">
							<div className="dlab-media dlab-img-effect zoom">
								<img src="images/blog/default/thum1.jpg" alt=""/>
							</div>
							<div className="dlab-info">
								<h4 className="dlab-title">
									<a href="/blog-details-1">Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor. Vestibulum in ante ut tortor eleifend venenatis.</a>
								</h4>
								<p className="m-b0">Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat. Donec sit amet semper massa.</p>
								<div className="dlab-meta meta-bottom">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
										<li className="post-author"><i className="flaticon-user m-r10"></i>By Johne Doe</li>
										<li className="post-comment"><Link href="#"><a><i className="flaticon-speech-bubble"></i><span>15</span></a></Link></li>
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
						<div className="dlab-blog style-1 bg-white text-center m-b50">
							<div className="dlab-media dlab-img-effect zoom">
								<img src="images/blog/default/thum2.jpg" alt=""/>
							</div>
							<div className="dlab-info">
								<h4 className="dlab-title">
									<a href="/blog-details-1">Quisque egestas iaculis felis eget placerat ut pulvinar mi elitauctor nec.</a>
								</h4>
								<p className="m-b0">Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat. Donec sit amet semper massa.</p>
								<div className="dlab-meta meta-bottom">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
										<li className="post-author"><i className="flaticon-user m-r10"></i>By Johne Doe</li>
										<li className="post-comment"><Link href="#"><a><i className="flaticon-speech-bubble"></i><span>15</span></a></Link></li>
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
						<div className="dlab-blog style-1 bg-white text-center m-b50">
							<div className="dlab-media dlab-img-effect zoom">
								<img src="images/blog/default/thum3.jpg" alt=""/>
							</div>
							<div className="dlab-info">
								<h4 className="dlab-title">
									<a href="/blog-details-1">Quisque sem tortor, convallis in arcu eu, accumsan finibus massa donec et sapien risus.</a>
								</h4>
								<p className="m-b0">Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat. Donec sit amet semper massa.</p>
								<div className="dlab-meta meta-bottom">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
										<li className="post-author"><i className="flaticon-user m-r10"></i>By Johne Doe</li>
										<li className="post-comment"><Link href="#"><a><i className="flaticon-speech-bubble"></i><span>15</span></a></Link></li>
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
						<nav aria-label="Blog Pagination">
							<ul className="pagination text-center p-t20">
								<li className="page-item"><Link href="#"><a className="page-link prev" >Prev</a></Link></li>
								<li className="page-item"><Link href="#"><a className="page-link active" >1</a></Link></li>
								<li className="page-item"><Link href="#"><a className="page-link" >2</a></Link></li>
								<li className="page-item"><Link href="#"><a className="page-link" >3</a></Link></li>
								<li className="page-item"><Link href="#"><a className="page-link next">Next</a></Link></li>
							</ul>
						</nav>
					</div>
					<div className="col-xl-4 col-lg-4 m-b30">
                        <aside className="side-bar sticky-top">
                            <div className="widget">
                                <div className="search-bx">
                                    <form role="search" method="post">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-search"></i></span>
											</div>
											<input name="text" className="form-control" placeholder="Search" type="text"/>
                                            <span className="input-group-btn">
												<button type="submit" className="btn btn-primary"><i className="la la-long-arrow-right"></i></button>
                                            </span> 
										</div>
                                    </form>
                                </div>
                            </div>
							<div className="widget widget_archive">
                                <h2 className="widget-title">Category</h2>
                                <ul>
                                    <li><Link href="#"><a>Design<span>05</span></a></Link></li>
                                    <li><Link href="#"><a>Development<span>25</span></a></Link></li>
                                    <li><Link href="#"><a>SEO<span>20</span></a></Link></li>
                                    <li><Link href="#"><a>App Design<span>08</span></a></Link></li>
                                    <li><Link href="#"><a>Branding<span>22</span></a></Link></li>
                                </ul>
                            </div>
                            <div className="widget recent-posts-entry">
                                <h2 className="widget-title">Recent Posts</h2>
                                <div className="widget-post-bx">
                                    <div className="widget-post clearfix">
                                        <div className="dlab-media"> 
											<img src="images/blog/recent-blog/pic1.jpg" alt=""/>
										</div>
                                        <div className="dlab-info">
											<h4 className="title"><a href="/blog-details-1">Fusce mollis felis quis tristique</a></h4>
                                            <div className="dlab-meta">
												<ul>
													<li className="post-date"> 7 March, 2020 </li>
												</ul>
											</div>
                                        </div>
                                    </div>
                                    <div className="widget-post clearfix">
                                        <div className="dlab-media"> 
											<img src="images/blog/recent-blog/pic2.jpg" alt=""/> 
										</div>
                                        <div className="dlab-info">
											<h4 className="title"><a href="/blog-details-1">Fusce mollis felis quis tristique</a></h4>
											<div className="dlab-meta">
												<ul>
													<li className="post-date"> 7 March, 2020 </li>
												</ul>
											</div>
                                        </div>
                                    </div>
                                    <div className="widget-post clearfix">
                                        <div className="dlab-media"> 
											<img src="images/blog/recent-blog/pic3.jpg" alt=""/>
										</div>
                                        <div className="dlab-info">
											<h4 className="title"><a href="/blog-details-1">Fusce mollis felis quis tristique</a></h4>
                                            <div className="dlab-meta">
												<ul>
													<li className="post-date"> 7 March, 2020 </li>
												</ul>
											</div>
                                        </div>
                                    </div>
									<div className="widget-post clearfix">
                                        <div className="dlab-media"> 
											<img src="images/blog/recent-blog/pic3.jpg" alt=""/> 
										</div>
                                        <div className="dlab-info">
											<h4 className="title"><a href="/blog-details-1">Fusce mollis felis quis tristique</a></h4>
                                            <div className="dlab-meta">
												<ul>
													<li className="post-date"> 7 March, 2020 </li>
												</ul>
											</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
							<div className="widget widget_archive">
                                <h2 className="widget-title">Archives</h2>
                                <ul>
                                    <li><Link href="#"><a>January<span>05</span></a></Link></li>
                                    <li><Link href="#"><a>Fabruary<span>25</span></a></Link></li>
                                    <li><Link href="#"><a>March<span>20</span></a></Link></li>
                                    <li><Link href="#"><a>April<span>08</span></a></Link></li>
                                    <li><Link href="#"><a>May<span>22</span></a></Link></li>
                                    <li><Link href="#"><a>Jun<span>11</span></a></Link></li>
                                    <li><Link href="#"><a>July<span>19</span></a></Link></li>
                                </ul>
                            </div>
							<div className="widget widget_tag_cloud">
                                <h2 className="widget-title">Tags</h2>
                                <div className="tagcloud"> 
									<Link href="#"><a>Business</a></Link>
									<Link href="#"><a>News</a></Link>
									<Link href="#"><a>Brand</a></Link>
									<Link href="#"><a>Website</a></Link>
									<Link href="#"><a>Internal</a></Link>
									<Link href="#"><a>Strategy</a></Link>
									<Link href="#"><a>Brand</a></Link>
									<Link href="#"><a>Mission</a></Link>
								</div>
                            </div>
                        </aside>
                    </div>
				</div>
			</div>
		</section>
		
		{/* <!-- Call To Action --> */}
		<section style={{"backgroundImage":"url(images/background/bg5.jpg)","backgroundSize":"cover"}}>
			<div className="container">
				<div className="row action-box style-1 align-items-center">
					<div className="col-xl-7 col-lg-8 col-md-8 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="section-head style-1">
							<h6 className="sub-title bgl-primary m-b20 text-primary">More With Us</h6>
							<h2 className="title">You Want To Showcase Your Website In Top Join With Us</h2>
						</div>
					</div>
					<div className="col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<Link href='/contact-us-1'>
							<a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Join Now</a>					
						</Link>
					</div>
				</div>
			</div>
		</section>
		
	</div>
	<Footer/>
    </>
  )
}

export default BlogLargeRightSidebar;