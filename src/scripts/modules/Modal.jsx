import '../../styles/Modal.css';

function Modal(){
    return(
        <div className="modal" id="modal">
            <div className="modal_wrapper">
                <header>
                    <div className="modal_header">
                        <span className="modal_header_close" 
                              onClick={()=>{
                                let modal = document.getElementById('modal');
                                    modal.style.opacity = 0;
                                    modal.style.visibility = 'hidden';
                              }}>x</span>
                    </div>
                </header>
                <div className="modal_body">
                    <h2>Правила игры Scrabble (Словодел)</h2>
                    <p>Настольная игра Scrabble или Словодел - игра на составление слов из предложенных букв и букв слов, уже выставленных на поле.<br /><br />
                          
    Первое слово располагают так, чтобы оно пересекало клетку в центре поля. Слова составляются по горизонтали и вертикали и должны читаться слева направо или сверху вниз. За один ход можно составить любое количество слов из имеющихся на руках букв. Игрок может в счет своего хода поменять буквы на другие из оставшихся.<br /><br />
                          
    Каждая буква имеет свою ценность - очки, которые засчитываются игроку при каждом создании игроком нового слова.  Если буква попадает на голубую клетку ( <div className="ex blue"></div> ), то очки за букву удваиваются; если буква попадает на синюю клетку ( <div className="ex dark_blue"></div> ), то очки за букву утраиваются; если слово пересекает розовую клетку ( <div className="ex pink"></div> ), то очки за слово удваиваются; если слово пересекает красную клетку ( <div className="ex red"></div> ), то очки за слово утраиваются.<br /><br />
                          
    Количество оставшихся в игре букв отображается в таблице.<br /><br />
                          
    По базовым правилам используются только существительные в именительном падеже и единственном числе, но это правило зависит только от договоренностей игроков.<br /><br />
                          
    Чтобы написать слово, нужно выбрать ячейку, в которую вы хотите поместить слово, и написать букву. Для одной буквы одна ячейка. После этого нужно нажать на кнопку “Сохранить слово”<br /><br />
                          
    Чтобы поменять буквы, нужно нажать на кнопку “Поменять буквы”<br /><br />
                          
    Если на ваш взгляд больше слов вы составить не можете, а букв не осталось, нажмите на кнопку “Завершить игру”. После этого будет произведено сравнение очков и получение победителя<br /><br />
                          
    Для начала новой игры нажмите кнопку “Новая игра”. При этом текущая игра будет сброшена без объявления победителя</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;