import React from 'react';

import './styles.scss';

export function CharsComponent({ chars }) {
  return (
    <main key={chars.id} className="container-chars-map">
      <article>
        <section className='avatar'>
          <img src={chars.image} alt="" />
        </section>

        <section className='container-info-chars'>
          <p className='name'>{chars.name}</p>
          <p>{chars.status}</p>
          <p className='info'>{chars.gender}</p>
          <p className='info'>{chars.location.name}</p>
          <p className='info'>{chars.origin.name}</p>
          <p className='info'>{chars.species}</p>
        </section>
      </article>
    </main>
  )
}