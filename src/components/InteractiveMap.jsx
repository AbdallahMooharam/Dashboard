// src/components/InteractiveMap.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const InteractiveMap = () => {
  const position = [51.505, -0.09]; // موقع افتراضي

  return (
    <div className="bg-white shadow-md rounded-lg p-5 h-96">
      <h2 className="text-xl font-semibold mb-4">Interactive Map</h2>
      <MapContainer center={position} zoom={13} className="h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default InteractiveMap;
