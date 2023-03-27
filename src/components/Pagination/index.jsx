import React from "react";

import './styles.scss';

import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";

export function Pagination({ prev, next, onPrevious, onNext }) {
  const handlePrevious = () => {
    onPrevious();
  }

  const handleNext = () => {
    onNext();
  }

  return (
    <nav className="container-pagination">
      <ul>
        {
          prev ? (
            <li>
              <button onClick={handlePrevious}>
                <FiArrowLeftCircle />
              </button>
            </li>
          ) : null
        }

        {
          next ? (
            <li>
              <button onClick={handleNext}>
                <FiArrowRightCircle/>
              </button>
            </li>
          ) : null
        }
      </ul>
    </nav>
  );
}