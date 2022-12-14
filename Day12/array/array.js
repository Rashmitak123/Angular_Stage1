class Employee{
    constructor(id,name,salary){
        this.id=id;
       this.name=name;
       this.salary=salary;
    }
}

let chintu=new Employee(1,"chintu",63000);
let pintu=new Employee(2,"pintu",27000);
let bunty=new Employee(3,"bunty",30000);
let bably=new Employee(4,"bably",25000);


let employees=[chintu,pintu,bunty,bably];

let sortedArr=employees.sort(
    (a,b)=>{
        if(a.name===b.name){
            return a.salary < b.salary?-1:1;
        }else{
            return a.name>b.name?1:-1;
        }
    }
);
console.log(sortedArr);


let button=document.getElementById("submit");
button.onclick=function(e){
    e.preventDefault();
    let name=document.getElementById("name").value;
    let salary=document.getElementById("salary").value;

    let  a=new Employee(employees.length+1,name,salary);
    employees.push(a);


    console.log(employees);
}
let sort=document.getElementById("sort");
sort.onclick=function(e){
    e.preventDefault();
   
    let table=document.createElement("table");
    

    let tr=document.createElement('tr');
        let id=document.createElement("td");
        let name=document.createElement("td");
        let salary=document.createElement("td");
        id.innerHTML="id";
        name.innerHTML="name";
        salary.innerHTML="salary";


        tr.appendChild(name);
        tr.appendChild(id);
        tr.appendChild(salary);
        table.appendChild(tr);

    for(let i=0;i<employees.length;i++){
        let tr=document.createElement('tr');
        let id=document.createElement("td");
        let name=document.createElement("td");
        let salary=document.createElement("td");
        id.innerHTML=employees[i].id;
        name.innerHTML=employees[i].name;
        salary.innerHTML=employees[i].salary;


        tr.appendChild(name);
        tr.appendChild(id);
        tr.appendChild(salary);
        table.appendChild(tr);
       
    }
    table.style.border="1px solid black";
    document.body.appendChild(table);
}