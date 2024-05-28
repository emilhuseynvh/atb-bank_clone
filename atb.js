//  H A M B U R G E R 
const sideOPN = document.querySelector('#ac')
const sideCL = document.querySelector('#bagla')
const hdr = document.querySelector('#salam')
const headd = document.querySelector('#head')
const bodyy = document.querySelector('.container')
const swpierr = document.querySelector('.swiper')
const ftr = document.querySelector('footer')
function sideOpen() {
    bodyy.style.display = 'none'
    sideCL.style.display = 'block'
    sideOPN.style.display = 'none'
    hdr.style.display = 'initial'
    headd.style.position = 'relative';
    swpierr.style.display = 'none'
    ftr.style.display = 'none'


}
function sideClose() {
    bodyy.style.display = 'initial'
    sideCL.style.display = 'none'
    sideOPN.style.display = 'block'
    hdr.style.display = 'none'
    headd.style.position = 'fixed';
    swpierr.style.display = 'initial'
    ftr.style.display = 'initial'

}
// C A L C
const minusPrice = document.querySelector('#calc-minus-sign')
const plusPrice = document.querySelector('#calc-plus-sign')
const price = document.querySelector('#price')
const priceMonth = document.querySelector('#priceMonth')
const faiz = document.querySelector('#faizz')
const odenis = document.querySelector('#odenis')
let o = 1
let f = 1
let x = 5000;
let y = 12
price.value = 5000 + ' AZN'
priceMonth.value = 12 + ' ay'
function calcMinus() {
    x -= 100
    price.value = x + ' AZN';
    if (x <= 300) {
        x = 300
        price.value = x + ' AZN'
    }
    let  hesabla = (x + (x * y / 100))/y;
    odenis.innerHTML = hesabla.toFixed(2)
}
function calcPlus() {
    x += 100
    price.value = x + ' AZN';
    if (x >= 40000) {
        x = 40000
        price.value = x + ' AZN'
    }
    let  hesabla = (x + (x * y / 100))/y;
    odenis.innerHTML = hesabla.toFixed(2)
}
function calcMinusMonth() {
    y -= 1
    priceMonth.value = y + ' ay'
    if (y <= 4) {
        y = 3
        priceMonth.value = y + ' ay'
    }
    else if (y <= 12) {
        f = 11 + '%'
        faiz.innerHTML = f
    }
    else if (y >= 13 && y <= 24) {
        f = 13 + '%'
        faiz.innerHTML = f
    }
    else if (y >= 25 && y <= 36) {
        f = 14 + '%'
        faiz.innerHTML = f
    }
    else {
        f = 15 + '%'
        faiz.innerHTML = f
    }
    let  hesabla = (x + (x * y / 100))/y;
    odenis.innerHTML = hesabla.toFixed(2)
}
function calcPlusMonth() {
    y += 1
    priceMonth.value = y + ' ay'
    if (y >= 48) {
        y = 48
        priceMonth.value = y + ' ay'
    }
    else if (y <= 12) {
        f = 11 + '%'
        faiz.innerHTML = f
    }
    else if (y >= 13 && y <= 24) {
        f = 13 + '%'
        faiz.innerHTML = f
    }
    else if (y >= 25 && y <= 36) {
        f = 14 + '%'
        faiz.innerHTML = f
    }
    else {
        f = 15 + '%'
        faiz.innerHTML = f
    }
    let  hesabla = (x + (x * y / 100))/y;
    odenis.innerHTML = hesabla.toFixed(2)
}
function update() {
    x = parseInt(price.value)
    if (x <= 300) {
        x = 300
        price.value = x + ' AZN'
    }
    if (x >= 40000) {
        x = 40000
        price.value = x + ' AZN'
    }
    let  hesabla = (x + (x * y / 100))/y;
    odenis.innerHTML = hesabla.toFixed(2)

    
}
function updateMonth() {
    y = parseInt(priceMonth.value)
    if (y <= 4) {
        y = 3
        priceMonth.value = y + ' ay'
    }
    if (y >= 48) {
        y = 48
        priceMonth.value = y + ' ay'
    }

    else if (y <= 12) {
        f = 11 + '%'
        faiz.innerHTML = f
    }
    else if (y >= 13 && y <= 24) {
        f = 13 + '%'
        faiz.innerHTML = f
    }
    else if (y >= 25 && y <= 36) {
        f = 14 + '%'
        faiz.innerHTML = f
    }
    else {
        f = 15 + '%'
        faiz.innerHTML = f
    }
    let  hesabla = (x + (x * y / 100))/y;
    odenis.innerHTML = hesabla.toFixed(2)
}

o = (x + (x * y / 100))/y;

// E X C H A N G E 
const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const select1 = document.querySelector('#select1')
const select2 = document.querySelector('#select2')

const us = document.querySelector('#option-us')
const eur = document.querySelector('#option-eu')
const gbp = document.querySelector('#option-gbp')
const azn = document.querySelector('#option-az')

