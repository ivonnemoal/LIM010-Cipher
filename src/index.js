/* Acá va tu código */
const password = document.getElementById('password').value;
const name = document.getElementById('name').value;
const textResult = document.getElementById('result');
const btnLogin = document.getElementById('btn');
let counter = 3;

btnLogin.addEventListener('click', () => {
    counter = counter - 1;
    console.log(counter);
    if(counter === 0) {
        textResult.innerHTML = '¡YOU CAN NOT ENTER FOR NOW!';
    }else if(password === 'LABORATORIA'){
        textResult.innerHTML = 'WELCOME'+ ' ' + name;
    }else {
        textResult.innerHTML = 'incorrect password try again';
    }
});

// const clavecita = btn.addEventListener('click',incorrecta());
// // p.innerHTML = clavecita;
// return
// };