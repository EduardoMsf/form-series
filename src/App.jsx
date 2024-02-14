import './App.css'
import { FormSeries } from './components/FormSeries'
import { AppTheme } from './theme/AppTheme'
import { Grid, Typography, Box} from '@mui/material';
import {Series}  from './components/Series'

function App() {
  return (
    <AppTheme>
      <Grid className='media' container sx={{ display: "flex", flexDirection:'column', justifyContent: 'center', alignItems: 'center' }}>
        <Grid item xs={12}>
          <Typography variant='h1' sx={{fontSize:'3rem'}}>
            Bienvenido a SNGULAR Form Series
          </Typography>
         </Grid>
        <Grid item xs={12}>
          <Series />
        </Grid>
      </Grid>
      <FormSeries />
      <Box>
        Powered by Eduardo Samaniego
      </Box>
    </AppTheme>
  )
}

export default App
