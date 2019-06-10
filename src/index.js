/* Acá va tu código */

const result = document.getElementById('result');
const btnLogin = document.getElementById('btn');
let counter = 2;


const validatePassword = btnLogin.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    document.getElementById('name').value ='';

    const password = document.getElementById('password').value;   
    document.getElementById('password').value ='';
 
    // const numero1 = parseInt(password.value);}
    if(counter > 0){
        counter--;
        if(password === 'LABORATORIA'){
            result.innerHTML = 'WELCOME'+ ' ' + name;
        }else {
            result.innerHTML = 'incorrect password try again';
            // document.getElementById('result').innerHTML = '';
        }
    }else {
       result.innerHTML = '¡YOU CAN NOT ENTER FOR NOW!';}
    });


    

// const clavecita = btn.addEventListener('click',incorrecta());
// // p.innerHTML = clavecita;
// return
// };