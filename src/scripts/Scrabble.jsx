import '../styles/Scrabble.css'
import Header from './modules/Header'
import Bank from './modules/Bank'
import GamerData from './modules/GamerData'
import GameField from './modules/GameField'
import { useState,useEffect } from 'react'

function Scrabble(){

    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     fetch('/api')
    //     .then((response) => response.json)
    //     .then((response) => setData(response.message))
    // },[]);

    return(
        <div className='browser_window'>
            <Header />
            {/* <div>
                {
                    !data ? 'Nothing..' : data
                }
            </div> */}
            <div className='body'>
                <div className='players_part'>
                    <Bank />
                </div>
                <GameField />
            </div>
        </div>
    );
}

export default Scrabble;