import React from 'react';
import './Map.css';

export const Map = ({ locationMap }) => {
	return <>{locationMap && <img src={locationMap} alt="map" />}</>;
};
