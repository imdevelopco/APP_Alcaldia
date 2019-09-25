import React from 'react';
import Grid_alcaldia from './Grid';
import Boton from './Boton'
import styles from './styles/styles.css';

class App extends React.Component{
  
  state = {
    tablas : [],
  }
  
  componentDidMount(){
    fetch('http://localhost:3000/tablas')
    .then(res => res.json())
    .then(data => this.setState({tablas : data.rows}
      //element[0]: por qué es un arreglo de un dato solamente, y necesitamos sacar el dato
      //            del arreglo.
      
    ))
}

  render(){   
    var tablas = this.state.tablas.map((index) =>{
      return (<Boton name={index} onClick ={console.log("hola")}/>);
     })

    return( 
        <div className="contenedor"> 
          <h1>Alcaldia SENA</h1>
          <div className="div_botones"> 
            {tablas}
          </div> 
          <div className="div_tabla">
              <Grid_alcaldia name="persona"/>
          </div>
        </div>
    )
  }
}

export default App;
