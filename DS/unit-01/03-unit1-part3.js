// ===========================================================
// UNIT1 — PART 3 CODESHEET (Sparse Matrix / Triplet)
// File: UNIT1_PART3_codesheet.js
// ===========================================================

// ----------------------------
// 1) Convert normal matrix -> sparse triplet
// ----------------------------
function toSparse(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const data = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] !== 0) data.push([i, j, matrix[i][j]]);
    }
  }
  // metadata at front: [rows, cols, nz]
  data.unshift([rows, cols, data.length]);
  return data;
}
const m = [
  [0,0,5],
  [0,0,0],
  [9,0,0]
];
console.log('toSparse:', toSparse(m));

// ----------------------------
// 2) Convert sparse triplet -> normal matrix
// ----------------------------
function toNormal(sparse) {
  const [meta, ...data] = sparse;
  const [rows, cols] = meta;
  const mat = Array.from({length: rows}, () => new Array(cols).fill(0));
  for (const [r, c, v] of data) mat[r][c] = v;
  return mat;
}
const sparse1 = [
  [3,3,2],
  [0,2,5],
  [2,0,9]
];
console.log('toNormal:', toNormal(sparse1));

// ----------------------------
// 3) Search in sparse (O(nz))
// ----------------------------
function searchSparse(sparse, target) {
  const [, ...data] = sparse;
  for (const [r,c,v] of data) if (v === target) return {row: r, col: c};
  return null;
}
console.log('searchSparse 9 =>', searchSparse(sparse1, 9));

// ----------------------------
// 4) Fast transpose (efficient) — core algorithm
// ----------------------------
function fastTranspose(sparse) {
  const [meta, ...data] = sparse;
  const [rows, cols, nz] = meta;
  const count = new Array(cols).fill(0);
  for (const [, c] of data) count[c]++;

  const index = new Array(cols).fill(0);
  index[0] = 1; // 0 reserved for metadata
  for (let i = 1; i < cols; i++) index[i] = index[i-1] + count[i-1];

  const result = new Array(nz + 1);
  result[0] = [cols, rows, nz];
  for (const [r, c, v] of data) {
    const pos = index[c]++;
    result[pos] = [c, r, v];
  }
  return result;
}
console.log('fastTranspose:', fastTranspose(sparse1));

// ----------------------------
// 5) Addition of two sparse matrices (merge-like) 
// ----------------------------
function addSparse(A, B) {
  const [metaA, ...a] = A;
  const [metaB, ...b] = B;
  const [rA, cA] = metaA;
  const [rB, cB] = metaB;
  if (rA !== rB || cA !== cB) throw new Error('Dimension mismatch');

  const result = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    const [r1,c1,v1] = a[i];
    const [r2,c2,v2] = b[j];
    if (r1 === r2 && c1 === c2) {
      const s = v1 + v2;
      if (s !== 0) result.push([r1,c1,s]);
      i++; j++;
    } else if (r1 < r2 || (r1 === r2 && c1 < c2)) {
      result.push(a[i++]);
    } else result.push(b[j++]);
  }
  while (i < a.length) result.push(a[i++]);
  while (j < b.length) result.push(b[j++]);
  result.unshift([rA, cA, result.length]);
  return result;
}
const A = [[3,3,2],[0,2,5],[2,0,7]];
const B = [[3,3,2],[0,2,3],[1,1,4]];
console.log('addSparse:', addSparse(A,B));

// ----------------------------
// 6) Multiplication (sparse) — simplified approach
// ----------------------------
function multiplySparse(A, B) {
  const [metaA, ...a] = A;
  const [metaB, ...b] = B;
  const [rA, cA] = metaA;
  const [rB, cB] = metaB;
  if (cA !== rB) throw new Error('Incompatible dims for multiply');

  // Build quick lookup for B by row (k -> list of [j, val])
  const bByRow = new Map();
  for (const [r,c,v] of b) {
    if (!bByRow.has(r)) bByRow.set(r, []);
    bByRow.get(r).push([c, v]);
  }

  const resultMap = new Map(); // key "i,j" -> value
  for (const [i, k, v1] of a) {
    const entries = bByRow.get(k);
    if (!entries) continue;
    for (const [j, v2] of entries) {
      const key = `${i},${j}`;
      resultMap.set(key, (resultMap.get(key) || 0) + v1 * v2);
    }
  }

  const out = [];
  for (const [key, val] of resultMap.entries()) {
    if (val !== 0) {
      const [i, j] = key.split(',').map(Number);
      out.push([i, j, val]);
    }
  }
  out.unshift([rA, cB, out.length]);
  return out;
}
console.log('multiplySparse:', multiplySparse(A, B));
