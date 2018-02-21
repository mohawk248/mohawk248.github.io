var start = 0;
var t;
var ms = 0;
var s = 01;
var m = 0;
function timeReset() {
  ms = 00;
  s = 00;
  m = 00;
  document.getElementById('milsecond').innerHTML = ms;
  document.getElementById('second').innerHTML = s;
  document.getElementById('minute').innerHTML = m;
  if(start == 1) {
    start = 0;
    clearInterval(t);
  }
}
function timeStart() {
  if(start == 0) {
    start = 1;
    t = setInterval(secondFunction,1);
  }
}
function timeStop() {
  if(start == 1) {
    start = 0;
    clearInterval(t);
  }
}
function secondFunction() {
  document.getElementById('milsecond').innerHTML = ms++;
  if (ms == 100){
    ms = 0;
    s = s++;
    document.getElementById('second').innerHTML = s++;
  }
  if (s == 60){
    s = 0;
    m = m++;
    document.getElementById('minute').innerHTML = m++;                      
  }
}
