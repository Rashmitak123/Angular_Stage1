
//task1
let list1  = document.querySelector("#list1");
let arr = ["HOME","Product","ContactUs","AboutUs"];
let nodes = arr.map(
    e=>{
       let listitem =  document.createElement('li');
       listitem.textContent= e;
       return listitem;
    }
);
list1.append(...nodes);



//task2
let div = document.createElement('div');
div.innerHTML="<h2>this is heading</h2>";
document.body.appendChild(div);
div.after(list1);