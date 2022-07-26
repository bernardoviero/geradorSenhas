let sliderElement = document.querySelector("#slider");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
var checkbox = document.querySelector("#checkbox")



let letrasMaisculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
let letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numeros = "0123456789";
let caracterEspecial = "!@#&*()\/";
let charsetCompleto = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#&*()\/"

sizePassword.innerHTML = sliderElement.value;
slider.oninput = function () {
    sizePassword.innerHTML = this.value;
}


//let sizeSenha = ((senha.length + 1) - senha.length);
let Novasenha = "";


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
        for (let i = 0, n = parametro.length; i < (senha.length - 2); i++) {
            Novasenha += parametro.charAt(Math.floor(Math.random() * n));
        }
    }
}

function senhaNum(parametro) {
    for (let i = 0, n = parametro.length; i < sliderElement.value; i++) {
        Novasenha += parametro.charAt(Math.floor(Math.random() * n));
    }
    password.innerHTML = Novasenha;
   Novasenha = "";
}

function senhaCompleta() {
    console.log(sliderElement.value)
    if (checkbox.checked == true) {
        console.log("entrou")
        gerarSenha(letrasMaisculas)
        gerarSenha(letrasMinusculas)
        gerarSenhaCompleta(charsetCompleto);
        gerarSenha(numeros)
        gerarSenha(caracterEspecial)

        function gerarSenha(parametro) {
            for (let i = 0, n = parametro.length; i < (sliderElement.value - sliderElement.value + 1); i++) {
                Novasenha += parametro.charAt(Math.floor(Math.random() * n));
            }
        }

        function gerarSenhaCompleta(parametro) {
            for (let i = 0, n = parametro.length; i < (sliderElement.value - 4); i++) {
                Novasenha += parametro.charAt(Math.floor(Math.random() * n));
            }
        }
        password.innerHTML = Novasenha;
        Novasenha="";
    }
}

function copyPassword() {

    navigator.clipboard.writeText(Novasenha);

    alert(Novasenha + "\n\nSenha copiada!");
}



