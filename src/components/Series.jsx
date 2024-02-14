import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Typography, Box } from '@mui/material';

export const Series = () => {

  return (
    <Box  component="section" sx={{ mb: 5}}>
      <Typography variant='p'sx={{ mb: 3, fontSize:'1.5rem'}}>
        Dada la siguiente serie:
      </Typography>
      <MathJaxContext >
        <MathJax style={{fontSize:'2rem', margin:"2rem auto"}}>{"\\(\serie(n)\= \\frac{primo(n+3)*triangular(n-1)}{fibonacci(n-2)} \\)"}</MathJax>
      </MathJaxContext>
      <Typography variant='p'sx={{ mb: 2, fontSize:'1.5rem'}}>
        Ingresa un número natural. 
      </Typography>
    </Box>
  );
};
