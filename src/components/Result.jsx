import { Box, Typography } from '@mui/material'

export const Result = ({ resultado, inputValue }) => {
  console.log('resultadoC', inputValue)
  return (
    <Box component="section" sx={{ p: 2}} xs={6}>
      <Typography variant="p" sx={{fontSize:'1.5rem'}}>
        { resultado == null ?
          'Resultado:'
          : isNaN(resultado) ?
            'Ingresa un número válido'
            : `Resultado: ${resultado}`        
       }
      </Typography>
   </Box>
  )
}
