import Footer from "../layout/footer";
import Header from "../layout/header-3";
import Link from 'next/link';
import Cta from "../element/cta";

function BlogDetails1() {
  return (
    <>
	<Header/>
      <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Blog Detail</h1>
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
		<section className="content-inner bg-img-fix" style={{"backgroundImage":"url(images/background/bg1.png)","backgroundSize":"contain"}}>
			<div className="container">
				<div className="row">
					<div className="col-xl-8 col-lg-8 m-b50">
						{/* <!-- blog start --> */}
                        <div className="dlab-blog blog-single style-1">
                            <div className="dlab-media rounded-md shadow">
								<img src="images/blog/default/thum1.jpg" alt=""/>
							</div>
                            <div className="dlab-meta m-t10">
								<ul>
									<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
									<li className="post-author"><i className="flaticon-user m-r10"></i>By <Link href="#"><a > Johne Doe</a></Link></li>
								</ul>
							</div>
							<h4 className="dlab-title">Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor. Vestibulum in ante ut tortor eleifend venenatis</h4>
                            <div className="dlab-post-text">
                                <p>Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat. Donec sit amet semper massa.</p>
                                <p>Ut non nisl et magna molestie tincidunt. Aliquam erat volutpat. Vivamus eget feugiat odio. Vivamus faucibus lorem nec mollis placerat. Nulla et dapibus est. Fusce porttitor arcu ac velit commodo hendrerit. Vestibulum tempor dapibus sapien. Maecenas accumsan rhoncus massa, nec ornare libero faucibus tincidunt. Cras metus tortor, pretium vitae scelerisque id, sollicitudin at est.</p>
                                <blockquote className="blockquote style-1">
									<h4 className="blockquote-content">Maecenas aliquet quam sed tellus cursus, eget sodales elit luctus. Proin blandit sed arcu sed ultricies.</h4>
								</blockquote>
                                <p>Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor. Vestibulum in ante ut tortor eleifend venenatis. Morbi ac hendrerit nisl. Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat. </p>
                                <h4 className="m-b30">Donec sit amet semper massa ellentesque habitant morbi</h4>
                                <img className="alignleft rounded-md shadow" width="300" src="images/blog/blog-grid/pic1.jpg" alt=""/>
                                <p>Pellentesque quis molestie lacus. Sed et pellentesque nibh. Pellentesque pretium pretium neque, vel fermentum nisl ornare non. Aliquam interdum rutrum magna quis.</p>
								<p>Donec pretium, quam a aliquet pretium, dolor magna malesuada libero, non rhoncus quam lectus at lectus. Mauris id consequat est, ut aliquet lorem. Maecenas mi sem, aliquam et semper et, sagittis non magna. Vivamus et maximus nulla. Morbi tincidunt ex ac diam imperdiet, ut pretium justo porttitor. Class aptent taciti sociosqu ad litora</p>
								<p>Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis varius. Aliquam nunc enim, egestas ac dui in, aliquam vulputate erat. Curabitur porttitor ante ut odio vestibulum, et iaculis arcu scelerisque. Sed ornare mi vitae elit molestie malesuada. Curabitur venenatis venenatis elementum.</p>
                            </div>
							<div className="dlab-meta border-top">
								<ul>
									<li className="post-tags">
										Tags:
										<Link href="#"><a>#Child </a></Link> ,
										<Link href="#"><a>#Eduction </a></Link> ,
										<Link href="#"><a>#Money </a></Link> ,
										<Link href="#"><a>#Resturent </a></Link>
									</li>
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
						<div className="row extra-blog style-1">
							<div className="col-lg-12">
								<h2 className="blog-title">Related Blogs</h2>
							</div>
							<div className="col-lg-6 col-md-6">
								<div className="dlab-blog style-1 bg-white text-center m-b30">
									<div className="dlab-media">
										<img src="images/blog/default/thum3.jpg" alt=""/>
									</div>
									<div className="dlab-info">
										<h5 className="dlab-title">
											<Link href="/blog-large-right-sidebar"><a>Praesent ut lobortis purus hasellus libero orci, accumsan.</a></Link>
										</h5>
										<p className="m-b0">Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum  pulvinar.</p>
										<div className="dlab-meta meta-bottom">
											<ul>
												<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
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
							</div>
							<div className="col-lg-6 col-md-6">
								<div className="dlab-blog style-1 bg-white text-center m-b30">
									<div className="dlab-media">
										<img src="images/blog/default/thum2.jpg" alt=""/>
									</div>
									<div className="dlab-info">
										<h5 className="dlab-title">
											<Link href="/blog-large-right-sidebar"><a>Donec feugiat mollis nisi in dignissim. Morbi sollicitudin.</a></Link>
										</h5>
										<p className="m-b0">Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum  pulvinar.</p>
										<div className="dlab-meta meta-bottom">
											<ul>
												<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
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
							</div>
						</div>
                        <div className="clear" id="comment-list">
                            <div className="comments-area style-1" id="comments">
                                <h2 className="comments-title">8 Comments</h2>
                                <div className="clearfix">
                                    {/* <!-- comment list END --> */}
                                    <ol className="comment-list">
                                        <li className="comment">
                                            <div className="comment-body">
                                                <div className="comment-author vcard"> 
													<img  className="avatar photo" src="images/testimonials/pic1.jpg" alt=""/> 
													<cite className="fn">Celesto Anderson</cite>
												</div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                <div className="reply"> 
													<Link href="#"><a className="comment-reply-link">
													<i className="fa fa-reply"></i>Reply</a></Link> 
												</div>
                                            </div>
                                            <ol className="children">
                                                <li className="comment odd parent">
                                                    <div className="comment-body">
                                                        <div className="comment-author vcard"> 
															<img  className="avatar photo" src="images/testimonials/pic2.jpg" alt=""/> 
															<cite className="fn">Jake Johnson</cite>
														</div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
														<div className="reply"> 
															<Link href="#"><a className="comment-reply-link">
																<i className="fa fa-reply"></i>Reply</a></Link> 
														</div>
                                                    </div>
                                                    {/* <!-- list END --> */}
                                                </li>
                                            </ol>
                                            {/* <!-- list END --> */}
                                        </li>
                                        <li className="comment">
                                            <div className="comment-body">
                                                <div className="comment-author vcard"> 
													<img  className="avatar photo" src="images/testimonials/pic1.jpg" alt=""/> 
													<cite className="fn">John Doe</cite> 
												</div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
												<div className="reply"> 
													<Link href="#"><a className="comment-reply-link">
													<i className="fa fa-reply"></i>Reply</a></Link> 
												</div>
                                            </div>
                                        </li>
                                    </ol>
                                    {/* <!-- comment list END --> */}
                                    {/* <!-- Form --> */}
                                    <div className="comment-respond style-1" id="respond">
                                        <h2 className="comment-reply-title" id="reply-title">Leave a Reply <small> <Link href="#"><a style={{"display":"none"}}  id="cancel-comment-reply-link" rel="nofollow">Cancel reply</a></Link> </small> </h2>
                                        <form className="comment-form" id="commentform" method="post">
                                            <p className="comment-form-author">
                                                <label for="author">Name <span className="required">*</span></label>
                                                <input type="text" name="Author"  placeholder="Author" id="author"/>
                                            </p>
                                            <p className="comment-form-email">
                                                <label for="email">Email <span className="required">*</span></label>
                                                <input type="text" placeholder="Email" name="email" id="email"/>
                                            </p>
                                            <p className="comment-form-url">
                                                <label for="url">Website</label>
                                                <input type="text" placeholder="Website"  name="url" id="url"/>
                                            </p>
                                            <p className="comment-form-comment">
                                                <label for="comment">Comment</label>
                                                <textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
                                            </p>
                                            <p className="form-submit">
												<button type="submit" className="btn btn-link d-inline-flex align-items-center" id="submit"><i className="fa fa-angle-right m-r10"></i>Submit Now</button>
                                            </p>
                                        </form>
                                    </div>
                                    {/* <!-- Form --> */}
                                </div>
                            </div>
                        </div>
                        {/* <!-- blog END --> */}
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
											<h4 className="title"><Link href="/blog-large-right-sidebar"><a>Fusce mollis felis quis tristique</a></Link></h4>
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
											<h4 className="title"><Link href="/blog-large-right-sidebar"><a>Fusce mollis felis quis tristique</a></Link></h4>
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
											<h4 className="title"><Link href="/blog-large-right-sidebar"><a>Fusce mollis felis quis tristique</a></Link></h4>
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
											<h4 className="title"><Link href="/blog-large-right-sidebar"><a>Fusce mollis felis quis tristique</a></Link></h4>
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
        <Cta />
		
	</div>
	<Footer/>
    </>
  )
}

export default BlogDetails1;