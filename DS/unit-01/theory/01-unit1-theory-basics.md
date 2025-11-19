# DATA STRUCTURES — UNIT 1 (FULL THEORY)

## 1. Introduction to Data Structures
Data structures organize data efficiently...

## 2. Basic Terminology
- **Data**: raw facts.
- **Data Item**: smallest unit...
- **Record**: group of related fields.
- **File**: collection of records.
- **Key**: unique identifier.

## 3. Elementary Data Organization
- Contiguous: Arrays
- Linked: Linked Lists
- Indexed/Sequential
- Hashed

## 4. Built‑in Data Types (C → JS Mapping)
| C | JS | Notes |
|---|----|------|
| int | number | JS has only number |
| float | number |  |
| char | string |  |
| struct | object |  |
| array | array | dynamic |

## 5. Algorithm
Properties: input, output, definiteness, finiteness, effectiveness.

## 6. Time & Space Complexity
- Time = operations vs n
- Space = memory used

## 7. Asymptotic Notations
- **O()** upper bound
- **Ω()** lower bound
- **Θ()** tight bound

```
Time ↑
     |        O(n²)
     |    /
     |  /   Θ(n)
     |/ Ω(1)
     └──────────→ n
```

## 8. Time–Space Tradeoff
More space → less time. Example: hashing.

## 9. ADT (Abstract Data Type)
Defines *what* operations do, not *how*.  
Example: Stack → push, pop, top.

---

# ARRAYS

## Definition
Contiguous block of memory storing same-type elements.

## Types
- 1D: arr[n]
- 2D: arr[r][c]
- 3D and n‑D

## Row‑Major & Column‑Major

### Row‑Major (C default)
Address(A[i][j]) = Base + [(i * Cols) + j] * Size

### Column‑Major
Address(A[i][j]) = Base + [(j * Rows) + i] * Size

```
Row-Major Representation (2x3)
[ a00 a01 a02
  a10 a11 a12 ]

Stored as:
a00 a01 a02 a10 a11 a12
```

---

# SPARSE MATRIX

## Why Sparse?
Matrix with mostly 0 → waste memory.

## Triplet Representation
```
Row | Col | Value
0   | 2   | 5
1   | 1   | 9
```

## Advantages
- compact
- fast traverse of non-zero values

---

# LINKED LISTS

## Singly Linked List (SLL)
Node:
```
+-------+------+
| data  | next |
+-------+------+
```

## Doubly Linked List (DLL)
```
+-------+-------+------+
| prev  | data  | next |
+-------+-------+------+
```

## Circular Linked List
Last node points to first.

## Operations
- Insertion (begin, end, position)
- Deletion
- Traversal

## Polynomial Representation
Each term stored as node:
```
coef | exp | next
```

Operations:
- addition
- subtraction
- multiplication

---

# END OF UNIT 1 THEORY
