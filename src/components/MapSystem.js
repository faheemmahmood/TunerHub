import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet/dist/leaflet.css';

// Set default icon for Leaflet (since it's not automatically included)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MapSystem = () => {
  const [location, setLocation] = useState(null);
  const [nearbyLocations, setNearbyLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [route, setRoute] = useState(null);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);

  const ipApiKey = '2ec792dc0b444d72a7bc1e377cf53402';
  const placesApiKey = '43d3cf4954314888b64b7dffa8554393';
  const routeApiKey = '3ef728c418db443da7be0034d2494b91';

  useEffect(() => {
    // Step 1: Fetch the user's IP-based location
    fetch(`https://api.geoapify.com/v1/ipinfo?&apiKey=${ipApiKey}`)
      .then(response => response.json())
      .then(data => {
        const { latitude, longitude } = data.location;
        setLocation({ lat: latitude, lon: longitude });

        // Step 2: Fetch nearby places (Petrol stations, Workshops, Vehicle Services)
        findNearbyLocations(latitude, longitude);
      })
      .catch(error => console.error('Error fetching IP location:', error));
  }, []);

  // Function to find nearby locations using Geoapify Places API
  const findNearbyLocations = (lat, lon) => {
    const radius = 5000; // 5 km radius
    const filter = `circle:${lon},${lat},${radius}`;

    fetch(
      `https://api.geoapify.com/v2/places?categories=service.vehicle&filter=${filter}&limit=6&apiKey=${placesApiKey}`
    )
      .then(response => response.json())
      .then(data => {
        if (data.features && data.features.length > 0) {
          setNearbyLocations(data.features);
        }
      })
      .catch(error => console.error('Error fetching places:', error));
  };

  // Step 3: Find route using Geoapify Routing API
  const findRoute = (destination) => {
    if (!location) return;

    const { lat, lon } = location;
    const destLat = destination.geometry.coordinates[1];
    const destLon = destination.geometry.coordinates[0];

    fetch(
      `https://api.geoapify.com/v1/routing?waypoints=${lat},${lon}|${destLat},${destLon}&mode=drive&apiKey=${routeApiKey}`
    )
      .then(response => response.json())
      .then(data => {
        if (data.features && data.features.length > 0) {
          const routeData = data.features[0];
          setRoute(routeData.geometry.coordinates.map(point => [point[1], point[0]]));
          setDistance(routeData.properties.distance);
          setDuration(routeData.properties.time / 60); // Convert seconds to minutes
        }
      })
      .catch(error => console.error('Error fetching route:', error));
  };

  return (
    <div>
      <h1>Map System</h1>
      {location ? (
        <>
          <p>Your location: {location.lat}, {location.lon}</p>

          <MapContainer center={[location.lat, location.lon]} zoom={13} style={{ height: '500px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {/* User's location marker */}
            <Marker position={[location.lat, location.lon]}>
              <Popup>
                You are here! <br /> Coordinates: {location.lat}, {location.lon}
              </Popup>
            </Marker>

            {/* Markers for nearby locations */}
            {nearbyLocations.map((place, index) => (
              <Marker
                key={index}
                position={[place.geometry.coordinates[1], place.geometry.coordinates[0]]}
                eventHandlers={{
                  click: () => {
                    setSelectedLocation(place);
                    findRoute(place);
                  },
                }}
              >
                <Popup>
                  {place.properties.name || 'Unnamed Place'} <br />
                  {place.properties.street ? `${place.properties.street}, ${place.properties.city}` : 'No Address Available'}
                </Popup>
              </Marker>
            ))}

            {/* Polyline for the route */}
            {route && (
              <Polyline positions={route} color="blue" />
            )}
          </MapContainer>

          {/* Displaying nearby locations in text */}
          <h2>Nearby Locations</h2>
          <ul>
            {nearbyLocations.length > 0 ? (
              nearbyLocations.map((place, index) => (
                <li key={index}>
                  {place.properties.name || 'Unnamed Place'} - {place.properties.city || 'Unknown City'}
                </li>
              ))
            ) : (
              <p>No nearby locations found or loading...</p>
            )}
          </ul>

          {/* If a location is selected, show route and travel details */}
          {selectedLocation && (
            <div>
              <h2>Route</h2>
              <p>Selected location: {selectedLocation.properties.name}</p>
              {route ? (
                <>
                  <p>Distance: {distance} meters</p>
                  <p>Estimated travel time: {duration.toFixed(2)} minutes</p>
                </>
              ) : (
                <p>Loading route...</p>
              )}
            </div>
          )}
        </>
      ) : (
        <p>Loading your location...</p>
      )}
    </div>
  );
};

export default MapSystem;
