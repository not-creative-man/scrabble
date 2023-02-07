import config from '../../config.json'


let array = [];

for(let i = 0; i < config.tableCells; i++){
    array[i] = [];
    for(let j = 0; j < config.tableCells; j++){
        array[i][j] = ''; 
    }
}

export default array;