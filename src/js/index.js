/* OBJETIVO 1: FAZER A SETA AVANÇAR PARA O PRÓXIMO HOBBIT QUANDO CLICADA
    PASSO 1) SELECIONAR O ELEMENTO HTML DA SETA AVANÇAR | CHECK
    PASSO 2) IDENTIFICAR O CLIQUE DO USUÁRIO NA SETA AVANÇAR | CHECK
    PASSO 3) MOSTRAR O PRÓXIMO HOBBIT DA LISTA | CHECK
    PASSO 4) ESCONDER O HOBBIT ANTERIOR | CHECL
    */

    /*OBJETIVO 2: FAZER A SETA VOLTAR PARA O HOBBIT ANTERIOR QUANDO CLICADA
    PASSO 1) SELECIONAR O ELEMENTO HTML DA SETA VOLTAR
    PASSO 2) IDENTIFICAR O CLIQUE DO USUÁRIO NA SETA VOLTAR
    PASSO 3) MOSTRAR O HOBBIT ANTERIOR DA LISTA 
    PASSO 4) ESCONDER O PRÓXIMO HOBBIT
    */

const btnNext = document.getElementById('btn-next');
const btnBack = document.getElementById('btn-back');
const cards = document.querySelectorAll('.card');
let currentCard = 0;

function hideCurrentCard (){

    const selectedCard = document.querySelector(".selected");
    selectedCard.classList.remove('selected');

};

function showCard (indexCard){

    cards[indexCard].classList.add('selected');

};

btnNext.addEventListener('click', function(){

    if(currentCard === cards.length - 1) return;

    hideCurrentCard();

    currentCard++;
    showCard (currentCard)
});
    

btnBack.addEventListener('click', function(){

    if(currentCard === 0) return;
    
    hideCurrentCard();

    currentCard--;
    showCard(currentCard)
   
});