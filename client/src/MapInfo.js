const  MapInfo = (props) => {
  
    const ip= props.mapData.ip;
    const country = props.mapData.location.country;
    const region = props.mapData.location.region;
    const timeZone= props.mapData.location.timezone;
    const isp= props.mapData.isp;

    return (
        <div className="map-info">
            
            <div className="map-info-item">
                <div className="map-info-title">IP ADDRESS</div>
                <div className="map-info-value">{ip}</div>
            </div>
            <div className="map-info-item">
                <div className="map-info-title">LOCATION</div>
                <div className="map-info-value">{`${region}, ${country}`}</div>
            </div>
            <div className="map-info-item">
                <div className="map-info-title">TIMEZONE</div>
                <div className="map-info-value">{timeZone}</div>
            </div>
            <div className="map-info-item">
                <div className="map-info-title">ISP</div>
                <div className="map-info-value">{isp}</div>
            </div>
        </div>
      );
}
 
export default  MapInfo;