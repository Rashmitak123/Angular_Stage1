

const task={
    addATask: function(){
        console.log('adding a task');
    },

    editATask: function(id){
        console.log(`edit a task ${id}`);
    }
}

task.deleteTask=function(){
    console.log('deleting a task');
}

task.addATask();
task.editATask(121);
task.deleteTask();