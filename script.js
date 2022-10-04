var temp_min;
var minuto = 24;

var temp_seg;
var segundos = 60;

var flag_stop = false;

const decSeg = () => {
    segundos = segundos - 1;
    document.querySelector('#seconds').innerText = segundos;
    if (segundos == 0) {
        segundos = 60
        minuto = minuto - 1;
        document.querySelector('#minutes').innerText = minuto;
    } if (minuto == 0 && segundos == 0) {
        stopp()
    }
}

function start() {
    clear()
    if (flag_stop == false) {
        minuto = 24;
        segundos = 59;
    } else {
        flag_stop = false;
    }

    document.querySelector('#minutes').innerText = minuto;
    document.querySelector('#seconds').innerText = segundos;

    //callback
    temp_seg = setInterval(decSeg, 1000)
}

function clear() {
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

