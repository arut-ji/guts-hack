import React, {useState, useEffect} from 'react';


export function usePosition() {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError('Geolocation is not supported');
      return;
    }

    geo.getCurrentPosition((result) => {
      setCurrentLocation(
        result.coords
      );
    })
  }, [])

  return [currentLocation.latitude, currentLocation.longitude, error];
}
