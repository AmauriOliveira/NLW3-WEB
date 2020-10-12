/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../assets/map-marker.svg';

import './styles.css';

const OrphanagesMap: React.FC = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita 😊 </p>
        </header>

        <footer>
          <strong>Ibaté</strong>
          <span>São Paulo</span>
        </footer>
      </aside>
      <Map
        center={[-21.9515526, -48.0086429]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        {/* streets-v11, light-v10, dark-v10, outdoors-v11, satellite-v9 */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />  free */}
      </Map>
      <Link to="/" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
