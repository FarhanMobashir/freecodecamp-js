function ceaserCipher(str) {

  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charCodeAt();

  }

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > 64 && arr[j] < 78) {
      arr[j] = String.fromCharCode(arr[j] + 13);
    }
    if (arr[j] > 64 && arr[j] <= 90 && arr[j] > 78) {
      arr[j] = String.fromCharCode(arr[j] - 13);
    }
    else if (arr[j] == 78) {
      arr[j] = String.fromCharCode(arr[j] - 13);
    }

    else if (arr[j] > 0 && arr[j] < 64) {
      arr[j] = String.fromCharCode(arr[j]);
    }

  }
  return arr.join("");

}

console.log(rot13("SERR CVMMN!"));
