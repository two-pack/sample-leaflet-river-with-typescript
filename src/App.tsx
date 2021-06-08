import "./App.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "@monsonjeremy/react-leaflet";
import L, { LatLngExpression } from "leaflet";
import "leaflet-river";

function App() {
  const onCreated = (map: L.Map) => {
    const latlangs: LatLngExpression[] = [
      [51.505, -0.09],
      [51.504, -0.08],
    ];
    L.river(latlangs, {
      minWidth: 1, // px
      maxWidth: 10, // px
    }).addTo(map);
  };

  return (
    <div id="mapid">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "500px" }}
        whenCreated={onCreated}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
