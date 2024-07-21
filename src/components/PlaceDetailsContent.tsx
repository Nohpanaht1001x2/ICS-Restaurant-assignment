import React from 'react';
import { Place } from '../types/Type';

const PlaceDetailsContent: React.FC<Place> = (place) => {
  return (
    <div className="place-details-content">
      <img src="image.jpg" alt="Place Name" />
      <h1>{place.name}</h1>
      <div>Rating: {place.rating}</div>
      <p>Opening Hours: {place.operation_time[0].time_open}</p>
      <p>{place.description}</p>
      <div className="reviews">
        {/* Review Items */}
      </div>
    </div>
  );
};

export default PlaceDetailsContent;
