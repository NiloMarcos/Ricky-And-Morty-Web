import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Pagination } from '../../components/Pagination';

import { CharsComponent } from '../CharsComponent';

import './styles.scss';

import Logo from '../../assets/logo.svg';

import { FaVial } from 'react-icons/fa';

export function RenderChars() {
  const [ chars, setChars ] = useState([]);
  const [ info, setInfo ] = useState({});
  const [ input, setInput ] = useState('');

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const loadChars = (url) => {
    fetch(url)
      .then(( response ) => response.json())
      .then(( data ) => {
        setChars(data.results);
        setInfo(data.info);
      })
      .catch(( error ) => console.log(error));
  }

  useEffect(() => {
    loadChars(initialUrl)
  },[]);

  const findCharacter = chars.filter((Character) => {
    return Character.name.toLowerCase().includes(input.toLowerCase());
  });

  const onPrevious = () => {
    loadChars(info.prev);
  }

  const onNext = () => {
    loadChars(info.next);
  }

  return (
    <main className='container-chars'>
      <header className='container-header'>
        <div className='content-logo'>
          <img src={Logo} alt="Logo do rick and morty" />
        </div>

        <div className='container-search'>
          <input type="text" placeholder='Qual personagem está buscando?' value={input} onChange={(event) => setInput(event.target.value)} />

          <button className='btn-search' onClick={() => {}}>
            <FaVial size={50}  />
          </button>
        </div>
      </header>


      <section className='content-charactes'>
        {findCharacter.map((chars) => {
          return <CharsComponent chars={chars} />
        })}
      </section>

      <section>
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      </section>
    </main>
  );
}