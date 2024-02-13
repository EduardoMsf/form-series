import { useState } from 'react';

export const  useSingularSeries = () => {
     const [n, setN] = useState(5);
    const [termino, setTermino] = useState(null);

    let resultF = 0

    // Saber si un número es primo
    const isPrimo = (number) => {
        for (let i = 2; i <= number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return number > 1;
    }

    // Calcular el número dependiendo de la posición del termino "número"
    const calculateNPrimo = (number) => {
        let counter = 0;
        let auxPrimo = 2;
        while (counter < number) {
            if (isPrimo(auxPrimo)) {
                counter++;
            }
            auxPrimo++;
        }
        return auxPrimo - 1;
    }

    // Calcular de acuerdo a wikipedia
    const getTriangular = (number) => (number * (number + 1)) / 2;

    // Back to UPIITA 1er semestre xd
    const fibonacci = (number) => {
        if (n <= 1) return n;
        let a = 0,
            b = 1;
        for (let i = 2; i <= n; i++) {
            let temp = b;
            b = a + b;
            a = temp;
        }
        return b;
    }

    // Calcular la SNGULAR Serie
    const calcularTermino = () => {
        
        const term = (calculateNPrimo(n + 3) * getTriangular(n - 1)) / fibonacci(n - 2);
        console.log(term)
        setTermino(term);
    }

    calcularTermino();

    return { termino };
}