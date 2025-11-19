// ========================================================================
// UNIT-1 PART-B — ARRAY CODESHEET
// Data Structures using JavaScript
// All code with clear explanations
// ========================================================================



// ========================================================================
// 1. ARRAY TRAVERSAL  — O(n)
// ========================================================================

// Basic loop
function traverse(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Index ${i} = ${arr[i]}`);
  }
}

traverse([10,20,30]);



// ========================================================================
// 2. LINEAR SEARCH  — O(n)
// ========================================================================

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;       // element found
  }
  return -1;                                // not found
}

console.log(linearSearch([10,20,30], 20));   // 1



// ========================================================================
// 3. INSERTION IN ARRAY (SIMULATED) — O(n)
// ========================================================================
// JS arrays are dynamic, but for DSA we simulate fixed-size C-like array.

function insertAt(arr, pos, value) {
  // Shift elements to the right
  for (let i = arr.length; i > pos; i--) {
    arr[i] = arr[i - 1];
  }
  arr[pos] = value;
  return arr;
}

console.log(insertAt([1,2,3,4], 2, 99));   // [1,2,99,3,4]



// ========================================================================
// 4. DELETION FROM ARRAY (SIMULATED) — O(n)
// ========================================================================

function deleteAt(arr, pos) {
  for (let i = pos; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];                   // shifting left
  }
  arr.length = arr.length - 1;             // reduce size
  return arr;
}

console.log(deleteAt([10,20,30,40], 1));   // [10,30,40]



// ========================================================================
// 5. ROTATE ARRAY (RIGHT ROTATION) — O(n)
// ========================================================================
// Uses 3-step reversal method

function rotateRight(arr, k) {
  const n = arr.length;
  k = k % n;

  function reverse(a, l, r) {
    while (l < r) {
      [a[l], a[r]] = [a[r], a[l]];
      l++; r--;
    }
  }

  reverse(arr, 0, n - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);

  return arr;
}

console.log(rotateRight([1,2,3,4,5], 2));   // [4,5,1,2,3]



// ========================================================================
// 6. PREFIX SUM ARRAY (For fast range-sum queries) — O(n)
// ========================================================================

function prefixSum(arr) {
  const pre = [];
  pre[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    pre[i] = pre[i - 1] + arr[i];          // cumulative sum
  }
  return pre;
}

const p = prefixSum([2,4,6,8,10]);
console.log(p); // [2,6,12,20,30]

// Range sum query: sum from L to R
function rangeSum(prefix, L, R) {
  if (L === 0) return prefix[R];
  return prefix[R] - prefix[L - 1];
}

console.log(rangeSum(p, 1, 3));            // 6 + 6 + 8 = 18



// ========================================================================
// 7. MULTI-DIMENSIONAL ARRAYS (JS representation)
// ========================================================================
// 2D array = array of arrays

let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

console.log(matrix[1][2]);   // 6



// ========================================================================
// 8. ROW-MAJOR SIMULATION (C-STYLE CALCULATION)
// ========================================================================
// Address formula:
// Address(i,j) = Base + ( (i * TotalCols) + j ) * Size

function rowMajorIndex(i, j, totalCols) {
  return i * totalCols + j;        // index in flattened array
}

console.log("Row-major index of (1,2):", rowMajorIndex(1,2,3));  
// (1*3 + 2) = 5



// ========================================================================
// 9. COLUMN-MAJOR SIMULATION
// ========================================================================
// Address(i,j) = Base + ( (j * TotalRows) + i ) * Size

function columnMajorIndex(i, j, totalRows) {
  return j * totalRows + i;
}

console.log("Column-major index of (1,2):", columnMajorIndex(1,2,3));  
// (2*3 + 1) = 7



// ========================================================================
// 10. FLATTEN A 2D ARRAY INTO ROW-MAJOR — O(r*c)
// ========================================================================

function flattenRowMajor(mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const flat = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      flat.push(mat[i][j]);
    }
  }
  return flat;
}

console.log(flattenRowMajor(matrix));
// [1,2,3,4,5,6,7,8,9]



// ========================================================================
// 11. FLATTEN A 2D ARRAY INTO COLUMN-MAJOR
// ========================================================================

function flattenColumnMajor(mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const flat = [];

  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < rows; i++) {
      flat.push(mat[i][j]);
    }
  }
  return flat;
}

console.log(flattenColumnMajor(matrix));
// [1,4,7,2,5,8,3,6,9]



// ========================================================================
// 12. ADJACENCY MATRIX (GRAPH IMPLEMENTATION)
// ========================================================================
// 0 = no edge
// 1 = edge

function createAdjMatrix(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = Array(n).fill(0);        // n x n matrix
  }
  return matrix;
}

let graph = createAdjMatrix(4);
graph[0][1] = 1;
graph[1][2] = 1;
graph[2][3] = 1;

console.log(graph);
/*
[
  [0,1,0,0],
  [0,0,1,0],
  [0,0,0,1],
  [0,0,0,0]
]
*/



// ========================================================================
// 13. SUM OF DIAGONALS — MATRIX PRACTICE
// ========================================================================

function sumDiagonal(mat) {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i];
  }
  return sum;
}

console.log(sumDiagonal(matrix)); // 1 + 5 + 9 = 15



// ========================================================================
// END OF UNIT-1 PART-B ARRAY CODESHEET
// ========================================================================
