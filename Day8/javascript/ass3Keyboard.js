

let name1=document.getElementById("name");
name1.addEventListener("blur",func1,true);
function func1(){
    console.log(name1.value);
}