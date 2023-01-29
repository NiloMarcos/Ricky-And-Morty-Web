import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Pagination } from '../../components/Pagination';

import { CharsComponent } from '../CharsComponent';

import './styles.scss';

export function RenderChars() {
  const [ chars, setChars ] = useState([]);

  const [ info, setInfo ] = useState({});

  console.log(info);

  useEffect(() => {
    async function loadChars() {
      const response = await api.get('/api/character');

      setChars(response.data.results);
      setInfo(response.data.info);
    }

    loadChars();
  },[]);

  return (
    <main className='container-chars'>
      <section className='content-charactes'>
        {chars.map((chars) => {
          return <CharsComponent chars={chars} />
        })}
      </section>

      <section>
        <Pagination />
      </section>
    </main>
  );
}