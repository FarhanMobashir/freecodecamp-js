function binaryAgent(str) {
  let newarr = [];
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i], 2).toString(10);
  }

  for (let j = 0; j < arr.length; j++) {
    newarr.push(String.fromCharCode(arr[j]));
  }
  return newarr.join("");
}

console.log(binaryAgent('00110001 00000000 0000000000110001 00000001 0000000100110011 00000001 0000001001010001 00001011 0000001000100010 00000010 0000100001000011 00000001 0000000001000001 00000001 0000000100010000 00000010 0000000001100010 00000000 00000000'))