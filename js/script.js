var ButtonBox1Card1 = document.getElementById('option1Card1');
var ButtonBox2Card1 = document.getElementById('option2Card1');
var ButtonBox3Card1 = document.getElementById('option3Card1');

var ButtonBox1Card2 = document.getElementById('option1Card2');
var ButtonBox2Card2 = document.getElementById('option2Card2');
var ButtonBox3Card2 = document.getElementById('option3Card2');

var option1statusCard1 = 1;
var option2statusCard1 = 1;
var option3statusCard1 = 1;

var option1statusCard2 = 1;
var option2statusCard2 = 1;
var option3statusCard2 = 1;

var descriptionbox1Card1 = document.getElementById('card1DescriptionBox1')
var descriptionbox2Card1 = document.getElementById('card1DescriptionBox2')
var descriptionbox3Card1 = document.getElementById('card1DescriptionBox3')

var descriptionbox1Card2 = document.getElementById('card2DescriptionBox1')
var descriptionbox2Card2 = document.getElementById('card2DescriptionBox2')
var descriptionbox3Card2 = document.getElementById('card2DescriptionBox3')

var linhaDuvida = document.getElementById('QuestionActiveContent').getElementsByClassName('activeDoubtHr');
var Duvidas = document.getElementById('QuestionActiveContent').getElementsByClassName('activeDoubt');
var DuvidasResposta = document.getElementById('QuestionActiveContent').getElementsByClassName('activeAnswer');
var checkboxStatus1 = 0;
var checkboxStatus2 = 0;
function displayAnswer(InfoPosition) {
    if (DuvidasResposta[InfoPosition - 1].style.display === 'block') {
        DuvidasResposta[InfoPosition - 1].style.display = 'none';
        linhaDuvida[InfoPosition - 1].style.height = '2px';
        linhaDuvida[InfoPosition - 1].style.border = 'white'
        linhaDuvida[InfoPosition - 1].style.backgroundColor = 'white';
        linhaDuvida[InfoPosition - 1].style.color = 'white';
    } else if (DuvidasResposta[InfoPosition - 1].style.display === 'none') {
        DuvidasResposta[InfoPosition - 1].style.display = 'block';
        linhaDuvida[InfoPosition - 1].style.height = '2px';
        linhaDuvida[InfoPosition - 1].style.border = '#FF594E'
        linhaDuvida[InfoPosition - 1].style.backgroundColor = '#FF594E';
        linhaDuvida[InfoPosition - 1].style.color = '#FF594E';
    }
}

