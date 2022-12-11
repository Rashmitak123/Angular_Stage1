function moreThanOnce(str) {
    var arr = str.split("");
    var res = [];
  
    for (var i = 0; i < arr.length; i++) {
      if (str.indexOf(arr[i]) === str.lastIndexOf(arr[i]))
        res.push(arr[i]);
      }
  
    return res.join("");
  }
  console.log(moreThanOnce("rashmita"));