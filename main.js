function inserirNome(){
    let nomeUsuario = prompt("Qual o nome do elemento?");
    let elemento = document.querySelector ("#nome-usuario");
    elemento.textContent = nomeUsuario;
}

inserirNome();