import React from 'react';

function PhotoCarousel(props) {
  return (
    <div className="photo-carousel">
      <div className="photo-carousel-inner">
        {props.photos.map((photo, index) => (
          <div className="photo-carousel-item" key={index}>
            <img src={photo.url} alt={photo.name} />
          </div>
        ))}
      </div>
    </div>
  );
}


export default PhotoCarousel;
