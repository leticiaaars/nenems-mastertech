let elems = document.querySelectorAll('.sidenav');
let instances = M.Sidenav.init(elems, {});
let telaLogin = document.querySelector('#tela-login');
let telaCadastro = document.querySelector('#tela-cadastro');

let botaoLogin = document.querySelector('#botao-login');
let botaoCadastro = document.querySelector('#botao-cadastro');

const mudaTela = () => {

    telaLogin.classList.toggle("esconder");
    telaCadastro.classList.toggle("esconder");

}

botaoLogin.onclick = mudaTela;
botaoCadastro.onclick = mudaTela;