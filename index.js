'use strict';
const main = document.querySelector('main');
const cursor = document.querySelector('.cursor');
console.log(main);
main.addEventListener('mousemove', function(e){
    console.log(e);
    // cursor.style.top = `${e.pageY>25 ? e.pageY - 30: e.pageY}px`;
    cursor.style.top = `${ e.pageY}px`;
    cursor.style.left = `${e.pageX}px`;
    // cursor.style.left = `${e.pageX>25 ? e.pageX - 35 : e.pageX}px`;
})