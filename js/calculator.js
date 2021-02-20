// declaration des variable et acces aux element HTML
const  history_value=document.querySelector('.history_value');
const output_value=document.querySelector('.output_value');
const operator=document.querySelectorAll('.operator');
const number=document.querySelectorAll('.number');


operator.forEach(el=>{
    el.addEventListener('click',()=>
    {
        output_value.textContent+=el.textContent;
    })
});

number.forEach(el=>{
    el.addEventListener('click',()=>
    {
        output_value.textContent+=el.textContent;
    })
});
