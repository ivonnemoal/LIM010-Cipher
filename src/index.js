/* Acá va tu código */
const inputPassword = document.getElementById('password');
const textoResultado = document.getElementById('p');
const btnLogin = document.getElementById('btn');
let contador = 3;


btnLogin.addEventListener('click', () => {
    contador =  contador - 1;
    console.log(contador);
    if(contador === 0) {
      alert('agotaste los intentos');
    }
});


// const clavecita = btn.addEventListener('click',incorrecta());
// // p.innerHTML = clavecita;

// const incorrecta = (password) => {
//     if(password !== 'LABORATORIA'){
//         console.log('incorrect');
//     }
//     else {

//     }
// }

// {p.innerHTML = password;}

// if(password == 'LABORATORIA')
// const passwordIncorrect = () => {
//     for(let i= 0; i<= 3;  i++){

//     }
// return
// };