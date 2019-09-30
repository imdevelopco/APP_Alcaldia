import React,{Component} from 'react';
import ReactDataGrid from 'react-data-grid';

class Grid_alcaldia extends Component {
  constructor(props){
    super(props);
    this.state = { 
      rowsTemp: [],
      columns: [],
      rows: [],
    };
  }

  componentDidMount(){
      fetch('http://localhost:3000/' + this.props.name)
      .then(res => res.json())
      .then(data => this.setState({rowsTemp : data.rows},
        data.meta.forEach((Element) => {           
              Element.key = Element.name;
              this.state.columns.push(
                {
                  "key" : Element.key,
                  "name" : Element.name
                })
            })))
  }

  render(){
    // RowsTemp: array donde se alojan las filas, que retorna la api
    if(this.state.rowsTemp.length > 0){   
         this.state.rowsTemp.forEach(element => {
           var obj = {};
           element.forEach((e,i)=>{
             // Cada dato de la fila debe tener
             obj[this.state.columns[i].key] = element[i]
           })
           this.state.rows.push(obj);
         });

    return(
     <ReactDataGrid
        columns={this.state.columns}        
        rowGetter={i => this.state.rows[i]}
        rowsCount={this.state.rows.length}  
      />
    )
    }else{
      return(<p> Cargando datos... </p>);
    }
  }
}

export default Grid_alcaldia;
