import React from 'react';
import '../../styles/GamerData.css'
import PlayerLetters from './PlayerLetters';

class GamerData extends React.Component{

    render(){
        return(
            <div className='player_data'>
                <div className='player_data_wrapper'>
                    <PlayerLetters />
                    <div className='players_score'>
                        <span>Мои очки</span>
                        <input id= 'pl_score' className='pl_scores pl_input' type={'number'} disabled value='0'></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default GamerData;