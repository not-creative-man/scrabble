import '../../styles/Header.css'
import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.changeState = this.changeState.bind();
    }

    changeState(){
        let modal = document.getElementById('modal');
        modal.style.opacity = 1;
        modal.style.visibility = 'visible';
    }
    
    render(){
        return(
            <div className='main_header'>
                <div className='logo'>
                    <span className='logo_span'>SCRABBLE</span>
                </div>
                <div className='buttons_header'>
                    <input className='rules' type='button' value='Правила' onClick={this.changeState}></input>
                    <input className='new_game' type="submit" value={"Новая игра"}></input>
                </div>
            </div>
        );
    }
};

export default Header;