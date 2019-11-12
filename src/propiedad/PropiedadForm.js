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

function PropiedadForm({agregarPropiedad}) {
    const [propiedad, setPropiedad] = useState({nombre:'',descripcion:'',precio:0});

  const handleChange = event => {
    event.persist();
    // setValue(event.target.value);
    const clave = event.target.name;
    const valor = event.target.value;
    console.log(clave,valor);
    setPropiedad( propiedad => ({...propiedad, [clave]: valor}));
  };

  const doGuardar = () => {
      console.log('doGuardar');
      if (window.fxAndroid){
          window.fxAndroid.showToast("THola Guardar");
      };
      agregarPropiedad(propiedad);
  }

    return (
      <form>
        <Grid container spacing={3} style={{'flexGrow' : 1}}>
                <Grid item   xs={12} sm={12}>
                <Typography variant="h3" gutterBottom>
                Nueva Propiedad
                </Typography>
                </Grid>
                <Grid item  xs={12} sm={12}>
                    <TextField id="nombre" name="nombre" type="text" label="Titulo" fullWidth={true} value={propiedad.nombre} onChange={handleChange} ></TextField>
                </Grid>
                <Grid item  xs={12} sm={12}>
                    <TextField id="desc" name="descripcion" type="text" label="Descripcion" fullWidth={true} value={propiedad.descripcion} ></TextField>
                </Grid>
                <Grid item xs={12}  sm={6}>
                    <TextField id="time2" name="precio" type="text" label="Precio por noche" fullWidth={true} ></TextField>
                </Grid>
                <Grid item xs={12}  sm={6}>
                    <TextField id="time3" type="text" label="Impuestos" fullWidth={true} ></TextField>
                </Grid>
                <Grid item xs={12}  sm={12}>
                <FormControl component="fieldset">
      <FormLabel component="legend">labelPlacement</FormLabel>
      <RadioGroup aria-label="position" name="position" onChange={handleChange} row>
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
        </form>        
    );
}

export default PropiedadForm;