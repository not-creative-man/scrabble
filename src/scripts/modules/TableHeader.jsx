import React from 'react';

function TableHeader(){
    return(
        <div className='th table_row'>
            <div className="tc letter">Буква</div>
                <div className="tc letter">Кол-во</div>
                <div className="tc letter">Очки</div>
        </div>
    )
}

export default TableHeader;