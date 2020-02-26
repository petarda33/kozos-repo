const generate2d = (n, m) => {
  let arr = new Array(n);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

const print2d = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
     process.stdout.write(arr[i][j] + ' ');
    }
    console.log();
  }
};

const myArray = generate2d(21, 21);
console.log(myArray);
print2d(myArray);