var readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
let cur_line = 0,
  n,
  target,
  method = 0,
  arr = [];

let cmp = a => {
  for (let i = 0; i < arr.length; i++) {
    if (a[0] === arr[i][0] && a[0] === [i][1]) {
      return false;
    }
  }
  return true; //same loc
};

let F = (x, y) => {
  console.log(x, y);
  let loc = [x, y];
  if (x > target[0] || y > target[1]) {
    return method;
  }
  if (x === target[0] && y === target[1]) {
    method++;
    console.log(`method num is ${method}`);
    return;
  }
  if (!cmp(loc)) {
    console.log(`boss!`);
    return;
  } else {
    // if (x + 1 !== target[0] && y !== target[1])
    F(x + 1, y);
    console.log(`entering 1`);
    // if (x !== target[0] && y + 1 !== target[1])
    F(x, y + 1);
    console.log(`entering 2`);
  }
};

rl.on("line", function(line) {
  if (n == undefined) {
    const [x, y, z] = line.split(" ");
    n = z;
    target = [x, y];
    console.log(arr);
    cur_line++;
    console.log(x, y, n);
  } else {
    if (cur_line <= n) {
      const [x, y] = line.split(" ");
      arr.push([x, y]);
      console.log(arr);
      cur_line++;
    } else {
      console.log(target);
      F(0, 0);
    }
  }
});
