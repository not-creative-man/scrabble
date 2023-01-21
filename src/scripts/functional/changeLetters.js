import letters_array from "./letters-array";
import newArray from "./changedArray";

const changeLetters = function() {

    let input_data = [
        document.getElementById('pl_let_1'),
        document.getElementById('pl_let_2'),
        document.getElementById('pl_let_3'),
        document.getElementById('pl_let_4'),
        document.getElementById('pl_let_5'),
        document.getElementById('pl_let_6'),
        document.getElementById('pl_let_7'),
    ]

    for (const element of input_data) {
        /** Если буквы были до смены букв, то прибавляем количество */
        if (element.value != '0') {
            for (const l_e of letters_array) {
                if (element.value == l_e.letter) {
                    // element.value = '';
                    l_e.amount++;
                    break;
                }
            }
            
            for (const l_e of newArray) {
                if (element.value == l_e.letter && l_e.amount == 0) {
                    element.value = '';
                    l_e.amount++;
                    break;
                }
            }
        }
        let n = Math.floor(Math.random() * newArray.length);
        while (newArray[n].amount == 0) {
            n = Math.floor(Math.random() * newArray.length);
        }
        if (newArray[n].amount != 0) {
            for (const l_e of letters_array) {
                if(l_e.letter == newArray[n].letter) {
                    l_e.amount++;
                    break;
                }
            }
            element.value = newArray[n].letter;
            newArray[n].amount--;
            // console.log(letters_array);
            // console.log(newArray);
        }
    }
}

export default changeLetters;