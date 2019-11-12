import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

function PropiedadForm() {
    const [value, setValue] = useState('1');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const doGuardar = () => {
      console.log('doGuardar');
      if (window.fxAndroid){
          window.fxAndroid.showToast("THola Guardar");
      };
  }

    return (
        <Grid container spacing={3}>
                <Grid item   xs={12} sm={12}>
                <Typography >
                    Nueva Propiedad
                </Typography>
                </Grid>
                <Grid item  xs={12} sm={12}>
                    <TextField id="time" type="text" label="Titulo" fullWidth={true}  ></TextField>
                </Grid>
                <Grid item  xs={12} sm={12}>
                    <TextField id="time1" type="text" label="Descripcion" fullWidth={true}  ></TextField>
                </Grid>
                <Grid item xs={12}  sm={6}>
                    <TextField id="time2" type="currency" label="Precio por noche" fullWidth={true} ></TextField>
                </Grid>
                <Grid item xs={12}  sm={6}>
                    <TextField id="time2" type="currency" label="Impuestos" fullWidth={true} ></TextField>
                </Grid>
                <Grid item xs={12}  sm={12}>
                <FormControl component="fieldset">
      <FormLabel component="legend">labelPlacement</FormLabel>
      <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
        <FormControlLabel
          value="1"
          control={<Radio color="primary" />}
          label="Habitacion Privada"
          labelPlacement="end"
        />
        <FormControlLabel
          value="2"
          control={<Radio color="primary" />}
          label="Compartir Habitacion"
          labelPlacement="end"
        />
        <FormControlLabel
          value="3"
          control={<Radio color="primary" />}
          label="Departamento disponible"
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
                </Grid>
                <Grid item xs={12}  sm={6}>
                <Button variant="contained" color="primary" onClick={doGuardar} >
        Guardar
      </Button>                
      </Grid>
        </Grid>
    );
}

export default PropiedadForm;