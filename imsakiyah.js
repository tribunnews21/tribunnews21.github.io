let a = "04:01:00";
let date1 = new Date();
date1.setHours(a.split(":")[0]);
date1.setMinutes(a.split(":")[1]);
date1.setSeconds(a.split(":")[2]);
let show1 = date1 - new Date();
setTimeout(function() {
    $('.signal1').addClass('show');
}, show1);

let b = "04:25:00";
let date2 = new Date();
date2.setHours(b.split(":")[0]);
date2.setMinutes(b.split(":")[1]);
date2.setSeconds(b.split(":")[2]);
let show2 = date2 - new Date();
setTimeout(function() {
    $('.signal2').addClass('show');
    $('.signal1.show').removeClass('show');

}, show2);

let c = "11:14:00";
let date3 = new Date();
date3.setHours(c.split(":")[0]);
date3.setMinutes(c.split(":")[1]);
date3.setSeconds(c.split(":")[2]);
let show3 = date3 - new Date();
setTimeout(function() {
    $('.signal3').addClass('show');
    $('.signal2.show').removeClass('show');

}, show3);

let d = "14:40:00";
let date4 = new Date();
date4.setHours(d.split(":")[0]);
date4.setMinutes(d.split(":")[1]);
date4.setSeconds(d.split(":")[2]);
let show4 = date4 - new Date();
setTimeout(function() {
    $('.signal4').addClass('show');
    $('.signal3.show').removeClass('show');

}, show4);

let e = "17:16:00";
let date5 = new Date();
date5.setHours(e.split(":")[0]);
date5.setMinutes(e.split(":")[1]);
date5.setSeconds(e.split(":")[2]);
let show5 = date5 - new Date();
setTimeout(function() {
    $('.signal5').addClass('show');
    $('.signal4.show').removeClass('show');
}, show5);

let f = "18:40:00";
let date6 = new Date();
date6.setHours(f.split(":")[0]);
date6.setMinutes(f.split(":")[1]);
date6.setSeconds(f.split(":")[2]);
let show6 = date6 - new Date();
setTimeout(function() {
    $('.signal6').addClass('show');
    $('.signal5.show').removeClass('show');
}, show6);

let g = "00:00:00";
let date7 = new Date();
date7.setHours(g.split(":")[0]);
date7.setMinutes(g.split(":")[1]);
date7.setSeconds(g.split(":")[2]);
let show7 = date7 - new Date();
setTimeout(function() {
    $('.signal7').addClass('show');
    $('.signal6.show').removeClass('show');
}, show7);

// let h = "04:27:59";
// let date8 = new Date();
// date8.setHours(h.split(":")[0]);
// date8.setMinutes(h.split(":")[1]);
// date8.setSeconds(h.split(":")[2]);
// let show8 = date8 - new Date();
// setTimeout(function() {
//     $('.signal7.show').removeClass('show');
// }, show8);

(() => {
    var imsak = "04:28";
    document.getElementById("imsak").innerHTML = imsak;
})();
(() => {
    var subuh = "04:38";
    document.getElementById("subuh").innerHTML = subuh;
})();
(() => {
    var dzuhur = "11:57";
    document.getElementById("dzuhur").innerHTML = dzuhur;
})();
(() => {
    var ashar = "15:14";
    document.getElementById("ashar").innerHTML = ashar;
})();

(() => {
    var maghrib = "17:56";
    document.getElementById("maghrib").innerHTML = maghrib;
})();
(() => {
    var isya = "19:05";
    document.getElementById("isya").innerHTML = isya;
})();
(() => {
    var isya1 = "19:05";
    document.getElementById("isya1").innerHTML = isya1;
})();
(() => {
    var isya2 = "19:05";
    document.getElementById("isya2").innerHTML = isya2;
})();
