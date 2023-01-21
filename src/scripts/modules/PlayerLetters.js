import React from "react";
import changeLetters from "../functional/changeLetters";

class PlayerLetters extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        changeLetters()
    }

    render(){
        return(
            <div className='players_letters'>
                <span>Мои буквы</span>
                <div>
                    <input type={'text'} className='pl_let_1 pl_input' id='pl_let_1' disabled value='0'></input>
                    <input type={'text'} className='pl_let_2 pl_input' id='pl_let_2' disabled value='0'></input>
                    <input type={'text'} className='pl_let_3 pl_input' id='pl_let_3' disabled value='0'></input>
                    <input type={'text'} className='pl_let_4 pl_input' id='pl_let_4' disabled value='0'></input>
                    <input type={'text'} className='pl_let_5 pl_input' id='pl_let_5' disabled value='0'></input>
                    <input type={'text'} className='pl_let_6 pl_input' id='pl_let_6' disabled value='0'></input>
                    <input type={'text'} className='pl_let_7 pl_input' id='pl_let_7' disabled value='0'></input>
                </div>
            </div>
        );
    }
    

    
}

export default PlayerLetters;