function qtdBox1(QtdItens) {
    var escolha;
    if (QtdItens == 1) {
        escolha = document.getElementById('option1Card1');
        if (option1statusCard1 == 1) {
            escolha.style.backgroundColor = '#1FAB36';
            escolha.style.color = 'white';
            ButtonBox2Card1.style.backgroundColor = '#e6e7e7';
            option2statusCard1 = 1;
            ButtonBox3Card1.style.backgroundColor = '#e6e7e7';
            option3statusCard1 = 1;

            descriptionbox1Card1.style.display = "block";
            descriptionbox2Card1.style.display = "none";
            descriptionbox3Card1.style.display = "none";
            option1statusCard1 = 0;
        } else
            if (option1statusCard1 == 0) {
                escolha.style.backgroundColor = '#e6e7e7';
                option1statusCard1 = 1;
            }
    } else
        if (QtdItens == 3) {
            escolha = document.getElementById('option2Card1');
            if (option2statusCard1 == 1) {
                escolha.style.backgroundColor = '#1FAB36';
                escolha.style.color = 'white';
                ButtonBox1Card1.style.backgroundColor = '#e6e7e7';
                option1statusCard1 = 1;
                ButtonBox3Card1.style.backgroundColor = '#e6e7e7';
                option3statusCard1 = 1;

                descriptionbox1Card1.style.display = "none";
                descriptionbox2Card1.style.display = "block";
                descriptionbox3Card1.style.display = "none";
                option2statusCard1 = 0;
            } else
                if (option2statusCard1 == 0) {
                    escolha.style.backgroundColor = '#e6e7e7';
                    option2statusCard1 = 1;
                }

        } else
            if (QtdItens == 6) {
                escolha = document.getElementById('option3Card1');
                if (option3statusCard1 == 1) {
                    escolha.style.backgroundColor = '#1FAB36';
                    escolha.style.color = 'white';
                    ButtonBox1Card1.style.backgroundColor = '#e6e7e7';
                    option1statusCard1 = 1;
                    ButtonBox2Card1.style.backgroundColor = '#e6e7e7';
                    option2statusCard1 = 1;

                    descriptionbox1Card1.style.display = "none";
                    descriptionbox2Card1.style.display = "none";
                    descriptionbox3Card1.style.display = "block";

                    option3statusCard1 = 0;
                } else
                    if (option3statusCard1 == 0) {
                        escolha.style.backgroundColor = '#e6e7e7';
                        option3statusCard1 = 1;
                    }
            }
}
function qtdBox2(QtdItens) {
    var escolha;
    if (QtdItens == 1) {
        escolha = document.getElementById('option1Card2');
        if (option1statusCard2 == 1) {
            escolha.style.backgroundColor = '#1FAB36';
            escolha.style.color = 'white';
            ButtonBox2Card2.style.backgroundColor = '#e6e7e7';
            option2statusCard2 = 1;
            ButtonBox3Card2.style.backgroundColor = '#e6e7e7';
            option3statusCard2 = 1;

            descriptionbox1Card2.style.display = "block";
            descriptionbox2Card2.style.display = "none";
            descriptionbox3Card2.style.display = "none";
            option1statusCard2 = 0;
        } else
            if (option1statusCard2 == 0) {
                escolha.style.backgroundColor = '#e6e7e7';
                option1statusCard2 = 1;
            }
    } else
        if (QtdItens == 3) {
            escolha = document.getElementById('option2Card2');
            if (option2statusCard2 == 1) {
                escolha.style.backgroundColor = '#1FAB36';
                escolha.style.color = 'white';
                ButtonBox1Card2.style.backgroundColor = '#e6e7e7';
                option1statusCard2 = 1;
                ButtonBox3Card2.style.backgroundColor = '#e6e7e7';
                option3statusCard2 = 1;

                descriptionbox1Card2.style.display = "none";
                descriptionbox2Card2.style.display = "block";
                descriptionbox3Card2.style.display = "none";
                option2statusCard2 = 0;
            } else
                if (option2statusCard2 == 0) {
                    escolha.style.backgroundColor = '#e6e7e7';
                    option2statusCard2 = 1;
                }

        } else
            if (QtdItens == 6) {
                escolha = document.getElementById('option3Card2');
                if (option3statusCard2 == 1) {
                    escolha.style.backgroundColor = '#1FAB36';
                    escolha.style.color = 'white';
                    ButtonBox1Card2.style.backgroundColor = '#e6e7e7';
                    option1statusCard2 = 1;
                    ButtonBox2Card2.style.backgroundColor = '#e6e7e7';
                    option2statusCard2 = 1;

                    descriptionbox1Card2.style.display = "none";
                    descriptionbox2Card2.style.display = "none";
                    descriptionbox3Card2.style.display = "block";
                    option3statusCard2 = 0;
                } else
                    if (option3statusCard2 == 0) {
                        escolha.style.backgroundColor = '#e6e7e7';
                        option3statusCard2 = 1;
                    }
            }
}
function checkboxDiscount1(){
    imgCheckbox1 = document.getElementById('CheckBox1');
    if(checkboxStatus1 == 0){
        imgCheckbox1.src = '/img/check-icon-mobile-checked.png';
        checkboxStatus1 = 1
    }else{
        imgCheckbox1.src = '/img/check-icon-mobile.png';
        checkboxStatus1 = 0;
    }
}
function checkboxDiscount2(){
    imgCheckbox2 = document.getElementById('CheckBox2');
    if(checkboxStatus2 == 0){
        imgCheckbox2.src = '/img/check-icon-mobile-checked.png';
        checkboxStatus2 = 1
    }else{
        imgCheckbox2.src = '/img/check-icon-mobile.png';
        checkboxStatus2 = 0;
    }
}
