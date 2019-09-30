import React,{Component} from 'react';
import styles from './styles/styles.css';
class Boton extends Component{
    constructor(props){
        super(props)    
    }
    render(){
        return(
            <button className="Boton" id={this.props.name} >{this.props.name}</button>
        )
    }
}

export default Boton;