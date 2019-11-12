import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PropiedadForm from './propiedad/PropiedadForm';
import PropiedadLista from './propiedad/PropiedadLista';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const options = [
  'Nueva',
  'Lista',
];

const ITEM_HEIGHT = 48;

function App() {

  const [listaPropiedades, setListaPropiedades] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuElegido, setMenuElegido] = useState('');
  const open = Boolean(anchorEl);

  const handleClickMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleElegirOpcion = (btn) => {
    setMenuElegido(btn);
    setAnchorEl(null);
  };

  const doAddPropiedad = p => {
    setListaPropiedades([...listaPropiedades,p]);
    setMenuElegido('Lista');
  };

  const estiloAppBar = {'flexGrow' : 1};
  return (
    <div>
    <AppBar position="static" style={estiloAppBar}>
      <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography  variant="h5" noWrap style={estiloAppBar}>
            Propiedades UI {menuElegido}
          </Typography>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClickMenu}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleElegirOpcion}
              PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: 200,
              },
              }}
            >
            {options.map(option => (
            <MenuItem key={option} selected={option === 'Nueva'} onClick={() => handleElegirOpcion(option)}>
              {option}
            </MenuItem>
           ))}
        </Menu>
        </Toolbar>
    </AppBar>
    <CssBaseline />
    <Container maxWidth="md">
    { menuElegido === 'Nueva' ? 
        <PropiedadForm agregarPropiedad={doAddPropiedad}></PropiedadForm> : 
        <PropiedadLista lista={listaPropiedades}></PropiedadLista>}
    </Container>

    
  </div>
);
}

export default App;