const euFirst = document.querySelector('#option-eu-second')
const usFirst = document.querySelector('#option-us-second')
const gbpFirst = document.querySelector('#option-gbp-second')
const azFirst = document.querySelector('#option-az-second')
let n =1
input2.innerHTML = 100
input1.oninput = exchange
select2.onchange = exchange
select1.onchange = exchange
function exchange() {
    input2.innerHTML = ((input1.value * select1.value) / select2.value).toFixed(2);

}

//  D E S K T O P 
const mebleg = document.querySelector('#mebleg') //  M E B L E G   I N P U T
const pstAy = document.querySelector('#pst-ay') //  M E B L E G   R A N G E
const inputAy = document.querySelector('#input-ay') //  A Y   I N P U T 
const pstFaiz = document.querySelector('#pst-faiz') // A Y   R A N G E 
const pul = document.querySelector('#pul2') //  P U L
const faizzzz = document.querySelector('#faiz2') //  F A I Z
let e = mebleg.value;
let i = inputAy.value;
let yd = 12
let em = ''
let ra = ''
let ib = ''
let him = ''

function tap(){ // Mebleg range oninput
    mebleg.value = pstAy.value;
     em = +mebleg.value * yd;
     ib = em / 100;
     ra = +mebleg.value + ib
     him = ra / inputAy.value
    pul.innerHTML = him.toFixed(0)
}
function tapp(){ // ay range oninput
    inputAy.value = pstFaiz.value;
    let  axtar = (e + (e * i / 100))/i;
    pul.innerHTML = axtar.toFixed(2)
    if(inputAy.value <=12){
        yd = 11
    }
    else if(inputAy.value >=13 && inputAy.value <= 23){
        yd = 13
    }
    else if(inputAy.value >=24 && inputAy.value <= 36){
        yd = 14
    }
    else{
        yd = 15
    }
    em = +mebleg.value * yd;
    ib = em / 100;
    ra = +mebleg.value + +ib
    him = ra / inputAy.value
   pul.innerHTML = him.toFixed(0)
     faizzzz.innerHTML = yd  + '%'

   
}
function firsttt(){ // Mebleg input onchange
    pstAy.value = parseInt(mebleg.value)
    let  axtar = (e + (e * i / 100))/i;
    pul.innerHTML = axtar.toFixed(2)   
    mebleg.value = pstAy.value;
     em = +mebleg.value * yd;
     ib = em / 100;
     ra = +mebleg.value + ib
     him = ra / inputAy.value
    pul.innerHTML = him.toFixed(0)
}
function firsttttt(){ // ay input onchange
    pstFaiz.value = parseInt(inputAy.value)
    if(inputAy.value <=12){
        yd = 11
    }
    else if(inputAy.value >=13 && inputAy.value <= 23){
        yd = 13
    }
    else if(inputAy.value >=24 && inputAy.value <= 36){
        yd = 14
    }
    else{
        yd = 15
    }
     faizzzz.innerHTML = yd + '%'
     em = mebleg.value * yd;
     ib = em / 100;
     ra = +mebleg.value + ib
     him = ra / inputAy.value
    pul.innerHTML = him.toFixed(0)
}


//  Ə M A N Ə T
const button = document.querySelector('#button1');
const buttonn = document.querySelector('#button2');
const calcMain = document.querySelector('.calc-main-main'); 
const calcMainMobile = document.querySelector('#calc-main')
const paymentMobile = document.querySelector('#payment')
const buttonMobile = document.querySelector('#sifaris')
const calcbtnMobile = document.querySelector('#calc-btn1')
const calcbtnMobilee = document.querySelector('#cacl-btn2')
const btnp = document.querySelector('#btnp')
const  mnt = document.querySelector('#emanet')
const pth11 = document.querySelector('#path11') 
const pth12 = document.querySelector('#path12') 
const pth13 = document.querySelector('#path13')
const pth21 = document.querySelector('#path21')
const pth22 = document.querySelector('#path22')
const pth23 = document.querySelector('#path23')
const pth24 = document.querySelector('#path24')
const pth25 = document.querySelector('#path25')
const pth26 = document.querySelector('#path26')
const pth27 = document.querySelector('#path27')
const pth28 = document.querySelector('#path28')
const pth29 = document.querySelector('#path29')
const pth30 = document.querySelector('#path30')
const pth31 = document.querySelector('#path31')
const pth32 = document.querySelector('#path32')
const pth33 = document.querySelector('#path33')
const pth34 = document.querySelector('#path34')
// Define the functions
function qaytar(){
    calcMain.classList.remove('none')
    mnt.style.display = 'none'
    button.style.background = '#6f0bbb'
    button.style.color = '#fff'
    buttonn.style.color = '#000'
    buttonn.style.background = '#d9d9d9'
    btnp.style.color = '#fff'
    pth11.style.stroke = 'white'
    pth12.style.stroke = 'white'
    pth13.style.stroke = 'white'
    pth21.style.stroke = 'black'
    pth22.style.stroke = 'black'
    pth23.style.stroke = 'black'
    pth24.style.stroke = 'black'
    pth25.style.stroke = 'black'
    pth26.style.stroke = 'black'
    pth27.style.stroke = 'black'
    pth28.style.stroke = 'black'
    pth29.style.stroke = 'black'
    pth30.style.stroke = 'black'
    pth31.style.stroke = 'black'
    pth32.style.stroke = 'black'
    pth33.style.stroke = 'black'
    pth34.style.stroke = 'black'
}

