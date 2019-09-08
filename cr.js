var arr = [7, 8, 5, 6, 9, 10, 2, 4];

function cr_sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let target = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[target] < arr[j]) {
        [arr[j], arr[target]] = [arr[target], arr[j]];
        target = j;
      } else {
        break;
      }
    }
  }
  return arr;
}

console.log(cr_sort(arr));
