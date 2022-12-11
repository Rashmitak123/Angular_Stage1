

fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(res=>{
    res.map(user=>console.log(`${user.name}`));
})
.catch(
    function(err){
        console.log(err);
    }
)