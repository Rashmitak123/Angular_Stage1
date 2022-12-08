

let p1 = document.getElementById("p1");
p1.style.backgroundColor="black";
p1.style.color="red";

//document.body.style.backgroundColor="pink";
let p2e=document.getElementsByClassName('p2');
for(i=0;i<=p2e.length;i++){
    p2e[i].style.backgroundColor="violet";
}

 let p3=document.getElementById("p3");
let nextSibling=p3.nextElementSibling;
while(nextSibling){
    console.log(nextSibling);
    nextSibling=nextSibling.nextElementSibling
} 

let div1=document.getElementById("div1");
let fc=div1.firstChild.nodeName;
console.log(fc);



let div = document.createElement('div');
div.id='maindiv';
div.className='div1';
div.innerHtTML='<p>gm</p>';
document.body.appendChild(div);

//text node
let str=document.createTextNode('div with.........');
div.appendChild(str);
document.body.appendChild(div);

