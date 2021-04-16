let a = "04:28:00";
let date1 = new Date();
date1.setHours(a.split(":")[0]);
date1.setMinutes(a.split(":")[1]);
date1.setSeconds(a.split(":")[2]);
let r = date1 - new Date();
setTimeout(function() {
    $('.signal1').addClass('show');
}, r);

let b = "04:38:00";
let date2 = new Date();
date2.setHours(b.split(":")[0]);
date2.setMinutes(b.split(":")[1]);
date2.setSeconds(b.split(":")[2]);
let s = date2 - new Date();
setTimeout(function() {
    $('.signal2').addClass('show');
    $('.signal1.show').removeClass('show');

}, s);

let c = "04:58:00";
let date3 = new Date();
date3.setHours(c.split(":")[0]);
date3.setMinutes(c.split(":")[1]);
date3.setSeconds(c.split(":")[2]);
let t = date3 - new Date();
setTimeout(function() {
    $('.signal3').addClass('show');
    $('.signal2.show').removeClass('show');

}, t);

let d = "11:56:00";
let date4 = new Date();
date4.setHours(d.split(":")[0]);
date4.setMinutes(d.split(":")[1]);
date4.setSeconds(d.split(":")[2]);
let u = date4 - new Date();
setTimeout(function() {
    $('.signal4').addClass('show');
    $('.signal3.show').removeClass('show');

}, u);

let e = "12:30:00";
let date5 = new Date();
date5.setHours(e.split(":")[0]);
date5.setMinutes(e.split(":")[1]);
date5.setSeconds(e.split(":")[2]);
let v = date5 - new Date();
setTimeout(function() {
    $('.signal5').addClass('show');
    $('.signal4.show').removeClass('show');
}, v);

let f = "15:14:00";
let date6 = new Date();
date6.setHours(f.split(":")[0]);
date6.setMinutes(f.split(":")[1]);
date6.setSeconds(f.split(":")[2]);
let w = date6 - new Date();
setTimeout(function() {
    $('.signal6').addClass('show');
    $('.signal5.show').removeClass('show');
}, w);

let g = "15:30:00";
let date7 = new Date();
date7.setHours(g.split(":")[0]);
date7.setMinutes(g.split(":")[1]);
date7.setSeconds(g.split(":")[2]);
let x = date7 - new Date();
setTimeout(function() {
    $('.signal7').addClass('show');
    $('.signal6.show').removeClass('show');
}, x);

let h = "17:55:00";
let date8 = new Date();
date8.setHours(h.split(":")[0]);
date8.setMinutes(h.split(":")[1]);
date8.setSeconds(h.split(":")[2]);
let y = date8 - new Date();
setTimeout(function() {
    $('.signal8').addClass('show');
    $('.signal7.show').removeClass('show');
}, y);

let i = "18:30:00";
let date9 = new Date();
date9.setHours(i.split(":")[0]);
date9.setMinutes(i.split(":")[1]);
date9.setSeconds(i.split(":")[2]);
let z = date9 - new Date();
setTimeout(function() {
    $('.signal9').addClass('show');
    $('.signal8.show').removeClass('show');
}, z);

let j = "19:04:00";
let date10 = new Date();
date10.setHours(j.split(":")[0]);
date10.setMinutes(j.split(":")[1]);
date10.setSeconds(j.split(":")[2]);
let o = date10 - new Date();
setTimeout(function() {
    $('.signal10').addClass('show');
    $('.signal9.show').removeClass('show');
}, o);

let k = "19:40:0";
let date11 = new Date();
date11.setHours(k.split(":")[0]);
date11.setMinutes(k.split(":")[1]);
date11.setSeconds(k.split(":")[2]);
let p = date11 - new Date();
setTimeout(function() {
    $('.signal11').addClass('show');
    $('.signal10.show').removeClass('show');
}, p);

let l = "00:00:00";
let date12 = new Date();
date12.setHours(l.split(":")[0]);
date12.setMinutes(l.split(":")[1]);
date12.setSeconds(l.split(":")[2]);
let q = date12 - new Date();
setTimeout(function() {
    $('.signal11').addClass('show');
    $('.signal10.show').removeClass('show');
}, q);

let m = "04:27:59";
let date13 = new Date();
date13.setHours(m.split(":")[0]);
date13.setMinutes(m.split(":")[1]);
date13.setSeconds(m.split(":")[2]);
let qq = date13 - new Date();
setTimeout(function() {
    $('.signal11.show').removeClass('show');
}, qq);
