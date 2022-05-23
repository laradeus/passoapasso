let botoes = document.querySelectorAll(".botoes button");
let passos = document.querySelectorAll(".passos > div");
let answer = document.querySelector( '.explicacao' );


// código executado ao clicar
function aoClicar(event){
    let botaoAtual = event.target;

    let elementoAlvo = document.querySelector(dataAlvo);
    let passoAnterior = document.querySelector('.passo-ativo');
    let botaoAnterior = document.querySelector('.botao-ativo');

    if(botaoAtual !== botaoAnterior){

        // inserir a classe 'passo-ativo' no elemento alvo
        elementoAlvo.classList.add('passo-ativo');
        // remover a classe 'passo-ativo' do elemento anteriormente exibido
        passoAnterior.classList.remove('passo-ativo');

        // adiciona a classe 'botao-ativo' ao botão clicado
        botaoAtual.classList.add('botao-ativo');
        // remove a classe 'botao-ativo' do botão anterior
        botaoAnterior.classList.remove('botao-ativo');
        
    }
    
}

for(let botao of botoes){
    // código a repetir
    botao.addEventListener('click', aoClicar);
}

// código do quiz da primeira página
let alternatives = document.querySelectorAll( '.alt' )

// código do quiz da segunda página
let data = document.querySelectorAll( '.data' )
let result = document.querySelectorAll( '.result' )

function verifyAlternatives() {
    let isClicked = false
    for ( let item of data ) {
  
      if(item.classList.contains('clicked')) {
        isClicked = true
      }
  
    }
    return isClicked
  }

function checkAnswer2( event ) {
if (verifyAlternatives()) {
    return
    }
    
  // Cria variável que representa a alternativa clicada
  let alternative = event.target

  // Aplica classe “clicada” para estilizar via CSS
  alternative.classList.add( 'clicked' )

  // Se <li> clicada contém classe “correct”
  if ( alternative.classList.contains( 'ago' ) ) {

    // Troca o texto do resultado por “Acertou :)”
    result[0].textContent = 'Você poderá sacar seu FGTS em 25 de maio!'


    } else if ( alternative.classList.contains( 'set' ) ) {

        // Troca o texto do resultado por “Acertou :)”
        result[0].textContent = 'Você poderá sacar seu FGTS em 28 de maio!'

    } else if ( alternative.classList.contains( 'out' ) ) {

        // Troca o texto do resultado por “Acertou :)”
        result[0].textContent = 'Você poderá sacar seu FGTS em 1º de junho!'


    } else if ( alternative.classList.contains( 'nov' ) ) {

        // Troca o texto do resultado por “Acertou :)”
        result[0].textContent = 'Você poderá sacar seu FGTS em 8 de junho!'

    } else if ( alternative.classList.contains( 'dez' ) ) {

        // Troca o texto do resultado por “Acertou :)”
        result[0].textContent = 'Você poderá sacar seu FGTS em 15 de junho!'

    } else {

        // Troca o texto do resultado por Errou :(”
        result[0].textContent = 'Você já pode sacar seu FGTS!'
    }


}
console.log("teste here:", data);

for(let item of data){
    // código a repetir
    item.addEventListener('click', checkAnswer2);
}



