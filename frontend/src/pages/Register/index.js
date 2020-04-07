import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="be the hero" />
          <h1>Cadastro</h1>
          <p>faça seu cadastro e tals</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Ja sou cadastrado
          </Link>
        </section>
        <form>
          <input placeholder="Nome da Ong" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="WhatsApp" />
          <div className="input-group">
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
