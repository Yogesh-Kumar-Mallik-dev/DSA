// ===========================================================
// UNIT1 — PART 2 CODESHEET (Arrays & Matrices)
// File: UNIT1_PART2_codesheet.js
// ===========================================================

// ----------------------------
// 1) Traversal
// ----------------------------
function traverse(arr) {
  for (let i = 0; i < arr.length; i++) {
    // explanation: index-based traversal O(n)
    console.log(`arr[${i}] = ${arr[i]}`);
  }
}
traverse([10,20,30]);

// ----------------------------
// 2) Linear Search (O(n))
// ----------------------------
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) if (arr[i] === target) return i;
  return -1;
}
console.log('linearSearch:', linearSearch([10,20,30], 20)); // 1

// ----------------------------
// 3) Insert at position (simulate fixed-size array) O(n)
// ----------------------------
function insertAt(arr, pos, value) {
  // If pos <= length, shift elements to right and place value.
  for (let i = arr.length; i > pos; i--) arr[i] = arr[i - 1];
  arr[pos] = value;
  return arr;
}
console.log('insertAt demo:', insertAt([1,2,3,4], 2, 99)); // [1,2,99,3,4]

// ----------------------------
// 4) Delete at position (simulate) O(n)
// ----------------------------
function deleteAt(arr, pos) {
  for (let i = pos; i < arr.length - 1; i++) arr[i] = arr[i + 1];
  arr.length = arr.length - 1;
  return arr;
}
console.log('deleteAt demo:', deleteAt([10,20,30,40], 1)); // [10,30,40]

// ----------------------------
// 5) Reverse in-place (two pointers) O(n) O(1)
// ----------------------------
function reverseInPlace(a) {
  let l = 0, r = a.length - 1;
  while (l < r) {
    [a[l], a[r]] = [a[r], a[l]];
    l++; r--;
  }
  return a;
}
console.log('reverseInPlace:', reverseInPlace([1,2,3,4]));

// ----------------------------
// 6) Rotate right by k (three-step reversal) O(n)
// ----------------------------
function rotateRight(arr, k) {
  const n = arr.length;
  if (n === 0) return arr;
  k = ((k % n) + n) % n;
  function reverseRange(a, l, r) {
    while (l < r) { [a[l], a[r]] = [a[r], a[l]]; l++; r--; }
  }
  reverseRange(arr, 0, n - 1);
  reverseRange(arr, 0, k - 1);
  reverseRange(arr, k, n - 1);
  return arr;
}
console.log('rotateRight:', rotateRight([1,2,3,4,5], 2)); // [4,5,1,2,3]

// ----------------------------
// 7) Prefix sum (cumulative sums) O(n)
// ----------------------------
function prefixSum(arr) {
  const ps = new Array(arr.length);
  if (arr.length === 0) return ps;
  ps[0] = arr[0];
  for (let i = 1; i < arr.length; i++) ps[i] = ps[i - 1] + arr[i];
  return ps;
}
const ps = prefixSum([2,4,6,8]);
console.log('prefixSum:', ps); // [2,6,12,20]

// range sum using prefix sums O(1)
function rangeSum(prefix, L, R) {
  if (L === 0) return prefix[R];
  return prefix[R] - prefix[L - 1];
}
console.log('rangeSum 1..3:', rangeSum(ps, 1, 3)); // 4+6+8 = 18

// ----------------------------
// 8) 2D arrays (matrix) basics & row-major/column-major mapping
// ----------------------------

// Given a 2D matrix m (array of arrays)
const matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

// Access element (i,j)
console.log('matrix[1][2] =', matrix[1][2]); // 6

// Row-major index in flattened array
function rowMajorIndex(i, j, totalCols) {
  return i * totalCols + j;
}
console.log('rowMajorIndex(1,2,3)=', rowMajorIndex(1,2,3)); // 5

// Column-major index
function columnMajorIndex(i, j, totalRows) {
  return j * totalRows + i;
}
console.log('columnMajorIndex(1,2,3)=', columnMajorIndex(1,2,3)); // 7

// Flatten 2D in row-major
function flattenRowMajor(mat) {
  const r = mat.length, c = mat[0].length;
  const out = [];
  for (let i = 0; i < r; i++) for (let j = 0; j < c; j++) out.push(mat[i][j]);
  return out;
}
console.log('flattenRowMajor:', flattenRowMajor(matrix)); // [1..9]

// Flatten column-major
function flattenColumnMajor(mat) {
  const r = mat.length, c = mat[0].length;
  const out = [];
  for (let j = 0; j < c; j++) for (let i = 0; i < r; i++) out.push(mat[i][j]);
  return out;
}
console.log('flattenColumnMajor:', flattenColumnMajor(matrix)); // [1,4,7,2,5,8,3,6,9]

// ----------------------------
// 9) Adjacency matrix for graph (n x n) initialization
// ----------------------------
function createAdjMatrix(n) {
  const mat = [];
  for (let i = 0; i < n; i++) mat.push(new Array(n).fill(0));
  return mat;
}
const adj = createAdjMatrix(4);
adj[0][1] = 1; adj[1][2] = 1;
console.log('adjacency matrix:', adj);

// ----------------------------
// 10) Example practice problems
// ----------------------------
// Remove duplicates from sorted array (two pointers)
function removeDuplicatesSorted(a) {
  if (a.length === 0) return 0;
  let write = 1;
  for (let read = 1; read < a.length; read++) {
    if (a[read] !== a[read - 1]) a[write++] = a[read];
  }
  return write;
}
let arr = [1,1,2,2,3,4,4];
const newLen = removeDuplicatesSorted(arr);
console.log('unique prefix:', arr.slice(0,newLen)); // [1,2,3,4]
