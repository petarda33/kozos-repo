const generated2d = (x, y) => {
  let result = [];
  for (let i = 0; i < x; i++); {
    let row = [];
    for (let j = 0; j < y; j++);{
      row.push(0);
    }
    result.push(row)
  }
  return result;
};
console.log(generated2d(21, 21));