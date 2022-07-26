let letrasMaisculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
let letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numeros = "0123456789";
let caracterEspecial = "!@#&*()\/";
let charsetCompleto = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#&*()\/"

let senha = "TESTE123"; // tamanho 8
let sizeSenha = ((senha.length + 1) - senha.length);
let Novasenha = "";

// SENHA COMPLETA:
senhaCompleta();
console.log(Novasenha);
Novasenha = "";
// SENHA APENAS NUMEROS
senhaNum(numeros);
console.log(Novasenha);
Novasenha = "";
//SENHA APENAS COM LETRAS
gerarSenhaLetras(letras)
console.log(Novasenha)


function gerarSenhaLetras(parametro) {
    gerarSenha(letrasMaisculas);
    gerarSenha(letrasMinusculas);
    gerarSenhaCompleta(letras);
    function gerarSenha(parametro) {
        for (let i = 0, n = parametro.length; i < sizeSenha; i++) {
            Novasenha += parametro.charAt(Math.floor(Math.random() * n));
        }
    }
    function gerarSenhaCompleta(parametro) {
        for (let i = 0, n = parametro.length; i < (senha.length-2); i++) {
            Novasenha += parametro.charAt(Math.floor(Math.random() * n));
        }
    }
}

function senhaNum(parametro) {
    for (let i = 0, n = parametro.length; i < (senha.length); i++) {
        Novasenha += parametro.charAt(Math.floor(Math.random() * n));
    }
}

function senhaCompleta() {
    gerarSenha(letrasMaisculas)
    gerarSenha(letrasMinusculas)
    gerarSenhaCompleta(charsetCompleto);
    gerarSenha(numeros)
    gerarSenha(caracterEspecial)

    function gerarSenha(parametro) {
        for (let i = 0, n = parametro.length; i < sizeSenha; i++) {
            Novasenha += parametro.charAt(Math.floor(Math.random() * n));
        }
    }

    function gerarSenhaCompleta(parametro) {
        for (let i = 0, n = parametro.length; i < (senha.length-4); i++) {
            Novasenha += parametro.charAt(Math.floor(Math.random() * n));
        }
    }
}




