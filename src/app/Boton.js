import React,{Component} from 'react';
import styles from './styles/styles.css';
class Boton extends Component{
    render(){
        return(
            <button className="Boton">{this.props.name}</button>
        )
    }
}

export default Boton;