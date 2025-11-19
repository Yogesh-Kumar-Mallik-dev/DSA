
# UNIT-1 Part-C — Sparse Matrix Theory

## 1. What is a Sparse Matrix?
A sparse matrix is a matrix in which the number of zero elements is significantly more than the number of non‑zero elements.

Example:
```
0 0 5
0 0 0
9 0 0
```

## 2. Why Special Representation?
Storing sparse matrices normally wastes memory.
Special representations:
- Save memory
- Speed up operations
- Skip zero elements

## 3. Triplet Representation
Only non‑zero elements are stored in rows of:
```
Row | Col | Value
```

Example matrix:
```
0 0 5
0 0 0
9 0 0
```

Triplet representation:
```
3 3 2     ← rows, cols, non‑zero count
0 2 5
2 0 9
```

## 4. Structure of Triplet Matrix
```
R C NZ
row col value
row col value
```

## 5. Advantages
- Compact
- Efficient traversal
- Useful for matrix operations

## 6. Operations Supported
- Search
- Transpose
- Addition / Subtraction
- Multiplication

## 7. Triplet Diagram
```
Index | Row | Col | Value
0     |  3  |  4  |   3   ← metadata
1     |  0  |  3  |  10
2     |  1  |  1  |   5
3     |  2  |  0  |   7
```

## 8. Applications
- Machine Learning
- Graphs (adjacency matrix)
- Scientific computing
- Search engine indexing

