import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanagesMap.css';

function OrphanageMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Goiânia</strong>
                    <span>Goiás</span>
                </footer>
            </aside>

            <div></div>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanageMap;