/*
Objetivo - quando clicarmos no botao temos que mostrar a imagem de fundo correspondente 

- passo 1 dar um jeito de pegar o elemento HTML dos botoes 

- passo 2 dar um jeito de identificar o click do usuario no botao   

-passo 3 desmarcar o botao selecionado anterior

- passo 4 marcar o botao clicado como se estivesse selecionada 

-passo 5 esconder a imagem anterior 

passo 6 fazer aparecer a imagem correspondente ao botao clicado 
*/

//- passo 1 dar um jeito de pegar o elemento HTML dos botoes 
const botoesCarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//Objetivo - quando clicarmos no botao temos que mostrar a imagem de fundo correspondente 
botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // -passo 3 desmarcar o botao selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        //passo 4 marcar o botao clicado como se estivesse selecionado
        botao.classList.add('selecionado');
        //-passo 5 esconder a imagem anterior
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa')

        //passo 6 fazer aparecer a imagem correspondente ao botao clicado
        imagens[indice].classList.add('ativa');
    })
})