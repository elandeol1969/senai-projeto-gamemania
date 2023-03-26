<script>
function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "gamemania" && senha == "gamemania@"){
        alert('Sucesso - Clique OK para Acessar a Home');
        location.href = "index.html";
    }else{
        alert('Usuário ou senha incorretos');
    }
}
</script>