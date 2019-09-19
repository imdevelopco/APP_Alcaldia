import React,{Component} from 'react';
import ReactDataGrid from 'react-data-grid';
/*
const columns = [
  { key: "id", name: "ID", editable: true },
  { key: "title", name: "Title", editable: true },
  { key: "complete", name: "Complete", editable: false },
  { key: "comp2lete", name: "Compl2ete", editable: false },
  { key: "compl6ete", name: "Compl1ete", editable: false }
];
*/

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
      fetch('http://localhost:3000/select')
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
    if(this.state.rowsTemp.length > 0){   
         this.state.rowsTemp.forEach(element => {
           var obj = {};
           element.forEach((e,i)=>{
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
