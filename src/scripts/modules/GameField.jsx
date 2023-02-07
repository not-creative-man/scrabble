import '../../styles/GameField.css'
import GameFieldTable from './GameFieldTable';
import GameFieldButtons from './GameFieldButtons';

function GameField(){
    return(
        <div className='gf'>
            <div className='gf_wrapper'>
                <form>
                    <div className='field'>
                        <GameFieldTable />
                    </div>
                    <GameFieldButtons />
                </form>
            </div>
        </div>
    )
}

export default GameField;