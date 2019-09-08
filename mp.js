var arr = [7, 8, 5, 6, 9, 10, 2, 4];
//small --> big
function mp_sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }
}
mp_sort(arr);
console.log(arr);
