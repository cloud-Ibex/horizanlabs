import Counter3 from "./counter3";
function AboutUs3() {
  return (
    <>
      {/* <!-- About Us --> */}
      <section className="content-inner bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-b30">
              <div className="dz-media">
                <img src="images/about/img6.png" className="move-2" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-head style-3 mb-4">
                <h2 className="title">Why Our Agency</h2>
                <div className="dlab-separator style-2 bg-primary"></div>
              </div>
              <p>
                In dictum aliquam turpis lacinia iaculis. Fusce vel malesuada
                magna. Nulla vel maximus risus. Donec volutpat metus lacinia
                risus accumsan, ac bibendum libero efficitur. Pellentesque nec
                nisi sit amet magna tempus hendrerit ut a odio.
              </p>
              <p className="m-b30">
                Praesent rhoncus commodo tortor, id pulvinar nisl blandit at.
                Nulla facilisi. Quisque turpis ante, vehicula condimentum arcu.
              </p>
              <Counter3 />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs3;
