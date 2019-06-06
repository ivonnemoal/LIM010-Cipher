/* Acá va tu código */
const inputPassword = document.getElementById('password');
const textoResultado = document.getElementById('p');
const btnLogin = document.getElementById('btn');
let contador = 3;


btnLogin.addEventListener('click', () => {
    contador =  contador - 1;
    console.log(contador);
    if(contador === 0) {
      alert('Por ahora no puedes ingresar');
    }else if(inputPassword.value === 'LABORATORIA'){
        alert('welcome');
    }else {
        alert('contraseña incorrecta');
    }
});

// const clavecita = btn.addEventListener('click',incorrecta());
// // p.innerHTML = clavecita;
// return
// };