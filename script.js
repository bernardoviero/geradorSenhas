let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");


let charsetLetra = "abcdefghijklmnopqrstuvwxyz"+"ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let charsetNumero = "0123456789";
let charsetNumeroLetra = "0123456789"+"abcd0123456789efghijklmn0123456789opqrstuvwxyz"+"ABCD0123456789EFGHIJKLMNOPQ0123456789RSTUVWXYZ";
let charset = "ABCDE!@FGHIJKLMNO2!@34567PQ**#RSTUVWXYZ!@abchijklmno**#p23456789!@qrsdefghij**#klmnoAB!@CDEFGHI**#JKLMNOpq2!@3456789rst!@uvwxyz#0123!@456789&";

let novaSenha = "";

sizePassword.innerHTML= sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePasswordNumber(){

    let pass = "";

    for(let i = 0, n = charsetNumero.length; i < (sliderElement.value); ++i){
        pass += charsetNumero.charAt(Math.floor(Math.random() *n));
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function generatePasswordLetter(){

    let pass = "";

    for(let i = 0, n = charsetLetra.length; i < (sliderElement.value); ++i){
        pass += charsetLetra.charAt(Math.floor(Math.random() *n));
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function generatePasswordLetterNumber(){

    let pass = "";

    for(let i = 0, n = charsetNumeroLetra.length; i < (sliderElement.value); ++i){
        pass += charsetNumeroLetra.charAt(Math.floor(Math.random() *n));
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function generatePassword(){

    let pass = "";

    for(let i = 0, n = charset.length; i < (sliderElement.value); ++i){
        pass += charset.charAt(Math.floor(Math.random() *n));
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){

    navigator.clipboard.writeText(novaSenha);

    alert(novaSenha+"\n\nSenha copiada!");
}