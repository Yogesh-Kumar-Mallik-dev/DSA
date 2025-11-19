// ===========================================================
// UNIT1 — PART 1 CODESHEET (Algorithms, Complexity, ADT)
// File: UNIT1_PART1_codesheet.js
// ===========================================================

// ----------------------------
// 1) Simple algorithms + examples
// ----------------------------

// Example: Find max in array (O(n))
function findMax(arr) {
  if (arr.length === 0) return undefined;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
// Example usage
console.log('findMax([3,7,2,9,5]) =>', findMax([3,7,2,9,5])); // 9

// Example: Count evens (O(n))
function countEvens(arr) {
  let cnt = 0;
  for (let x of arr) if (x % 2 === 0) cnt++;
  return cnt;
}
console.log('countEvens([1,2,3,4,5,6]) =>', countEvens([1,2,3,4,5,6])); // 3

// ----------------------------
// 2) Benchmark helper & examples
// ----------------------------
function measure(fn, ...args) {
  const t0 = (typeof performance !== 'undefined') ? performance.now() : Date.now();
  const res = fn(...args);
  const t1 = (typeof performance !== 'undefined') ? performance.now() : Date.now();
  return { result: res, timeMs: t1 - t0 };
}

// Demo: compare linear vs naive quadratic growth
function linear(n) {
  let c = 0;
  for (let i = 0; i < n; i++) c++;
  return c;
}
function quadratic(n) {
  let c = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) c++;
  }
  return c;
}
console.log('benchmark linear(100000):', measure(linear, 100000).timeMs.toFixed(3), 'ms');
console.log('benchmark quadratic(300):', measure(quadratic, 300).timeMs.toFixed(3), 'ms');

// ----------------------------
// 3) Space complexity examples
// ----------------------------

// O(1) extra space (in-place increment)
function incInPlace(arr) {
  for (let i = 0; i < arr.length; i++) arr[i] += 1;
  return arr;
}

// O(n) extra space (copy)
function incCopy(arr) {
  const out = [];
  for (let x of arr) out.push(x + 1);
  return out;
}
console.log('incInPlace demo:', incInPlace([1,2,3])); // [2,3,4]
console.log('incCopy demo original unaffected:', incCopy([1,2,3])); // [2,3,4]

// ----------------------------
// 4) Recursion basics (factorial + fibonacci)
// ----------------------------

// Factorial: O(n) time, O(n) space (stack)
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log('factorial(6) =', factorial(6)); // 720

// Fibonacci naive (exponential) — example of bad complexity
function fibNaive(n) {
  if (n <= 1) return n;
  return fibNaive(n-1) + fibNaive(n-2);
}
// small demo (n=30 may be slow)
console.log('fibNaive(10)=', fibNaive(10)); // 55

// Memoized Fibonacci (O(n))
function fibMemo(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n] != null) return memo[n];
  memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);
  return memo[n];
}
console.log('fibMemo(40)=', fibMemo(40)); // fast

// ----------------------------
// 5) ADT examples: Stack & Queue
// ----------------------------

// Stack (array wrapper) — push/pop O(1) amortized
class Stack {
  constructor() { this._data = []; }
  push(x) { this._data.push(x); }   // O(1)
  pop() { return this._data.pop(); } // O(1)
  peek() { return this._data[this._data.length - 1]; }
  isEmpty() { return this._data.length === 0; }
  size() { return this._data.length; }
}
const st = new Stack();
st.push(10); st.push(20); console.log('stack pop:', st.pop(), st.pop()); // 20,10

// Queue (efficient using head/tail indices)
class Queue {
  constructor() {
    this._arr = [];
    this._head = 0;
    this._tail = 0;
  }
  enqueue(x) { this._arr[this._tail++] = x; } // O(1)
  dequeue() {
    if (this._head === this._tail) return undefined;
    const v = this._arr[this._head++];
    // memory trim (optional)
    if (this._head > 1000 && this._head * 2 > this._tail) {
      this._arr = this._arr.slice(this._head, this._tail);
      this._tail -= this._head;
      this._head = 0;
    }
    return v;
  }
  peek() { return this._arr[this._head]; }
  isEmpty() { return this._head === this._tail; }
  size() { return this._tail - this._head; }
}
const q = new Queue(); q.enqueue(1); q.enqueue(2); console.log('queue dequeue:', q.dequeue(), q.dequeue());

// ----------------------------
// 6) Quick Big-O reference (function)
// ----------------------------
function bigOReference() {
  return {
    'Array index access': 'O(1)',
    'Linear search (unsorted)': 'O(n)',
    'Binary search (sorted)': 'O(log n)',
    'Insertion at end (array push)': 'O(1) amortized',
    'Insertion at head (array unshift)': 'O(n)',
    'Hash table lookup (avg)': 'O(1)',
    'Merge sort': 'O(n log n)',
    'Quick sort (avg)': 'O(n log n)'
  };
}
console.log('Big-O reference sample:', bigOReference());
