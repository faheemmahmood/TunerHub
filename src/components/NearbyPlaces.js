import React, { useEffect, useState } from 'react';

const NearbyPlaces = () => {
  const [places, setPlaces] = useState([]);
  const apiKey = '43d3cf4954314888b64b7dffa8554393';
  const category = 'commercial.supermarket'; // Change category to petrol stations or workshops
  const boundingBox = '10.716463143326969,48.755151258420966,10.835314015356737,48.680903341613316';

  useEffect(() => {
    fetch(`https://api.geoapify.com/v2/places?categories=${category}&filter=rect:${boundingBox}&limit=20&apiKey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setPlaces(data.features))
      .catch((error) => console.log('Error:', error));
  }, []);

  return (
    <div>
      <h2>Nearby Places</h2>
      {places.length > 0 ? (
        <ul>
          {places.map((place) => (
            <li key={place.properties.place_id}>
              {place.properties.name} - {place.properties.street}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading nearby places...</p>
      )}
    </div>
  );
};

export default NearbyPlaces;
