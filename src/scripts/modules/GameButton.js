import React from "react";
import '../../styles/GameButton.css'
import changeLetters from "../functional/changeLetters";
import checkLetters from "../functional/checkLetters";

class GameButton extends React.Component{
    constructor(props){
        super(props);
        this.type = props.type;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        if(this.type == 'change')
            changeLetters();
        if(this.type == 'save')
            checkLetters();
    }

    render(){
        switch(this.type){
            case "save":
                return(
                    <button id={this.type} onClick={this.handleClick}>Сохранить слово</button>
                )
            case "change":
                return(
                    <button id={this.type} onClick={this.handleClick}>Поменять буквы</button>
                )
            case "end":
                return(
                    <button id={this.type} type="button">Завершить игру</button>
                )
        }
    }
}

export default GameButton;