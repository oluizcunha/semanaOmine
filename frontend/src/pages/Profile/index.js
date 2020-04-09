import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');

  // Use Effect é para executar uma ação em determinados casos(mudaça de dados do segundo parametro )
  useEffect(() => {
    api
      .get('profile', {
        headers: {
          Authorization: ongId,
        },
      })
      .then((response) => {
        setIncidents(response.data);
      });
  }, [ongId]);

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="be hero" />
        <span>Bem Vinda, {ongName}</span>
        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos Cadastrados</h1>
      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>Caso:</strong>
            <p>{incident.title}</p>

            <strong>Descricao:</strong>
            <p>{incident.description}</p>

            <strong>Valor:</strong>
            <p>{incident.value}</p>
            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
