import React from 'react';

function PhotoCarousel(props) {
  return (
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
  );
}


export default PhotoCarousel;
