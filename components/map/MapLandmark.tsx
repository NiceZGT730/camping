"use client";
import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L, { icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

type Latlng = [number, number];
type LocationMarkerProps = {
  position: Latlng | null;
  setPosition: (position: Latlng) => void;
};

const iconUrl =
  "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
const markerIcon = L.icon({
  iconUrl: iconUrl,
  iconSize: [20, 30],
});

function LocationMarker({ position, setPosition }: LocationMarkerProps) {
  const map = useMapEvents({
    click(e) {
      const newLocation: Latlng = [e.latlng.lat, e.latlng.lng];
      setPosition(newLocation);
      map.flyTo(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={markerIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const MapLandmark = ({
  location,
}: {
  location?: { lat: number; lng: number };
}) => {
  const defaultPosition: Latlng = [14, 100.5];
  const [position, setPosition] = useState<Latlng | null>(null);

  return (
    <>
      <input type="hidden" name="lat" value={position ? position[0] : ""} />
      <input type="hidden" name="lng" value={position ? position[1] : ""} />
      <MapContainer
        className="h-[50vh] w-full rounded-lg z-0 relative"
        center={location || defaultPosition}
        zoom={7}
        scrollWheelZoom={true}
      >
        <Marker position={location || defaultPosition} icon={markerIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <LocationMarker position={position} setPosition={setPosition} />

        <LayersControl>
          <LayersControl.BaseLayer checked name="OpenStreetMap">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="OpenStreetMap.Voyager">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </>
  );
};
export default MapLandmark;
