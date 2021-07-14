import React from 'react';

function About() {
  return (
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
  );
}


export default About;