function deyisdir() {
    calcMain.classList.add('none')
    mnt.style.display = 'initial'
    button.style.background = '#d9d9d9'
    button.style.color = 'black !important'
    buttonn.style.color = '#fff'
    button.style.border = '1px solid #d9d9d9'
    buttonn.style.background = '#6f0bbb'
    btnp.style.color = '#000'
    pth11.style.stroke = 'black'
    pth12.style.stroke = 'black'
    pth13.style.stroke = 'black'
    pth21.style.stroke = 'white'
    pth22.style.stroke = 'white'
    pth23.style.stroke = 'white'
    pth24.style.stroke = 'white'
    pth25.style.stroke = 'white'
    pth26.style.stroke = 'white'
    pth27.style.stroke = 'white'
    pth28.style.stroke = 'white'
    pth29.style.stroke = 'white'
    pth29.style.stroke = 'white'
    pth30.style.stroke = 'white'
    pth31.style.stroke = 'white'
    pth32.style.stroke = 'white'
    pth33.style.stroke = 'white'
    pth34.style.stroke = 'white'
}
function qaytarmobile(){
    calcMainMobile.style.display = 'block'
    buttonMobile.style.display = 'block'
    paymentMobile.style.display = 'block'
    calcbtnMobile.style.backgroundColor = '#6f0bbb'
    calcbtnMobile.style.color = '#fff'
    calcbtnMobile.style.border = '1px solid #6f0bbb'
    calcbtnMobilee.style.backgroundColor = '#f0ecec'
    calcbtnMobilee.style.color = '#000'
    calcbtnMobilee.style.border = 'none'
    mnt.style.display = 'none'

}
function deyisdirmobile() {
    calcMainMobile.style.display = 'none'
    buttonMobile.style.display = 'none'
    paymentMobile.style.display = 'none'
    calcbtnMobile.style.backgroundColor = '#f0ecec'
    calcbtnMobile.style.color = '#000'
    calcbtnMobile.style.border = 'none'
    calcbtnMobilee.style.backgroundColor = '#6f0bbb'
    calcbtnMobilee.style.color = '#fff'
    calcbtnMobilee.style.border = '1px solid #6f0bbb'
    mnt.style.display = 'initial'
}

// Ə M A N Ə T   C A L C 
const emanetFaiz = document.querySelector('#emanet-faiz')
const emanetMebleg = document.querySelector('#emanet-mebleg')
const emanet = document.querySelector('#emanet1')
const emanett = document.querySelector('#emanet2')
const emanettt = document.querySelector('#emanet3')
const  emanetInput = document.querySelector('#emanet-input')
let qa = 0

function zahid(){
    if(emanet.value == 'USD'){
        qa = 0.1
        // emanetMebleg.innerHTML = emanetInput.value * 0.001
    }
    else if(emanett.value == 12 && emanettt.value == 'müddətin sonunda'){
        qa = 5.5
        // emanetMebleg.innerHTML = emanetInput.value * 55 / 1000
    }
    else if(emanett.value == 24 && emanettt.value == 'müddətin sonunda'){
        qa = 6.5
        // emanetMebleg.innerHTML = emanetInput.value * 0.065
    }
    else if(emanett.value == 36 && emanettt.value == 'müddətin sonunda'){
        qa = 9
        // emanetMebleg.innerHTML = emanetInput.value * 0.09
    }
    else if(emanett.value == 12 && emanettt.value == 'aylıq ödəniş'){
        qa = 5
        // emanetMebleg.innerHTML = emanetInput.value * 0.05
    }
    else if(emanett.value == 24 && emanettt.value == 'aylıq ödəniş'){
        qa = 6
        // emanetMebleg.innerHTML = emanetInput.value * 0.06
    }
    else if(emanett.value == 36 && emanettt.value == 'aylıq ödəniş'){
        qa = 8
        // emanetMebleg.innerHTML = emanetInput.value * 0.08
    }
    emilzloy()
    // esmer()
}
let tr = 1
let tr1 = 1
function esmer(){
    tr = (emanetInput.value * qa) / 100
    tr1 = tr / parseInt(emanett.value)
    emanetMebleg.innerHTML = tr1.toFixed(2)
}
// esmer()
function emilzloy(){
    emanetFaiz.innerHTML = qa + ' % -'
}
emilzloy()


// R E N G   D E Y I  S M E 




