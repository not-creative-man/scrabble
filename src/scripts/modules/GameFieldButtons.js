import React from "react";
import GameButton from "./GameButton";
import '../../styles/GameFieldButtons.css'

class GameFieldButtons extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="buttons_wrapper">
                <GameButton type="save"/>
                <GameButton type="change"/>
                <GameButton type="end"/>
            </div>
        )
    }
}

export default GameFieldButtons;