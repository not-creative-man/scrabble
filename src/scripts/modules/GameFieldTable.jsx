import React from "react";
import FieldRow from "./FieldRow";
import '../../styles/GameTable.css';
import config from '../../config.json'

class GameFieldTable extends React.Component {
        constructor(props) {
            super(props);
            this.cellNum = config.tableCells;
            this.data = [];
        }

        addNum() {
            for (let i = 0; i < this.cellNum; i++)
                this.data.push({ num: i });
        }

        render() {
                return ( 
                    <div className = "field_with_cells" > { this.addNum() } 
                    {this.data.map((num) => <FieldRow key = { num.num } value = { num }/>)} 
                    </div>
                        )
                    }
                }

                export default GameFieldTable;