import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';

function PropiedadLista() {

    return (
        <div>
        <Fab color="primary" aria-label="add" >
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
      </div>
        );
}

export default PropiedadLista;
