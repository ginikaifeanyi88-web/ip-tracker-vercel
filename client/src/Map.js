
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {Icon} from 'leaflet'
 import 'leaflet/dist/leaflet.css'
 import 'leaflet/dist/images/marker-icon-2x.png'
 import icon from 'leaflet/dist/images/marker-icon.png'
function MyComponent() {

  return null;
}

const Map = (props) => {
    const lattitude = props.mapData.location.lat;
        const longitutde = props.mapData.location.lng;
    return ( 
    <div className="map-container">
        <div className="map">
    <MapContainer center={[lattitude, longitutde]} zoom={13} zoomControl={true}>
          <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      <MyComponent />
       <Marker position={[lattitude, longitutde]} icon={new Icon({iconUrl: icon, iconSize: [25, 41], iconAnchor: [12, 41]})}>
      <Popup>

      </Popup>
    </Marker>
    </MapContainer></div></div>);

}
 
export default Map;