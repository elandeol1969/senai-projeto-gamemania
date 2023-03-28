//efeito do botão voltar ao Topo

//Validação de Login

function login(){
    var logado = 0;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if(usuario == 'gamemania' && senha == 'gamemania@'){
        window.location = "index.html";
        logado = 1;
    }

    if(logado == 0){
        alert("Acesso Negado. Dados Incorretos");
    }

}

//Ativar alert no botão cadastrar

function cadastro() {
    alert("Cadastrado com Sucesso!");
    window.location.href = "index.html";

}