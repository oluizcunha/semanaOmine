import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="be hero" />
        <span>Bem Vindo</span>
        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos Cadastrados</h1>
      <ul>
        <li>
          <strong>Caso:</strong>
          <p>Casoteste</p>

          <strong>Descricao:</strong>
          <p>DescricaoTeste</p>

          <strong>Valor:</strong>
          <p>R$Algum</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>Caso:</strong>
          <p>Casoteste</p>

          <strong>Descricao:</strong>
          <p>DescricaoTeste</p>

          <strong>Valor:</strong>
          <p>R$Algum</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>Caso:</strong>
          <p>Casoteste</p>

          <strong>Descricao:</strong>
          <p>DescricaoTeste</p>

          <strong>Valor:2</strong>
          <p>R$Algum</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
}
