import React from "react";
import '../../styles/FieldCell.css'

class FieldCell extends React.Component{
    constructor(props){
        super(props);
        this.position = props.cell;
        this.color_cell = '';
        // console.log(this.position);
        this.red = [{row: 0, cell: 0},
                    {row: 7, cell: 0},
                    {row: 14, cell: 0},
                    {row: 7, cell: 14},
                    {row: 14, cell: 14},];
        this.dark_blue = [{row: 1, cell: 5},
                          {row: 1, cell: 9},
                          {row: 5, cell: 5},
                          {row: 5, cell: 9},
                          {row: 5, cell: 14},
                          {row: 9, cell: 9},
                          {row: 9, cell: 14},]
        this.blue = [{row: 1, cell: 3},
                     {row: 1, cell: 11},
                     {row: 3, cell: 14},
                     {row: 11, cell: 14},
                     {row: 2, cell: 6},
                     {row: 2, cell: 8},
                     {row: 3, cell: 7},
                     {row: 6, cell: 12},
                     {row: 7, cell: 11},
                     {row: 8, cell: 12},
                     {row: 6, cell: 6},
                     {row: 6, cell: 8},
                     {row: 8, cell: 8},]
        this.pink = [{row: 1, cell: 1},
                     {row: 2, cell: 2},
                     {row: 3, cell: 3},
                     {row: 4, cell: 4},
                     {row: 1, cell: 13},
                     {row: 2, cell: 12},
                     {row: 3, cell: 11},
                     {row: 4, cell: 10},]
        this.handleChange = this.handleChange.bind(this);
        this.last = '';
    }

    handleChange(e){
        let input_data = [
            document.getElementById('pl_let_1'),
            document.getElementById('pl_let_2'),
            document.getElementById('pl_let_3'),
            document.getElementById('pl_let_4'),
            document.getElementById('pl_let_5'),
            document.getElementById('pl_let_6'),
            document.getElementById('pl_let_7'),
        ]
        if(e.target.value == ''){
            for(let i = 0; i < input_data.length; i++){
                if(input_data[i].value == '') {
                    input_data[i].value = this.last;
                    this.last = '';
                }
            }
        }
        else{
            let ch = false;
            for(let i = 0; i < input_data.length; i++){
                if(input_data[i].value == e.target.value) {
                    input_data[i].value = '';
                    this.last = e.target.value;
                    ch = true;
                    return true;
                }
            }
            if(!ch){
                alert('Этой буквы нет среди ваших букв!!');
                e.target.value = '';
            }
        }
        
        
    }

    color(){

        this.color_cell = 'default';

        for (const element of this.red) {
            if(this.position.row == element.row && this.position.cell == element.cell ||
                this.position.row == element.cell && this.position.cell == element.row) {
                 // console.log('enter')
                 this.color_cell = 'red';
             }
        }

        for (const element of this.dark_blue) {
            if(this.position.row == element.row && this.position.cell == element.cell ||
                this.position.row == element.cell && this.position.cell == element.row){this.color_cell =  'dark_blue';}
        }

        for (const element of this.blue) {
            if(this.position.row == element.row && this.position.cell == element.cell ||
                this.position.row == element.cell && this.position.cell == element.row){this.color_cell =  'blue';}
        }

        for (const element of this.pink) {
            if(this.position.row == element.row && this.position.cell == element.cell ||
                this.position.row == element.cell && this.position.cell == element.row ||
                this.position.row == 14 - element.row && this.position.cell == 14 - element.cell ||
                this.position.row == 14 - element.cell && this.position.cell == 14 - element.row ){ this.color_cell = 'pink';}
        }
    }

    render(){
        this.color();
        switch(this.color_cell){
            case 'red':
                
                return(
                    <div className={`field_cell ${this.color_cell}_cell`}>
                        <input id="field_cell" onChange={this.handleChange} maxLength="1" type={'text'} placeholder={`x3сл`} name={`cell_${this.position.row}_${this.position.row}`}></input>
                    </div>
                );
            case 'dark_blue':
                return(
                    <div className={`field_cell ${this.color_cell}_cell`}>
                        <input id="field_cell" onChange={this.handleChange} maxLength="1" type={'text'} placeholder={`x3б`} name={`cell_${this.position.row}_${this.position.row}`}></input>
                    </div>
                );
            case 'blue':
                return(
                    <div className={`field_cell ${this.color_cell}_cell`}>
                        <input id="field_cell" onChange={this.handleChange} maxLength="1" type={'text'} placeholder={`x2б`} name={`cell_${this.position.row}_${this.position.row}`}></input>
                    </div>
                );
            case 'pink':
                return(
                    <div className={`field_cell ${this.color_cell}_cell`}>
                        <input id="field_cell" onChange={this.handleChange} maxLength="1" type={'text'} placeholder={`x2сл`} name={`cell_${this.position.row}_${this.position.row}`}></input>
                    </div>
                );
            case 'default':
                return(
                    <div className={`field_cell default_cell`}>
                        <input id="field_cell" onChange={this.handleChange} maxLength="1" type={'text'} name={`cell_${this.position.row}_${this.position.row}`}></input>
                    </div>
                );
        }
    }
}

export default FieldCell;