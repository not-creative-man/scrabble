import React from "react";
import '../../styles/TableRow.css';
import TableCell from './TableCell';

class TableRow extends React.Component{
    constructor(props){
        super(props);
        this.value = props.value.value;
    }

    render(){
        return(
            <div className="table_row">
                <TableCell type={'letter'} value={this.value}/>
                <TableCell type={'input'} value={this.value} />
                <TableCell type={'score'} value={this.value} />
            </div>
        )
    }
}

export default TableRow;