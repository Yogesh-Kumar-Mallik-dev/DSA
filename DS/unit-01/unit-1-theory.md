# DATA STRUCTURES — UNIT 1 COMPLETE THEORY (EXPANDED)

# ============================================================
# 🔶 PART A — INTRODUCTION, TERMINOLOGY, ALGORITHMS, COMPLEXITY
# ============================================================

## 1. Introduction to Data Structures
A **Data Structure** is a method of organizing data so that we can use it efficiently.  
It helps in solving complex problems, improves performance, and optimizes memory.

### Why Data Structures?
- Efficient memory use  
- Efficient algorithms  
- Faster execution  
- Organize complex data  
- Backbone of OS, DBMS, Compilers, Networking, ML, Games

---

## 2. Basic Terminology

### ✔ Data  
Raw unprocessed facts.

### ✔ Data Item  
Smallest unit of data.

Example:
```
Array: [10, 20, 30]
Items: 10, 20, 30
```

### ✔ Group of Data Items  
Logically related items, e.g. `{day, month, year}`.

### ✔ Record  
Collection of different-type data.

### ✔ File  
Collection of records.

### ✔ Key  
A unique identifier for a record.

---

## 3. Algorithm
A step-by-step finite process to solve a problem.

### Characteristics:
- Input  
- Output  
- Definiteness  
- Finiteness  
- Effectiveness  

### Example: Find max in array
```
max = A[0]
for i = 1 to n-1:
    if A[i] > max:
         max = A[i]
```

---

## 4. Time & Space Complexity

### Time Complexity  
How fast algorithm runs.

### Space Complexity  
Extra memory used.

Example:
```
sum = a + b    → O(1)
loop n times   → O(n)
```

---

## 5. Asymptotic Notations

### ✔ Big-O (Worst case)
Upper bound.

### ✔ Omega (Best case)
Lower bound.

### ✔ Theta (Average case)
Tight bound.

ASCII Graph:
```
Time ^
     |
     |      / O(n^2)
     |     /
     |    /       
     |   /
     |  /  Θ(n)    
     | /
     |/   Ω(n)
     +----------------------> n
```

---

## 6. Time–Space Tradeoff
More space → less time  
More time → less space

Example:
Hash table takes space, gives O(1) search.

---

## 7. ADT (Abstract Data Type)
Defines behavior (what operations do), not implementation.

Example: Stack ADT
- push(x)
- pop()
- peek()
- isEmpty()



# ============================================================
# 🔶 PART B — ARRAYS (1D, 2D, ROW/COLUMN MAJOR)
# ============================================================

## 1. What is an Array?
Array = contiguous block of memory storing same-type values.

ASCII memory:
```
[10][20][30][40]
  0   1   2   3
```

---

## 2. 1D Array Address Calculation

Formula:
```
Address(A[i]) = Base + i * Size
```

Example:
Base = 1000, Size = 2
```
Address(A[4]) = 1000 + 4*2 = 1008
```

---

## 3. 2D Array Layout (Matrix)
```
i/j | 0  1  2
---------------
 0  | 1  2  3
 1  | 4  5  6
 2  | 7  8  9
```

---

## 4. Row-Major Order
Stores rows continuously.

```
Matrix:
1 2 3
4 5 6
7 8 9

Stored:
1 2 3 4 5 6 7 8 9
```

Formula:
```
Address(A[i][j]) = Base + (i * Cols + j) * Size
```

---

## 5. Column-Major Order
Stores columns continuously.

```
1 4 7 2 5 8 3 6 9
```

Formula:
```
Address(A[i][j]) = Base + (j * Rows + i) * Size
```

---

## 6. Array Operations

### Traversal
```
for i = 0..n-1:
    print(A[i])
```

### Insertion (O(n))
Shifting elements.

### Deletion (O(n))
Shifting backward.

---

## 7. Examples

### Example 1
Insert 7 at index 1:
```
Before: [5,10,15]
After:  [5,7,10,15]
```

### Example 2
Delete index 2:
```
Before: [5,7,10,15]
After:  [5,7,15]
```



# ============================================================
# 🔶 PART C — SPARSE MATRIX (Triplet, Transpose, Addition)
# ============================================================

## 1. Sparse Matrix Definition
Matrix with more zeros than non-zeros.

Example:
```
0 0 5
0 0 0
9 0 0
```

---

## 2. Triplet Representation
Only store non-zero values.

Format:
```
Row  Col  Val
```

Example:
```
3 3 2
0 2 5
2 0 9
```

ASCII:
```
Index | Row | Col | Val
-------------------------
0     |  3  |  3  |  2
1     |  0  |  2  |  5
2     |  2  |  0  |  9
```

---

## 3. Transpose
Swap row & column.

Before:
(0,2,5)
After:
(2,0,5)

---

## 4. Sparse Addition

Example:
A:
```
0 0 5
2 0 0
```

B:
```
0 0 3
1 0 0
```

Result:
```
0 0 8
3 0 0
```

---

## 5. Sparse Examples

Example Matrix 1:
```
10 0
0  0
7  4
```

Triplet:
```
3 2 3
0 0 10
2 0 7
2 1 4
```

Example Matrix 2:
```
1 0 1
0 0 0
0 4 0
```

Triplet:
```
3 3 3
0 0 1
0 2 1
2 1 4
```


# ============================================================
# 🔶 PART D — LINKED LIST (SLL, DLL, CLL, Polynomial)
# ============================================================

## 1. Singly Linked List

ASCII:
```
head
 |
 v
+-----+------+     +-----+-------+    +-----+------+
| 10  |   o------->| 20  |   o------->| 30  |null  |
+-----+------+     +-----+-------+    +-----+------+
```

---

## 2. Doubly Linked List

ASCII:
```
null ←→ [10] ←→ [20] ←→ [30] ←→ null
```

---

## 3. Circular Linked List

```
[10] → [20] → [30]
   ↑             ↓
   +-------------+
```

---

## 4. Polynomial Linked List

Polynomial:
```
7x^3 + 5x^1 + 2
```

Linked list:
```
(7,3) → (5,1) → (2,0) → null
```

---

## 5. Examples

### Example 1: Insert at head
```
Before: 20 → 30
After: 10 → 20 → 30
```

### Example 2: Delete last
```
Before: 10 → 20 → 30
After: 10 → 20
```


# ============================================================
# 🔶 PART D — LINKED LIST (SLL, DLL, CLL, Polynomial)
# ============================================================

## 1. Singly Linked List

ASCII:
```
head
 |
 v
+-----+------+    +-----+------+    +-----+------+
| 10  |   o------->| 20  |   o------->| 30  |null |
+-----+------+    +-----+------+    +-----+------+
```

---

## 2. Doubly Linked List

ASCII:
```
null ←→ [10] ←→ [20] ←→ [30] ←→ null
```

---

## 3. Circular Linked List

```
[10] → [20] → [30]
   ↑             ↓
   +-------------+
```

---

## 4. Polynomial Linked List

Polynomial:
```
7x^3 + 5x^1 + 2
```

Linked list:
```
(7,3) → (5,1) → (2,0) → null
```

---

## 5. Examples

### Example 1: Insert at head
```
Before: 20 → 30
After: 10 → 20 → 30
```

### Example 2: Delete last
```
Before: 10 → 20 → 30
After: 10 → 20
```

