var arr = [7, 8, 5, 6, 9, 10, 2, 4];
//small --> big
function ks_sort(arr, start, end) {
  if (end - start < 2) {
    return;
  }

  let l = start,
    r = end,
    target = arr[start];

  while (l < r) {
    while (l < r && arr[r] > target) {
      r--;
    }

    arr[l] = arr[r];

    while (l < r && arr[l] < target) {
      l++;
    }

    arr[r] = arr[l];
  }

  arr[l] = target;

  ks_sort(arr, start, l - 1);

  ks_sort(arr, l + 1, end);

  return arr;
}
ks_sort(arr, 0, arr.length - 1);
console.log(arr);
