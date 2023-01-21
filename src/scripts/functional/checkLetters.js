import letters_array from "./letters-array";
import addLetters from "./addLetters";

const checkLetter = function(){
    let count = 0;
    let x = '';
    const array = document.querySelectorAll('#field_cell');
    // Получаем одну ячейку
    for(let element of array){
        // Если ячейка не пустая и не отключенная
        if(element.value != '' && element.disabled == false) {
            element.disabled = true; // Отключаем
            // Теперь проверяем на соответствие букве
            for (const letter of letters_array) {
                if(letter.letter == element.value){
                    if(element.placeholder == 'x3б'){
                        count += (letter.score*3);
                        break;
                    } else if(element.placeholder == 'x2б'){
                        count += (letter.score*2);
                        break;
                    } else if(element.placeholder == 'x3сл'){
                        x = '3';
                        count += letter.score;
                        break;
                    } else if(element.placeholder == 'x2сл'){
                        x = '2';
                        count += letter.score;
                        break;
                    } else{
                        count += letter.score;
                        break;
                    }                
                }              
            }
        }
    }

    if(x == '3') count *= 3;
    else if (x=='2') count *= 2;

    console.log(count);

    document.getElementById('pl_score').value = count + Number(document.getElementById('pl_score').value);
    addLetters();
}

export default checkLetter;