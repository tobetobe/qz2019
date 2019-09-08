var readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on("line", function(line) {
  const [l, r] = line.split(" ");
  let storage = [],
    flag = 0;
  //   console.log(l, r);
  for (let a = l; a <= r; a++) {
    for (let b = a + 1; b <= r; b++) {
      for (let c = a + 2; c < a + b && c <= r; c++) {
        if (
          a + c > b &&
          c + b > a &&
          Math.abs(a - b) < c &&
          Math.abs(a - c) < b &&
          Math.abs(b - c) < a
        ) {
          if (flag !== 0) {
            break;
          }
          storage.push([a, b, c]);
          flag = 1;
          break;
        }
      }
      if (flag !== 0) {
        break;
      }
    }
    if (flag !== 0) {
      break;
    }
  }
  if (storage.length === 0) {
    console.log(`NO`);
  } else {
    console.log(`YES`);
    console.log(storage[0][0], storage[0][1], storage[0][2]);
  }
});
