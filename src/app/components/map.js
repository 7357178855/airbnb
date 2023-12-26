import React, { useEffect } from "react";
import { Loader } from '@googlemaps/js-api-loader';

export default function Map() {
  const mapRef = React.useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
        version: 'weekly'
      });

      const { Map } = await loader.importLibrary('maps');
      const position = {
        lat: 43.642693,
        lng: -79.3871189
      };

      // map options
      const mapOptions = {
        center: position,
        zoom: 17,
        mapId: 'MY_NEXTJS_MAPID'
      };

      const map = new Map(mapRef.current, mapOptions);
    };

    initMap();
  }, []);

  return (
    React.createElement('div', { style: { height: '600px' }, ref: mapRef })
  );
}
