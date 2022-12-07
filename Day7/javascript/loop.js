

const cars=["wfe", "tkr", "jhe"];

for(let i=0;i<cars.length;i++){
    console.log(cars[i]);
}

cars.forEach((c,index)=>{console.log(c,index);});

cars.forEach(function(car, index, arr){
    console.log(car, index);
    console.log(arr);
})

const emps = [
    { name:'joy',id:23,salary:16000},
    {name:'mike',id:22, salary: 20000},
    {name:'hema',id:23, salary:43900},
    {name:'rishi',id:24, salary:18000}
 ];

 emps.map(function(em){
    console.log(em.id);
 })

 emps.map((emp1)=>{
    console.log(`${emp1.name} annual sal ${emp1.salary*12}`);
 })