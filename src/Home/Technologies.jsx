import React from 'react';

function Technologies() {
  return (
    <section className="clean-block features">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Technologies</h2>
          <p>I work with various technologies for front-end, back-end, and cloud. I can also provide professional photography services of the business or products for your site.</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5 feature-box"><i className="icon-layers icon"></i>
            <h4>Full-stack JavaScript</h4>
            <p>Receieved a competency badge through Triplebyte.<br/>Tested in the 92nd percentile through Pluralsight.<br/>Tested in the 90th+ percentile through TestCode.<br/>Tested 85th+ percentile through LinkedIn Assessments.</p>
          </div>
          <div className="col-md-5 feature-box"><i className="icon-cloud-download icon"></i>
            <h4>AWS Cloud</h4>
            <p>AWS Certified Cloud Practitioner (see link for verification)<br/><a href="https://www.credly.com/badges/f4660122-c4cb-4a38-88af-fc91735878d3/public_url">https://www.credly.com/badges/f4660122-c4cb-4a38-88af-fc91735878d3/public_url</a><br/>This site is hosted with CI/CD pipeline on AWS</p>
          </div>
          <div className="col-md-5 feature-box"><i className="icon-camera icon"></i>
            <h4>Professional Photography</h4>
            <p>Studio Lighting to get the perfect shot<br/>Variety of Lenses for every occasion<br/>Professional Editing to bring your photos to life<br/>Portraiture to host on your About Me section</p>
          </div>
          <div className="col-md-5 feature-box"><i className="icon-grid icon"></i>
            <h4>(P/M)ERN Stack</h4>
            <p>PostgreSQL, MongoDB and other NoSQL and SQL DBs<br/>Node.js and Express for RESTful APIs<br/>React w/ Bootstrap or Material UI for clean UIs<br/>CI/CD w/ Jest, React Testing Library and Travis/Jenkins</p>
          </div>
        </div>
      </div>
    </section>
      );
}


export default Technologies;
