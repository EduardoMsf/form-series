import { Box, Typography } from '@mui/material'

export const Result = ({resultado}) => {
  return (
    <Box component="section" sx={{ p: 2}} xs={6}>
      <Typography variant="p" sx={{fontSize:'1.5rem'}}>
        { isNaN(resultado) || resultado == null ?
          'Resultado'
          : `Resultado: ${resultado}`        
       }
      </Typography>
   </Box>
  )
}
