function swap(a, b) {
  return [b, a];
}
function sort_판단(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
function sort(arr, callback) {
  let result = [...arr]; // bubble sort     for( let i = 0; i < result.length - 1; i++ ) {         for( let j = i + 1; j < result.length; j++ ) {             // 양수일경우 바꿔준다.             if( callback( result[i], result[j] ) > 0 ) {                 [ result[i], result[j] ] = swap( result[i], result[j] );             }         }     }      return result; }  // 버블정렬 선택정렬 힙정렬 quick sort  let arr = [1,3,2,4]; console.log( sort( arr, (a, b) => a - b ) ); // [1,2,3,4] console.log( sort( arr, (a, b) => b - a ) ); // [4,3,2,1] console.log( arr.sort((a, b) => b - a) );
  function swap(a, b) {
    return [b, a];
  }

  function sort_판단(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }

  function sort(arr, callback) {
    let result = [...arr];

    // bubble sort
    for (let i = 0; i < result.length - 1; i++) {
      for (let j = i + 1; j < result.length; j++) {
        // 양수일경우 바꿔준다.
        if (callback(result[i], result[j]) > 0) {
          [result[i], result[j]] = swap(result[i], result[j]);
        }
      }
    }

    return result;
  }
}
// 버블정렬 선택정렬 힙정렬 quick sort

let arr = [1, 3, 2, 4];
console.log(sort(arr, (a, b) => a - b)); // [1,2,3,4]
console.log(sort(arr, (a, b) => b - a)); // [4,3,2,1]
console.log(arr.sort((a, b) => b - a));
