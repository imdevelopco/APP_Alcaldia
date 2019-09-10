import React,{Component} from 'react';
import ReactDataGrid from 'react-data-grid';

const columns = [
  { key: "id", name: "ID", editable: true },
  { key: "title", name: "Title", editable: true },
  { key: "complete", name: "Complete", editable: false }
];

const rows = new Array();
/* Llenar tabla con Datos*/

for (var i = 0; i < 100;i++) {
    rows.push({ id: i,   title: "Task 1", complete: i+10 });
}

class Grid_alcaldia extends Component {
  state = { rows };
    onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
      this.setState(state => {
        const rows = state.rows.slice();
        for (let i = fromRow; i <= toRow; i++) {
          // Aqui se Actualiza
          rows[i] = { ...rows[i], ...updated };
        }
        return { rows };
      });
    };
  render(){
    return(
      <ReactDataGrid
        columns={columns}
        rowGetter={i => this.state.rows[i]}
        rowsCount={100}
        onGridRowsUpdated={this.onGridRowsUpdated}
        enableCellSelect={true}
      />
  );
  }
}

export default Grid_alcaldia;
