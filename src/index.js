/* Acá va tu código */
const password = document.getElementById('password');
const name = document.getElementById('name');
const textResult = document.getElementById('result');
const btnLogin = document.getElementById('btn');
let counter = 3;

const validatePassword = btnLogin.addEventListener('click', () => {
    counter = counter - 1;
    if(counter === 0) {
        textResult.innerHTML = '¡YOU CAN NOT ENTER FOR NOW!';
    }else if(password.value === 'LABORATORIA'){
        textResult.innerHTML = 'WELCOME'+ ' ' + name.value;
    }else {
        textResult.innerHTML = 'incorrect password try again';
    }
});


// const clavecita = btn.addEventListener('click',incorrecta());
// // p.innerHTML = clavecita;
// return
// };