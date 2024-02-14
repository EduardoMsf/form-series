import { useState } from "react";

import {TextField, Button} from '@mui/material';

import { Result } from "./Result"
import { useSngularSeries } from "../hooks/useSngularSeries"


export const FormSeries = () => {
    
    const { termino, handleSubmit } = useSngularSeries();
    const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
    };
    
  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event, parseInt(inputValue, 10));
        setInputValue(''); 
      }}  style={{display:'flex', flexDirection:'column', alignItems:'center'}}
    >
      < TextField
        color="secondary"
        sx={{width:'70%'}}
        id="outlined-required"
        label="Ingresa un número"
        value={inputValue}
        onChange={handleChange}
      />
      <Button sx={{width:'70%', m:2}}   color="primary" type="submit" variant="contained">Calcular</Button>
      <Result resultado={termino} />
    </form>
  );
}