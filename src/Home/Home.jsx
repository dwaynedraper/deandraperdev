import React from 'react';

function Home () {
  return (
    <main className="page landing-page">
        <section className="clean-block clean-hero sectionStyle">
            <div className="text">
                <h2 className="mainh2Style">Dean Draper</h2>
                <p className="mainpStyle">Full-Stack JavaScript Software Engineer</p>
            </div>
        </section>
        <section className="clean-block clean-info dark">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">About</h2>
                    <p>I am a full-stack software engineer. I have enjoyed coding since a young age. I learned HTML in the day of GeoCities and AOL, continued learning, and now I'm making a career out of a lifelong passion.</p>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-6"><img className="img-thumbnail" src="https://deandraper.s3.us-east-2.amazonaws.com/justme.jpg" alt=""/></div>
                    <div className="col-md-6">
                        <h3>A Little Bit About Me</h3>
                        <div className="getting-started-info">
                            <p>I am a full-stack software engineer who loves to teach and collaborate with other developers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
        <section className="clean-block slider dark">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">Just Me</h2>
                    <p>A few recent photos of me exploring the world!</p>
                </div>
                <div className="carousel slide" data-bs-ride="carousel" id="carousel-1">
                    <div className="carousel-inner">
                        <div className="carousel-item active"><img className="w-100 d-block" src="https://deandraper.s3.us-east-2.amazonaws.com/208794040_2627740510863221_2545901389830282041_n.jpg" alt="Slide"/></div>
                        <div className="carousel-item"><img className="w-100 d-block" src="https://deandraper.s3.us-east-2.amazonaws.com/208641830_2627738330863439_9157681508146989943_n.jpg" alt="Slide"/></div>
                        <div className="carousel-item"><img className="w-100 d-block" src="https://deandraper.s3.us-east-2.amazonaws.com/Out+for+lunch.jpg" alt="Slide"/></div>
                    </div>
                    <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next"><span className="carousel-control-next-icon"></span><span className="visually-hidden">Next</span></a></div>
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carousel-1" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#carousel-1" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carousel-1" data-bs-slide-to="2"></li>
                    </ol>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Home;