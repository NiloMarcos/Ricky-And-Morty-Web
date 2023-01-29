import React from 'react';

import Logo from '../../assets/logo.svg';

import { FaVial } from 'react-icons/fa';

import './styles.scss';

export function Header() {

  function handleSearch() {
    alert("Buscou Personagem")
  }

  return (
    <main className='container-header'>
      <div className='content-logo'>
        <img src={Logo} alt="Logo do rick and morty" />
      </div>

      <div className='container-search'>
        <input type="text" placeholder='Qual personagem está buscando?' />

        <button className='btn-search' onClick={handleSearch}>
          <FaVial size={50}  />
        </button>
      </div>
    </main>
  )
}