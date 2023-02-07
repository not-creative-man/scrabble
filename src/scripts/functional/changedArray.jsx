import letters_array from "./letters-array";

let array = [];

for(let el of letters_array){
    for(let i = 0; i < el.amount; i++){
        array.push({'letter': el.letter, 'amount': 1, 'score': el.score})
    }
}

export default array;