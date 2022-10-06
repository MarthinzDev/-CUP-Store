function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "Source" && senha == "ritaleiila"){
        alert(" Olá  " +login+ " seja bem vindo novamente");
        location.href = "home.html";
    }else
        alert(" Olá  " +login+ " seu usuário ou senha estão incorretos");
}