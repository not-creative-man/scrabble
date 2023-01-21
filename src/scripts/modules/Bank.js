import React from 'react';
import '../../styles/Bank.css';
import Table from './Table';
import GamerData from './GamerData';

class Bank extends React.Component{

    render(){
        return(
            <div className='bank_wrapper'>
                <div className='table_letters'>
                    <div className='table_letters_wrapper'>
                    <Table num={0} />
                    <Table num={1} />
                    </div>
                </div>
                <GamerData />
            </div>
        );
    }
}

export default Bank;