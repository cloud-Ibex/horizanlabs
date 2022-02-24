
import TeamSlider from '../component/teamSlider';
import TeamSlider3 from '../component/teamSlider-3';

function Team3() {
  return (
    <>
      {/* // <!-- Team --> */}
		<section className="content-inner-1 bg-gray">
			<div className="container">
				<div className="section-head style-3 text-center mb-4">
					<h2 className="title">Our Expertise</h2>
					<div className="dlab-separator style-2 bg-primary"></div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<TeamSlider3/>
					</div>
				</div>
			</div>
		</section>
    </>
  )
}

export default Team3;

