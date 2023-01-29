import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import './styles.scss';

export function RenderChars() {
  const [ chars, setChars ] = useState([]);

  console.log(chars);

  useEffect(() => {
    async function loadChars() {
      const response = await api.get('/api/character');

      setChars(response.data.results);
    }

    loadChars();
  },[]);

  return (
    <main className='container-chars'>
      {chars.map((chars) => {
        return (
          <main>
            <img src={chars.image} alt="" />
            <p>{chars.name}</p>
            <p>{chars.gender}</p>
            <p>{chars.location.name}</p>
            <p>{chars.origin.name}</p>
            <p>{chars.species}</p>
            <p>{chars.status}</p>
          </main>
        )
      })}
    </main>
  );
}