let btn = document.getElementById('btn')
btn.addEventListener('click',function run(){
    let change1 = document.getElementById('card1');
    let change2 = document.getElementById('card2');

    change1.style.display ='none'
    change2.style.display ='flex'
    
})

let rate1 = document.querySelector('#one');
let rate2 = document.querySelector('#two')
let rate3 = document.querySelector('#three')
let rate4 = document.querySelector('#four')
let rate5 = document.querySelector('#five')


one.addEventListener('click', function hover1(){
   rate1.style.background = 'hsl(25, 97%, 53%)'
   rate2.style.background = 'hsl(213, 20%, 22%)'
   rate3.style.background = 'hsl(213, 20%, 22%)'
   rate4.style.background = 'hsl(213, 20%, 22%)'
   rate5.style.background = 'hsl(213, 20%, 22%)'
   document.getElementById("num").innerText = '1';

})
two.addEventListener('click', function hover1(){
   rate1.style.background = 'hsl(213, 20%, 22%)'
   rate2.style.background = 'hsl(25, 97%, 53%)'
   rate3.style.background = 'hsl(213, 20%, 22%)'
   rate4.style.background = 'hsl(213, 20%, 22%)'
   rate5.style.background = 'hsl(213, 20%, 22%)'
   document.getElementById("num").innerText = '2';
})
three.addEventListener('click', function hover1(){
   rate1.style.background = 'hsl(213, 20%, 22%)'
   rate2.style.background = 'hsl(213, 20%, 22%)'
   rate3.style.background = 'hsl(25, 97%, 53%)'
   rate4.style.background = 'hsl(213, 20%, 22%)'
   rate5.style.background = 'hsl(213, 20%, 22%)'
   document.getElementById("num").innerText = '3';
})
four.addEventListener('click', function hover1(){
   rate1.style.background = 'hsl(213, 20%, 22%)'
   rate2.style.background = 'hsl(213, 20%, 22%)'
   rate3.style.background = 'hsl(213, 20%, 22%)'
   rate4.style.background = 'hsl(25, 97%, 53%)'
   rate5.style.background = 'hsl(213, 20%, 22%)'
   document.getElementById("num").innerText = '4';
})
five.addEventListener('click', function hover1(){
   rate1.style.background = 'hsl(213, 20%, 22%)'
   rate2.style.background = 'hsl(213, 20%, 22%)'
   rate3.style.background = 'hsl(213, 20%, 22%)'
   rate4.style.background = 'hsl(213, 20%, 22%)'
   rate5.style.background = 'hsl(25, 97%, 53%)'
   document.getElementById("num").innerText = '5';
})
