import { useSngularSeries } from "../hooks/useSngularSeries"
import { Result } from "./Result"
import { calcularTermino } from '../shared/logicSeries';
import { useState } from "react";


export const FormSeries = () => {
    
    const { termino, handleSubmit } = useSngularSeries();
    const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
    };
    
  return (
    <div>
        <form onSubmit={(event) => {
          handleSubmit(event, parseInt(inputValue, 10));
          setInputValue(''); // Reiniciar el campo de input después del cálculo
        }}>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
          />
        <button type="submit">Calcular</button>
      </form>
         Resultado: {termino}
    </div>
  );
}