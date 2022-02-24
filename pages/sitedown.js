import Footer from '../layout/footer';
import Header from '../layout/header-2';


function SiteDown() {
  return (
    <>
    <Header />
    <div className="page-content bg-white">
        {/* <!-- inner page banner END --> */}
		<div className="content-block">
            {/* <!-- About Us --> */}
            <div className="section-full bg-white  page-down overlay-black-dark" style={{"backgroundImage":"url(images/background/bg2.jpg)","backgroundSize":"cover","backgroundPosition":"right top"}}>
                <div className="container-fluid">
					<div className="pagedown-title">
						<img src="images/vlc.png" alt=""/>
						<h1>Site Is Down <br/>For Maintenance</h1>
						<p>This is the Technical Problems Page. <br/>Or any other page.</p>
					</div>
				</div>
			</div>
			{/* <!-- About Us End --> */}
        </div>
		{/* <!-- contact area END --> */}
    </div>
    </>
  )
}

export default SiteDown;