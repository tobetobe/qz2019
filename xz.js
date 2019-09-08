var arr = [7, 8, 5, 6, 9, 10, 2, 4];

function xz_sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }

  return arr;
}

console.log(xz_sort(arr));
