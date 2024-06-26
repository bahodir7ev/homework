const button1 = document.querySelector('#btn1');
const button2 = document.querySelector('#btn2');
const button3 = document.querySelector('#btn3');
const buttons = document.querySelector('.panel-btns');
const selector = document.querySelector('#sresponse');
const s1 = document.querySelector('#s1');
const s2 = document.querySelector('#s2');
const s3 = document.querySelector('#s3');
let media = window.matchMedia("(max-width: 900px)");

button1.addEventListener('click', function () {
    if (button2.classList.contains('active')) {
        button2.classList.remove('active');
    } else if (button3.classList.contains('active')) {
        button3.classList.remove('active');
    } else {
        button1.classList.add('active');
    }
})
button2.addEventListener('click', function () {
    if (button1.classList.contains('active')) {
        button1.classList.remove('active');
    } else if (button3.classList.contains('active')) {
        button3.classList.remove('active');
    } else {
        button2.classList.add('active');
    }
})
button3.addEventListener('click', function () {
    if (button1.classList.contains('active')) {
        button1.classList.remove('active');
    } else if (button2.classList.contains('active')) {
        button2.classList.remove('active');
    } else {
        button3.classList.add('active');
    }
})

