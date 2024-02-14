import { useState, } from 'react';

import { calcularTermino } from '../shared/logicSeries';

export const useSngularSeries = () => {
  
  const [termino, setTermino] = useState(null);

  const handleSubmit = (event, newTermino) => {
    event.preventDefault();
    setTermino(calcularTermino(newTermino));
    };

  return { termino, handleSubmit };
}