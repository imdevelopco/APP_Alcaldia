import React from 'react';
import Grid_alcaldia from './Grid';
import Boton from './Boton'
import styles from './styles/styles.css';

class App extends React.Component{
  
  state = {
    tablas : [],
    botones :[].
    ActiveTable
  }
  
  componentDidMount(){
    fetch('http://localhost:3000/tablas')
    .then(res => res.json())
    .then(data => this.setState({tablas : data.rows}, 
     data.rows.forEach((index) =>{
        this.state.botones.push(<Boton name={index}/>);
         })),
      this.setState(this.state.ActiveTable = this.state.tablas[0]))
}

  render(){        
    console.log(this.state.botones);
     
    return( 
        <div className="contenedor"> 
          <h1>Alcaldia SENA</h1>
          <div className="div_botones"> 
            {this.state.botones}
          </div> 
          <div className="div_tabla">
              <Grid_alcaldia name="parvulos"/>
          </div>
        </div>
    )
  }
}

export default App;
