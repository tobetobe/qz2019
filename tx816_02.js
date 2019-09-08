#!/usr/bin/env node
const buff = [];

function isPrivate(ip) {
  // TODO

  return false;
}

process.stdin.on("data", data => {
  process.stdout.write(data);
  buff.push(data);
  console.log(buff);
});

process.stdin.once("end", () => {
  const input = Buffer.concat(buff).toString("UTF-8");
  process.stdout.write(input);
  const res = isPrivate(input);

  console.log(res);
});
