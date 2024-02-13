import { useState, useEffect } from 'react';
import { calcularTermino } from '../shared/logicSeries';

export const  useSngularSeries = () => {
//   const [termino, setTermino] = useState('');

//    const handleChange = (event) => {
//     const newTermino = parseInt(event.target.value, 10);
//     if (!isNaN(newTermino)) {
//       setTermino(calcularTermino(newTermino));
//     }
//     };

    
//     console.log('termino', termino)

    //   return  { termino, handleChange };
  const [termino, setTermino] = useState(null);

  const handleSubmit = (event, newTermino) => {
    event.preventDefault();
    setTermino(calcularTermino(newTermino));
    };
    
    console.log('termino', termino)

  return { termino, handleSubmit };
}