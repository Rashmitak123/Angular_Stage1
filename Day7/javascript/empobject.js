const employee={
    empid: 278574,
    name:'Amit',
    department:{
        id:46,
        name:'FSE',
        mgrid:400001
      },
    salary:30000,
    dateOfJoining: new Date("2003-01-23"),
    noOfServiceYears: function(){
        return 2022-this.dateOfJoining.getFullYear();
    }
    
  }

  console.log(employee);

  const year=employee.noOfServiceYears();
  console.log(year);
  
  const emps = [
     { name:'joy',id:23,salary:16000},
     {name:'mike',id:22, salary: 20000},
     {name:'hema',id:23, salary:43900},
     {name:'rishi',id:24, salary:18000}
  ];
  
  for(let i=0;i<emps.length;i++){
  
      console.log(`employee details are as : ${emps[i].name} ${emps[i].id} ${emps[i].salary}`);
  }

