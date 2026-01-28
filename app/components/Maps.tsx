"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const center = {
  lat: 28.6139,
  lng: 77.209,
};

export default function Maps() {
  return (
    <div className="w-[1200px] h-[880px] rounded-xl overflow-hidden">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          center={center}
          zoom={12}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
