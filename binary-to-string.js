function binaryAgent(str) {
  let newarr = [];
  let arr = str.split(" ");
  for(let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i],2).toString(10);
    }

    for(let j= 0; j < arr.length; j++) {
      newarr.push(String.fromCharCode(arr[j]));
    }
  return newarr.join("");
}