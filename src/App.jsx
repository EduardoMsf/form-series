import './App.css'
import { FormSeries } from './components/FormSeries'
import { AppTheme } from './theme/AppTheme'
import { Grid, Typography} from '@mui/material';
import {Series}  from './components/Series'

function App() {
  return (
    <AppTheme>
      <Grid xs={12}  xl={12} container sx={{ display: "flex", flexDirection:'column', justifyContent: 'center', alignItems: 'center' }}>
        <Grid item>
          <Typography variant='h1' sx={{fontSize:'3rem'}}>
            Bienvenido a SNGULAR Form Series
          </Typography>
         </Grid>
        <Grid item>
          <Series />
        </Grid>
      </Grid>
      <FormSeries/>
    </AppTheme>
  )
}

export default App
