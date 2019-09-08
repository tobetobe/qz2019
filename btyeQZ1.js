var readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let N;
let cur_line = 1;
let clocks = [];
let A, B, X;

rl.on("line", function(line) {
  if (cur_line == 1) {
    N = parseInt(line.trim());
    cur_line++;
  } else if (clocks.length <= N - 1) {
    let aclock = line.trim().split(" ");
    clocks.push(aclock);
    cur_line++;
  } else if (cur_line === N + 2) {
    X = line.trim();
    cur_line++;
  } else if (cur_line === N + 3) {
    [A, B] = line.trim().split(" ");
    cur_line++;
    let max = [];
    for (let i = 0; i < clocks.length; i++) {
      //   console.log(clocks[i]);
      clocks[i] = [parseInt(clocks[i][0]), parseInt(clocks[i][1])];
      ori = [].concat(clocks[i]);
      clocks[i][1] += X;
      if (clocks[i][1] >= 60) {
        clocks[i][0] += parseInt(clocks[i][1] / 60);
        clocks[i][1] = clocks[i][1] % 60;
        // console.log(clocks[i]);
      }
      // 选一个最晚起的出来
      if (clocks[i][0] <= A && clocks[i][1] <= B) {
        if (max.length == 0 || (ori[0] > max[0] && ori[1] > max[1])) {
          max = [].concat(ori);
        }
      }
    }
    console.log(`${max[0]} ${max[1]}`);
  }
});
