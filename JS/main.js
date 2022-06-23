//Ação para revelar a senha
let btnEye = document.querySelector('.fa-eye');

btnEye.addEventListener('click', ()=> {
    let inputSenha = document.querySelector('#exampleInputPassword1')

    if(inputSenha.getAttribute('type') == 'password'){
       inputSenha.setAttribute('type', 'text'); 
    }else{
        inputSenha.setAttribute('type', 'password');
    }
})

//validador de email e senha
const button = document.querySelector('#btn');

button.addEventListener('click', (event)=>{
    event.preventDefault();

    const email = document.querySelector('#exampleInputEmail1')
    const password = document.querySelector('#exampleInputPassword1')
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailTest = regex.test(email.value)

    if(email.value === '' || !emailTest){
        email.classList.add('errorInput')
    }else {
        email.classList.remove('errorInput')
    }

    if(password.value === '' || password.value.length < 6){
        password.classList.add('errorInput')
    }else {
        password.classList.remove('errorInput')
    }
   
})
