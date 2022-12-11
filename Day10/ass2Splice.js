function array(arr, oldIndex, newIndex){
    if(newIndex>=arr.length){
        var k=newIndex-arr.length+1;
        while(k--){
            arr.push(undefined);
        }
    }
    arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
    return arr;
};

console.log(array([10, 20, 30, 40, 50],0,2));
console.log(array([10, 20, 30, 40, 50],-1,-2));