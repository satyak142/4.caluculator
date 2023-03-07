document.querySelector('#evaluate').addEventListener('click',(e)=>{
    e.preventDefault();
    evaluate();
});

const input = document.querySelector('input');


function evaluate(e){

    const expression = input.value;

    // How  input validation ?

    if(expression === ''){
        alert('No Input')
    }
    else{
        input.value = eval(expression);
    }
}

document.querySelector('#reset').addEventListener('click',()=>{
    input.value = '';
})

document.querySelector('#del').addEventListener('click',del)

function del(){
    const expression = input.value;
    input.value = expression.slice(0,expression.length-1);
}

document.querySelector('#p-n').addEventListener('click',()=>{
    const expression = input.value;
    if (!isNaN(expression)){
        input.value = +expression * -1;
    }
})

const cal = document.querySelectorAll('.cal');
cal.forEach((ele)=> ele.addEventListener('click',(e)=>{
    const expression = input.value;
    input.value = expression + e.target.textContent ;
}))

const allowedKeys = ['0','1','2','3','4','5','6','7','8','9','/','*','-','+','%']

window.addEventListener('keyup',(e)=>{
    if(allowedKeys.includes(e.key)){
        const expression = input.value;
        input.value = expression + e.key ;
    }
    else if(e.key === 'Delete' || e.key === 'Backspace'){
        del();
    }
    else if( e.key === 'Enter' ){
        evaluate();
    }
})

