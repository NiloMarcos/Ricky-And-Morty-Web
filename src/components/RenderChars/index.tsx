import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { CharsComponent } from '../CharsComponent';

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
        return <CharsComponent chars={chars} />
      })}
    </main>
  );
}