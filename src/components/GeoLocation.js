import React, { useEffect, useState } from 'react';

const GeoLocation = () => {
  const [location, setLocation] = useState(null);
  const apiKey = '2ec792dc0b444d72a7bc1e377cf53402';

  useEffect(() => {
    fetch(`https://api.geoapify.com/v1/ipinfo?apiKey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setLocation(data))
      .catch((error) => console.log('Error:', error));
  }, []);

  return (
    <div>
      <h2>Your Location</h2>
      {location ? (
        <div>
          <p>IP: {location.ip}</p>
          <p>City: {location.city.name}</p>
          <p>Country: {location.country.name}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GeoLocation;
