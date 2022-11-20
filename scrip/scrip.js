
//enlaza el id del html
let r1 = document.getElementById('r1')
let r2 = document.getElementById('r2')
let r3 = document.getElementById('r3')

//adicion de eventos y captura de respuesta
p1.addEventListener('click', function name(params) {  //adiciona evento
    let rt1 = prompt('respuesta')                    //determina la variable - pide los datos
    r1.innerText = rt1                                 // guarda la variable - guarda los datos
})

p2.addEventListener('click', function name(params) {
    let rt2 = prompt('respuesta')
    r2.innerText = rt2
})

p3.addEventListener('click', function name(params) {
    let rt3 = prompt('respuesta')
    r3.innerText = rt3
})

//-----------------------cuadro 2

let r4 = document.getElementById('r4')
let r5 = document.getElementById('r5')
let r6 = document.getElementById('r6')

r4.addEventListener('click', function name(params) {
    let rt4 = prompt('respuesta')
    r4.innerText = rt4
})

r5.addEventListener('click', function name(params) {
    let rt5 = prompt('respuesta')
    r5.innerText = rt5
})

r6.addEventListener('click', function name(params) {
    let rt6 = prompt('respuesta')
    r6.innerText = rt6
})

//-----------------------cuadro 3

let r7 = document.getElementById('r7')
let r8 = document.getElementById('r8')
let r9 = document.getElementById('r9')

r7.addEventListener('click', function name(params) {
    let rt7 = prompt('respuesta')
    r7.innerText = rt7
})

r8.addEventListener('click', function name(params) {
    let rt8 = prompt('respuesta')
    r8.innerText = rt8
})

r9.addEventListener('click', function name(params) {
    let rt9 = prompt('respuesta')
    r9.innerText = rt9
})

//----------------------------Boton enviar

btnForm1.addEventListener('click', function name(params) {
    r1.innerText = 'Respuesta '; r2.innerText = 'Respuesta '; r3.innerText = 'Respuesta '

})

btnForm2.addEventListener('click', function name(params) {
    r4.innerText = 'Respuesta '; r5.innerText = 'Respuesta '; r6.innerText = 'Respuesta '

})

btnForm3.addEventListener('click', function name(params) {
    r7.innerText = 'Respuesta '; r8.innerText = 'Respuesta '; r9.innerText = 'Respuesta '

})

//----------------------------Boton clear

btn.addEventListener('click', function name(params) {
    r1.innerText = 'Respuesta '; r2.innerText = 'Respuesta '; r3.innerText = 'Respuesta ';
    r4.innerText = 'Respuesta '; r5.innerText = 'Respuesta '; r6.innerText = 'Respuesta ';
    r7.innerText = 'Respuesta '; r8.innerText = 'Respuesta '; r9.innerText = 'Respuesta ';

})