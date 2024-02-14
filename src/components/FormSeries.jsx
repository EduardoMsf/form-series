import { useState } from "react";

import {TextField, Button, Box} from '@mui/material';

import { Result } from "./Result"
import { useSngularSeries } from "../hooks/useSngularSeries"


const commonStyles = {
  bgcolor: 'background.paper',
  m: 1,
  border: 1,
  pt: 3,
  borderRadius:2
};

export const FormSeries = () => {
    
    const { termino, handleSubmit } = useSngularSeries();
    const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
    };
    
  return (
    <Box xs={6} sx={{  ...commonStyles, borderColor: 'deepPurple.main'}}>
      <form
      onSubmit={(event) => {
        handleSubmit(event, parseInt(inputValue, 10));
        setInputValue(''); 
      }}  style={{display:'flex', flexDirection:'column', alignItems:'center'}}
    >
        < TextField
        required
        // color="deepPurple.main"
        sx={{width:'70%', color:"deepPurple.main" }}
        id="outlined-required"
        label="Ingresa un número"
        value={inputValue}
        onChange={handleChange}
      />
      <Button sx={{width:'70%', m:2, background:"linear-gradient(to left,#C79037, #1A0907)", color:"#fff"}}   color="primary" type="submit" variant="contained">Calcular</Button>
      <Result resultado={termino} />
    </form>
    </Box>
  );
}