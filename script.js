var temp_min;
var minuto = 24;

var temp_seg;
var segundos = 60;

var flag_stop = false;

const decMin = () => {
    minuto = minuto - 1;
    document.querySelector('#minutes').innerText = minuto;
}

const decSeg = () => {
    segundos = segundos - 1;
    document.querySelector('#seconds').innerText = segundos;
    if (segundos == 0) {
        segundos = 60
    }
}

function start() {
    clear()
    if (flag_stop == false) {
        minuto = 24;
        segundos = 59;
    }   else{
        flag_stop = false;
    }


    document.querySelector('#minutes').innerText = minuto;
    document.querySelector('#seconds').innerText = segundos;

    //callback
    temp_min = setInterval(decMin, 60000) //(função gatilho, tempo(1x10^-3 = 0,001 s -> 1s = 1000ms))
    temp_seg = setInterval(decSeg, 1000)
}

function clear(){
    clearInterval(temp_min)
    clearInterval(temp_seg)
}

function stopp() {
    clear();
    flag_stop = true;
}

function template() {
    minuto = 24;
    segundos = 59;
    clearInterval(temp_min)
    clearInterval(temp_seg)
    document.querySelector('#minutes').innerText = '25';
    document.querySelector('#seconds').innerText = '00';
    clear();
}

