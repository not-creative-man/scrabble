import letters_array from "./letters-array";
import changedArray from "./changedArray";

const add = function() {
    let input_data = [
        document.getElementById('pl_let_1'),
        document.getElementById('pl_let_2'),
        document.getElementById('pl_let_3'),
        document.getElementById('pl_let_4'),
        document.getElementById('pl_let_5'),
        document.getElementById('pl_let_6'),
        document.getElementById('pl_let_7'),
    ]

    for (const i_data of input_data) {
        if (i_data.value == '') {
            let n = Math.floor(Math.random() * changedArray.length);
            while (changedArray[n].amount == 0) {
                n = Math.floor(Math.random() * changedArray.length);
            }
            if (changedArray[n].amount != 0) {
                for (const l_e of letters_array) {
                    if (l_e.letter == changedArray[n].letter) {
                        l_e.amount++;
                        break;
                    }
                }
                i_data.value = changedArray[n].letter;
                changedArray[n].amount--;
                // console.log(letters_array);
                // console.log(newArray);
            }
        }
    }
}

export default add;