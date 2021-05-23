import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { popupContent, popupHead, popupText } from './PopupStyles';

export default class MapComponent extends Component {
  constructor() {
    super();
    this.state = {
      lat: 37.7749,
      lng: -122.4194,
      zoom: 13,
    };
  }

  render() {
    return (
      this.props.incidents ?
        <div>
          <MapContainer
            center={[this.state.lat, this.state.lng]}
            zoom={this.state.zoom}
            style={{ width: '100%', height: '900px' }}
          >
            <TileLayer
              attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
              this.props.incidents.map(incident => {
                const point = [incident.point.coordinates[1],
                incident.point.coordinates[0]];

                return (
                  <Marker
                    position={point}
                    key={incident.incident_number}
                  >
                    <Popup className="popup">
                      <div style={popupContent}>
                        <div style={popupHead}>ADDRESS:</div>
                        <span style={popupText}>
                          {incident.address}, {incident.city}
                        </span>
                      </div>
                    </Popup>
                  </Marker>
                )
              })
            }
          </MapContainer>
        </div>
        : 'Data is loading...'
    )
  }
}
