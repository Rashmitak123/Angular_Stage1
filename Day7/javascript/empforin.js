const employee={
    empid: 278574,
    name:'Amit',
    department:{
        dept_id:46,
        name:'FSE',
        mgrid:400001
      },
      project:{
        project_id:409,
        title:'abc',
        startdate: new Date("2000-06-13"),
        duration: "5 months"
      },
    salary:30000,
  }
  
  
  for(i in employee){
    if(i==="project" || i==="department"){
        for(j in employee[i]){
            console.log(`${j}: ${employee[i][j]}`);
        }
    }else{
        console.log(`${i}: ${employee[i]}`);
    }
  }