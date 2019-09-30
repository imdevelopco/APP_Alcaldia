import React from 'react';
import Grid_alcaldia from './Grid';
import Boton from './Boton'
import styles from './styles/styles.css';

class App extends React.Component{
  state = {
    tablas : []
  }
  
  componentDidMount(){
    fetch('http://localhost:3000/barrio')
    .then(res => res.json())
    .then(data => this.setState({tablas : data.rows}
      //element[0]: por qué es un arreglo de un dato solamente, y necesitamos sacar el dato
      //            del arreglo.
      
    ))
}

  render(){   
    var tablas = this.state.tablas.map((index) =>{
      return (<Boton name={index}/>);
     })

    return( 
        <div className="contenedor"> 
          <h1>Alcaldia SENA</h1>
          <div className="cuerpo"> 
            {tablas}
          </div> 
          <div className="tabla">
              <Grid_alcaldia />
          </div>
        </div>
    )
  }
}

export default App;
