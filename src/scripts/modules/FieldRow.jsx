import React from "react";
import FieldCell from "./FieldCell";
import config from '../../config.json'

class FieldRow extends React.Component {
        constructor(props) {
            super(props);
            this.value = props.value.num;
            this.data = [];
        }

        addNum() {
            for (let i = 0; i < 15; i++)
                this.data.push({ num: i });
        }
        render() {
                return ( 
                    <div className = "table_row" > 
                        { this.addNum() } 
                        {
                            this.data.map((cell) => <FieldCell key = {`${cell.num}_${this.value}`}
                                cell = {
                                    { row: this.value, cell: cell.num, } }
                        />)}                  
                    </div>
                        )
                    }
                }

                export default FieldRow;