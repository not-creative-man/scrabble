import React from "react";
import TableHeader from "./TableHeader";
import TableRow from './TableRow';
import '../../styles/Table.css';

class Table extends React.Component{
    constructor(props){
        super(props);
        this.tableNum = props.num;
        this.data = [];
    }

    createData(){
        for(let i = 0; i < 16; i++)
            this.data.push({value: i + 16*this.tableNum,
                            key: i,})
    }

    render(){
        return(
            <div className="table">
                {this.createData()}
                <TableHeader />
                {this.data.map((value, key) => <TableRow key={key} value={value} />)}
            </div>
        );
    }
}

export default Table;