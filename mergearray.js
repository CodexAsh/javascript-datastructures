// Merging Two Arrays
//Not Best Solution as this is O(a*b) => O(n^2).. BAD BAD. But Working!
// Only Pass Sorted Arrays in paramters

let mergedarray = [];

function mergeSortedArrays(arr1, arr2) {
  let length = arr1.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] < arr2[j]) {
        mergedarray.push(arr1[i]);
        break;
      } else if (arr1[i] === arr2[j]) {
        mergedarray.push(arr1[i]);
        mergedarray.push(arr2[j]);
        arr2.splice(j, 1);
        break;
      } else if (arr1[i] > arr2[j]) {
        mergedarray.push(arr2[j]);
        arr2.splice(j, 1);
        i = i - 1;
        break;
      }
    }
  }
  return mergedarray.concat(arr2);
}
console.log(mergeSortedArrays([0,0,0,1,2,3], [2,5,6]));
