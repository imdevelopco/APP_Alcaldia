import React from 'react';
import Grid_alcaldia from './Grid';
import Boton from './Boton'
import styles from './styles/styles.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tablas : [],
      botones :[],
      activeTable: "ruta",
      grilla : []
    }
    this.handleClick = this.handleClick.bind(this);
    this.deshabilitar = this.deshabilitar.bind(this);
  }
  
  componentDidMount(){
    fetch('http://localhost:3000/tablas')
    .then(res => res.json())
    .then(data => this.setState({tablas : data.rows,activeTable :data.rows[0]},
     data.rows.forEach((index) =>{
        this.state.botones.push(<Boton name={index} funcion={e => (this.handleClick(index),e.preventDefault())}/>);
         }))
    )}

  handleClick(param){
    console.log("entre handle");     
    this.setState(this.state.grilla =  <Grid_alcaldia name={param}/>);
  }  
  
  deshabilitar(){
    console.log("entre deshabilitar");   
    this.setState(this.state.grilla = []);
  }

  render(){  
    return( 
        <div className="contenedor"> 
          <h1>Alcaldia SENA</h1>
          <div className="div_botones"> 
            {this.state.botones}
          </div> 
          <div className="div_tabla">
            {this.state.grilla}
            <Boton name="Borrar" id="Borrar"funcion = {e => (this.deshabilitar(),e.preventDefault())}/>
          </div>
        </div>
    )
  }
}

export default App;
