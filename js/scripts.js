let sliderElement = document.querySelector("#slider");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password")


let charsetLetra = "abcdGHIJKLMNOPQRSTUVWXYZefghGHIJKLMNOPQRSTUVWXYZijklmnopqrstuvwxyzABCDefghEFGHIJKLabcdMNOPQRSefghTUVWXYZ"
let charsetNumero = "0123456789"
let charsetNumeroLetra = "abcdGHIJK0123456789LMNOPQRSTUVW0123456789XYZefghGHIJ0123456789KLMNOPQRSTUVWXYZ0123456789ijklmnopqrstuvwxyzABCDefghEFGHIJK0123456789LabcdMNOPQRSefghTUVWXYZ"
let charsetCompleted = "abcd!@#*GHIJK01234567!@#*89LMNOPQ!@#*RSTUVW0!@#*123456!@#*789XYZefghGHIJ0123456!@#*789KLMNOPQRSTUVWXYZ01234!@#*56789ijklmnopqrstuvwx!@#*yzABC!@#*DefghEFGHIJK01!@#*23456789La!@#*bcdMNOPQRSefghTUV!@#*WXYZ"

let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
    sizePassword.innerHTML = this.value;
}

function generatePassword(parametro) {

    let pass = "";
    for (let i = 0, n = parametro.length; i < (sliderElement.value); ++i) {
        pass += parametro.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword() {

    navigator.clipboard.writeText(novaSenha);

    alert(novaSenha + "\n\nSenha copiada!");
}