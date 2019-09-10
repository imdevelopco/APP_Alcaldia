import React from 'react';
import Grid_alcaldia from './Grid';
import Boton from './Boton'
import styles from './styles/styles.css';

class App extends React.Component{
  render(){
    return( 
        <div className="contenedor"> 
          <h1>Alcaldia SENA</h1>
          <div className="cuerpo"> 
            <Boton name="Nivel Socioeconomico"/>
            <br></br>
            <Boton name="Barrio" />
          </div> 
          <div className="tabla">
              <Grid_alcaldia />
          </div>
        </div>
    )
  }
}

export default App;
