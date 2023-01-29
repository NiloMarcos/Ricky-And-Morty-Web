import React from "react";

import './styles.scss';

export function Pagination() {
  
  return (
    <nav className="container-pagination">
      <ul>
        <li>
          <button >Anterior</button>
        </li>
        
        <li>
          <button >Proxima</button>
        </li>
      </ul>
    </nav>
  );
}