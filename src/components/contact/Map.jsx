import { useState, useEffect } from "react";
import { OfflineMap } from "./OfflineMap";

export function Map() {
  const [isMapAvailable, setIsMapAvailable] = useState(true);

  useEffect(() => {
    if (!navigator.onLine) {
      setIsMapAvailable(false);
    }
  }, []);

  const handleMapError = () => {
    setIsMapAvailable(false);
  };

  return isMapAvailable ? (
    <div className="mapbox">
      <figure>
        <iframe title="map"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=petah%20tikva%20israel&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="100%"
          height="100%"
          loading="lazy"
          onError={handleMapError}
        ></iframe>
      </figure>
    </div>
  ) : (
    <OfflineMap />
  );
}
