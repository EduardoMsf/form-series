import { Grid, Typography } from '@mui/material'

export const Result = ({resultado}) => {
  return (
    <Grid>
      <Typography variant="p">
       Resultado: {resultado}
      </Typography>
    </Grid>
  )
}
