const welcome = document.getElementById('welcome');
const locked = document.getElementById('locked');
const error = document.getElementById('error');
let counter = 2;

const btnEnter = document.getElementById('password');
btnEnter.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById('btnLogin').click();
  }
});

const btnLogin = document.getElementById('btnLogin');
btnLogin.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    document.getElementById('name').value = '';

    const password = document.getElementById('password').value;
    document.getElementById('password').value = '';

    if (counter > 0) {
        counter--;
        if (password === 'LABORATORIA') {
            welcome.innerHTML = 'Welcome' + ' ' + name;
            document.getElementById('screen2').classList.remove('ocultar');
            document.getElementById('screen1').classList.add('ocultar');
        } else {
            error.innerHTML = 'incorrect password try again';
        }
    } else {
        locked.innerHTML = '¡WE ARE SORRY BUT YOU CAN NOT ENTER FOR NOW!';
        document.getElementById('screen5').classList.remove('ocultar');
        document.getElementById('screen4').classList.add('ocultar');
        document.getElementById('screen3').classList.add('ocultar');
        document.getElementById('screen2').classList.add('ocultar');
        document.getElementById('screen1').classList.add('ocultar');
    }
});

const optionEncode = document.getElementById("btn1");
optionEncode.addEventListener("click", () => {
    document.getElementById("screen3").classList.remove("ocultar");
    document.getElementById("screen5").classList.add("ocultar");
    document.getElementById("screen4").classList.add("ocultar");
    document.getElementById("screen2").classList.add("ocultar");
    document.getElementById("screen1").classList.add("ocultar");
});

const optionDecode = document.getElementById("btn2");
optionDecode.addEventListener("click", () => {
    document.getElementById("screen3").classList.remove("ocultar");
    document.getElementById("screen5").classList.add("ocultar");
    document.getElementById("screen4").classList.add("ocultar");
    document.getElementById("screen2").classList.add("ocultar");
    document.getElementById("screen1").classList.add("ocultar");
});

const btnEncode = document.getElementById('btnEncode');
btnEncode.addEventListener('click', (event) => {
    const offset = parseInt(document.getElementById('offset').value);
    document.getElementById('offset').value = '';

    if (event) {
        const string = document.getElementById('textCode').value;
        document.getElementById('textCode').value = '';

        const result = document.getElementById('result');
        result.innerHTML = cipher.encode(offset, string);
    }
});

const btnDecode = document.getElementById('btnDecode');
btnDecode.addEventListener('click', (event) => {
    const offset = parseInt(document.getElementById('offset').value);
    document.getElementById('offset').value = '';
    if (event) {
        const string = document.getElementById('textCode').value;
        document.getElementById('textCode').value = '';

        const result = document.getElementById('result');
        result.innerHTML = cipher.decode(offset, string);
    }
});

const btnReset = document.getElementById("btnReset");
btnReset.addEventListener("click", () => {
    document.getElementById('result').value = ' ';
    document.getElementById('offset').value = ' ';
    const result = document.getElementById('result');
    result.innerHTML = ' ';
});

const btnSend = document.getElementById("btnSend");
btnSend.addEventListener("click", () => {
    document.getElementById("screen4").classList.remove("ocultar");
    document.getElementById("screen5").classList.add("ocultar");
    document.getElementById("screen3").classList.add("ocultar");
    document.getElementById("screen2").classList.add("ocultar");
    document.getElementById("screen1").classList.add("ocultar");
});