/* eslint-disable react/prop-types */
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

import "leaflet/dist/leaflet.css";

const customIcon = new Icon({
    iconUrl: "./location.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

const Map = () => {
    const latAndLong = [24, 90]; // Default latitude and longitude
    const zoom = 4; // Default zoom level

    const mapKey = latAndLong ? `${latAndLong[0]}-${latAndLong[1]}` : "default";

    const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

    return (
        <MapContainer
            key={mapKey}
            center={latAndLong}
            zoom={zoom}
            scrollWheelZoom={false}
            className="w-full rounded-lg h-full"
        >
            <TileLayer url={url} attribution={attribution} />
            <Marker position={latAndLong} icon={customIcon}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
