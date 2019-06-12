const welcome = document.getElementById('welcome');
const locked = document.getElementById('locked');
const error = document.getElementById('error');
const btnLogin = document.getElementById('btnLogin');
const btnEncode = document.getElementById('btnEncode');
const btnDecode = document.getElementById('btnDecode');
let counter = 2;

// Logeo
const validatePassword = btnLogin.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    document.getElementById('name').value = '';

    const password = document.getElementById('password').value;
    document.getElementById('password').value = '';

    if (counter > 0) {
        counter--;
        if (password === 'LABORATORIA') {
            welcome.innerHTML = 'Welcome' + ' ' + name;
        } else {
            error.innerHTML = 'incorrect password try again';
        }
    } else {
        locked.innerHTML = '¡WE ARE SORRY BUT YOU CAN NOT ENTER FOR NOW!';
    }
});

const Encode =

    btnEncode.addEventListener('click', (e) => {
        const offset = parseInt(document.getElementById('offset').value);
        document.getElementById('offset').value = '';

        if (e) {
            const string = document.getElementById('textCode').value;
            document.getElementById('textCode').value = '';

            const result = document.getElementById('result');
            result.innerHTML = cipher.encode(offset, string);
        }
    });

const Decode = btnDecode.addEventListener('click', (e) => {
    const offset = parseInt(document.getElementById('offset').value);
    document.getElementById('offset').value = '';
    if (e) {
        const string = document.getElementById('textCode').value;
        document.getElementById('textCode').value = '';

        const result = document.getElementById('result');
        result.innerHTML = cipher.decode(offset, string);
    }
});


// Reset
// const btnReset = document.getElementById('btnReset');

// const Reset = btnReset.addEventListener('click',() => {

// });

