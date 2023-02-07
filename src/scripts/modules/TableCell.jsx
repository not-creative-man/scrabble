import React from "react";
import '../../styles/TableCell.css';
import letters_array from "../functional/letters-array";

class TableCell extends React.Component {
    constructor(props) {
        super(props);
        this.type = props.type;
        this.value = props.value;
    }

    render() {
        switch (this.type) {
            case 'letter':
                return <div className = "tc letter" id = {`${this.type}_${this.value}`}>{`${letters_array[this.value].letter}`}</div>;
            case 'input':
                return ( 
                <div className = {`tc letter`}>{`${letters_array[this.value].amount}`}
                    {
                    /*input*//* <input type = {'text'}
                    id = {`${this.type}_${this.value}`}
                    value = {`${letters_array[this.value].amount}`}
                    disabled> </input>   */}
                </div>
                );
            case 'score':
                return <div className = "tc score" id = {`${this.type}_${this.value}`}>{`${letters_array[this.value].score}`}</div>
            default:
                return <span>jvhebr</span>
        }
    }
}

export default TableCell;