import React, { useEffect, useState } from 'react';

const RouteFinder = () => {
  const [route, setRoute] = useState(null);
  const apiKey = '3ef728c418db443da7be0034d2494b91';

  useEffect(() => {
    const start = '50.96209827745463,4.414458883409225';
    const end = '50.429137079078345,5.00088081232559';
    fetch(`https://api.geoapify.com/v1/routing?waypoints=${start}|${end}&mode=drive&apiKey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setRoute(data))
      .catch((error) => console.log('Error:', error));
  }, []);

  return (
    <div>
      <h2>Route between two locations</h2>
      {route ? (
        <div>
          <p>Distance: {route.features[0].properties.distance} meters</p>
          <p>Duration: {route.features[0].properties.time} seconds</p>
        </div>
      ) : (
        <p>Loading route...</p>
      )}
    </div>
  );
};

export default RouteFinder;
