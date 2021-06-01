// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
    let test = [...arr2]
    arr1.forEach(num => {
        test.splice(n, 0, num)
        n = n + 1
    })
    return test
}
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
  console.log(frankenSplice([1, 2], ["a", "b"], 1));
  console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
  console.log(frankenSplice([1, 2, 3], [0, 4, 5, 6], 1));
  console.log(frankenSplice([11, 12, 13], [10, 14, 15, 16], 1));
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 0));
  console.log(frankenSplice(["head", "shoulders", "knees", "&", "toes"], ["knees", "&", "toes"], 0));