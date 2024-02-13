import { useState } from 'react';
import { calcularTermino } from '../shared/logicSeries';

export const  useSingularSeries = () => {
     const [nan, setN] = useState(5);
    const [termino, setTermino] = useState(5);


    // calcularTermino(3)


    return { termino };
}