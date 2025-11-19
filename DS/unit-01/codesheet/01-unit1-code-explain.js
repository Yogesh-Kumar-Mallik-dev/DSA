// ===============================================================
// UNIT-1 PART-A — FULL CODESHEET WITH EXPLANATIONS
// Data Structures using JavaScript
// Topics covered:
// - Benchmarking
// - Time complexity examples
// - Space complexity examples
// - Recursion basics
// - Stack ADT
// - Queue ADT
// - Array operations
// - Two pointers
// - Sliding window
// - Hash map frequency counter
// - Mini-practice problems
// ===============================================================



// ===============================================================
// 1) BENCHMARKING / TIME MEASUREMENT
// ===============================================================

// Small helper to measure execution time of ANY function.
// performance.now() gives time in milliseconds.
// This shows how complexity affects running time.
function measure(fn, ...args) {
  const t0 = performance.now();    // start time
  const result = fn(...args);      // run the function
  const t1 = performance.now();    // end time
  return { 
    result,
    timeMs: (t1 - t0)              // time taken
  };
}

// Example: linear sum function to demonstrate O(n)
function sumLinear(arr) {
  let sum = 0;
  for (let x of arr) sum += x;
  return sum;
}

const arr100k = Array.from({ length: 100000 }, (_, i) => i + 1);

console.log("Benchmark sumLinear on 100k:");
console.log(measure(sumLinear, arr100k));   // shows time in ms



// ===============================================================
// 2) TIME COMPLEXITY EXAMPLES
// ===============================================================

// ---------------------
// O(1) — Constant time
// ---------------------
// Accessing index in array is constant time.
function getFirst(arr) {
  return arr[0];
}


// ---------------------
// O(n) — Linear time
// ---------------------
// Searching an element in an UNSORTED array.
function containsValue(arr, target) {
  for (let x of arr) {
    if (x === target) return true;
  }
  return false;
}


// ---------------------
// O(n²) — Quadratic time
// ---------------------
// Nested loops → pair comparison.
function pairsSumZero(arr) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {

      // Checking all possible pairs → O(n²)
      if (arr[i] + arr[j] === 0) {
        res.push([arr[i], arr[j]]);
      }
    }
  }

  return res;
}



// ===============================================================
// 3) SPACE COMPLEXITY EXAMPLES
// ===============================================================

// O(1) extra space — modifies original array in-place.
function incrementAllInPlace(arr) {
  for (let i = 0; i < arr.length; i++) arr[i]++;
  return arr;
}

// O(n) extra space — creates a new array.
function incrementAllCopy(arr) {
  const out = [];
  for (let x of arr) out.push(x + 1);
  return out;
}



// ===============================================================
// 4) BASIC RECURSION
// ===============================================================

// factorial(n) uses recursion.
// Time: O(n)
// Space: O(n) stack frames
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log("factorial(6) =", factorial(6));



// ===============================================================
// 5) ABSTRACT DATA TYPE (ADT) — STACK
// ===============================================================

// Stack = LIFO (Last In First Out)
class Stack {
  constructor() {
    this.data = [];
  }
  push(x) { this.data.push(x); }            // O(1)
  pop()  { return this.data.pop(); }        // O(1)
  peek() { return this.data[this.data.length - 1]; }
  isEmpty() { return this.data.length === 0; }
}



// ===============================================================
// 6) ABSTRACT DATA TYPE (ADT) — QUEUE
// ===============================================================

// Queue = FIFO (First In First Out)
// Implemented using efficient circular indexing.
class Queue {
  constructor() {
    this.arr = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(x) {
    this.arr[this.tail++] = x;              // insert at tail
  }

  dequeue() {
    if (this.head === this.tail) return undefined;
    return this.arr[this.head++];           // remove from head
  }

  peek() { return this.arr[this.head]; }
  isEmpty() { return this.head === this.tail; }
}



// ===============================================================
// 7) ARRAY — REVERSE (In-place)
// ===============================================================

// Classic two-pointer reversal.
// Time: O(n)
// Space: O(1)
function reverseInPlace(a) {
  let i = 0;
  let j = a.length - 1;

  while (i < j) {
    // Swap elements
    [a[i], a[j]] = [a[j], a[i]];
    i++;
    j--;
  }

  return a;
}

console.log(reverseInPlace([1,2,3,4]));  // [4,3,2,1]



// ===============================================================
// 8) ARRAY ROTATION (Right shift by k)
// ===============================================================

// Three-step reversal trick:
// 1) Reverse whole array
// 2) Reverse first k elements
// 3) Reverse remaining part
function rotateRight(a, k) {
  const n = a.length;
  k = ((k % n) + n) % n;   // handle negative k

  function reverseRange(arr, l, r) {
    while (l < r) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++; r--;
    }
  }

  reverseRange(a, 0, n - 1);
  reverseRange(a, 0, k - 1);
  reverseRange(a, k, n - 1);

  return a;
}

console.log(rotateRight([1,2,3,4,5], 2));  // [4,5,1,2,3]



// ===============================================================
// 9) TWO-POINTER PATTERN
// ===============================================================

// For sorted arrays → O(n)
function twoSumSorted(arr, target) {
  let l = 0, r = arr.length - 1;

  while (l < r) {
    const sum = arr[l] + arr[r];

    if (sum === target) return [l, r];
    if (sum < target) l++;
    else r--;
  }

  return null;
}

console.log(twoSumSorted([1,2,3,4,6], 7)); 



// ===============================================================
// 10) SLIDING WINDOW PATTERN
// ===============================================================

// Find max sum of any subarray of size k.
function maxSumSubarrayK(arr, k) {
  let sum = 0;

  // First window
  for (let i = 0; i < k; i++) sum += arr[i];

  let max = sum;

  // Slide window
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    max = Math.max(max, sum);
  }

  return max;
}

console.log(maxSumSubarrayK([1,2,3,4,5], 3));  // 12



// ===============================================================
// 11) HASH MAP — FREQUENCY COUNTER
// ===============================================================

function frequencyMap(arr) {
  const map = new Map();

  for (let x of arr) {
    map.set(x, (map.get(x) || 0) + 1);
  }

  return map;
}

console.log(frequencyMap([1,2,2,3,2])); 



// ===============================================================
// 12) Remove Duplicates (Sorted Array)
// ===============================================================

// Classic two-pointer technique.
function removeDuplicatesSorted(a) {
  if (a.length === 0) return 0;

  let write = 1;

  for (let read = 1; read < a.length; read++) {
    if (a[read] !== a[read - 1]) {
      a[write++] = a[read];
    }
  }

  return write;
}

let arr = [1,1,2,2,3,4,4];
let len = removeDuplicatesSorted(arr);
console.log(arr.slice(0, len));   // [1,2,3,4]



// ===============================================================
// END OF UNIT-1 PART-A CODESHEET
// ===============================================================

