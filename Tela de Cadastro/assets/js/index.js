if (localStorage.getItem('token') == null){
    alert('Vocé precisa estar em uma conta para acessar essa página')
    window.location.href = "./assets/pages/tela_inicial.html";
}

let userlogado = JSON.parse(localStorage.getItem(userlogado));

let logado = document.querySelector("#logado");
logado.innertHTML = 'Olá ${userlogado.nome}';

function sair(){
    localStorage.removeItem('token');
    localStorage.removeItem('userlogado');
    window.location.href = "./assets/pages/tela_inicial.html";
}



