function Login(){
    alert("aqui");

    let usuario = document.getElementById('txtUser').value;
    let password = document.getElementById('txtSenha').value;
    
    if(usuario == 'admin' && password == "123456"){
        alert("Bem vindo ao Sistema");

    } else if( usuario == 'aluno' && password == 'aluno123'){
        alert("Aluno Logado - Bem vindo ao Sistema");

    } else if( usuario == 'professor' && password == 'prof123'){
        alert("Professor Logado - Bem vindo ao Sistema");
        
    } else{
        alert("Credenciais Inválidas");
    }
}