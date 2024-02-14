import { Box, Typography } from '@mui/material'

export const Result = ({resultado}) => {
  return (
    <Box component="section" sx={{ p: 2}} >
      <Typography variant="p">
       Resultado: {resultado}
      </Typography>
   </Box>
  )
}
