let sliderElement = document.querySelector('#slider'); //input
let buttonElement = document.querySelector('#button');
let sizePassword = document.querySelector('#valor'); //caracteres
let password = document.querySelector('#password');
let containerPassword = document.querySelector('#container-password');

let charset = 'abcdefghilmnopqrstuvwxyzABCDEFGHILMNOPQRSTUVWXYZ0123456789!@#$%¨&*';
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value; //aparece o numero fixo de carateres 
slider.oninput = function(){
    sizePassword.innerHTML = this.value //o circulo a medida que se mexe aparece a quantide de carateres
}
 //função para gerar senha
function generatePassword(){
    // alert("VAMOS GERAR A SENHA")
    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){ // quantidade de carateres que o usuari seleciono
        pass += charset.charAt(Math.floor(Math.random() * n)) //gerando numero enteiro aleatorio de zero dentro do que tem o charset
    }
    // console.log(pass);

    containerPassword.classList.remove('hide');
    password.innerHTML = pass;
    novaSenha = pass
}

//para copiar a senha clipboard
function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}
