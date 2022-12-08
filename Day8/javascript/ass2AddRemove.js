
let div=document.getElementById('div');
let add=document.getElementById('add');
let remove=document.getElementById('remove');

add.addEventListener('click',()=>{
    div.classList.add('cls');
})

remove.addEventListener('click',()=>{
    div.classList.remove('cls');
})

let div2=document.getElementById('div2');
let toggle=document.getElementById('toggle');
toggle.addEventListener('click',()=>{
    div2.classList.toggle('cls2');
})