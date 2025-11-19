// ===========================================================
// UNIT1 — PART 4 CODESHEET (Linked Lists & Polynomial)
// File: UNIT1_PART4_codesheet.js
// ===========================================================

// ----------------------------
// 1) Singly Linked List (SLL) Implementation
// ----------------------------
class SLLNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() { this.head = null; this.size = 0; }

  // Insert at head — O(1)
  insertAtHead(value) {
    const node = new SLLNode(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  // Insert at tail — O(n)
  insertAtTail(value) {
    const node = new SLLNode(value);
    if (!this.head) { this.head = node; this.size++; return; }
    let cur = this.head;
    while (cur.next) cur = cur.next;
    cur.next = node; this.size++;
  }

  // Delete first node — O(1)
  deleteHead() {
    if (!this.head) return;
    this.head = this.head.next;
    this.size--;
  }

  // Delete by value (first occurrence) — O(n)
  deleteByValue(val) {
    if (!this.head) return false;
    if (this.head.data === val) { this.head = this.head.next; this.size--; return true; }
    let prev = this.head, cur = this.head.next;
    while (cur) {
      if (cur.data === val) { prev.next = cur.next; this.size--; return true; }
      prev = cur; cur = cur.next;
    }
    return false;
  }

  // Traverse
  toArray() {
    const out = []; let cur = this.head;
    while (cur) { out.push(cur.data); cur = cur.next; }
    return out;
  }
}

// Demo
const sll = new SinglyLinkedList();
sll.insertAtHead(30); sll.insertAtHead(20); sll.insertAtHead(10); // 10->20->30
sll.insertAtTail(40); console.log('SLL list:', sll.toArray());
sll.deleteByValue(20); console.log('After delete 20:', sll.toArray());

// ----------------------------
// 2) Doubly Linked List (DLL)
// ----------------------------
class DLLNode {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() { this.head = null; this.tail = null; this.size = 0; }

  insertAtHead(val) {
    const node = new DLLNode(val);
    if (!this.head) { this.head = this.tail = node; this.size++; return; }
    node.next = this.head; this.head.prev = node; this.head = node; this.size++;
  }

  insertAtTail(val) {
    const node = new DLLNode(val);
    if (!this.tail) { this.head = this.tail = node; this.size++; return; }
    this.tail.next = node; node.prev = this.tail; this.tail = node; this.size++;
  }

  deleteNode(node) {
    if (!node) return;
    if (node.prev) node.prev.next = node.next; else this.head = node.next;
    if (node.next) node.next.prev = node.prev; else this.tail = node.prev;
    this.size--;
  }

  toArrayForward() {
    const out = []; let cur = this.head;
    while (cur) { out.push(cur.data); cur = cur.next; }
    return out;
  }
}

// Demo
const dll = new DoublyLinkedList();
dll.insertAtHead(20); dll.insertAtHead(10); dll.insertAtTail(30);
console.log('DLL forward:', dll.toArrayForward());
dll.deleteNode(dll.head.next); // delete middle (20)
console.log('DLL after deletion:', dll.toArrayForward());

// ----------------------------
// 3) Circular Linked List (Singly)
// ----------------------------
class CircularSLL {
  constructor() { this.head = null; this.size = 0; }

  insertAtHead(val) {
    const node = new SLLNode(val);
    if (!this.head) { this.head = node; node.next = node; this.size++; return; }
    // insert before head and fix last node's next
    let last = this.head;
    while (last.next !== this.head) last = last.next;
    node.next = this.head;
    last.next = node;
    this.head = node;
    this.size++;
  }

  traverseToArray(limit = 50) { // avoid infinite loops; limit for safety
    const out = [];
    if (!this.head) return out;
    let cur = this.head; let count = 0;
    do {
      out.push(cur.data);
      cur = cur.next;
      if (++count > limit) break;
    } while (cur !== this.head);
    return out;
  }
}

// Demo
const cList = new CircularSLL();
cList.insertAtHead(30); cList.insertAtHead(20); cList.insertAtHead(10);
console.log('Circular SLL:', cList.traverseToArray());

// ----------------------------
// 4) Polynomial using Linked List
// ----------------------------
// Node: {coef, exp, next}
// Polynomials stored sorted by decreasing exponent

class PolyNode {
  constructor(coef, exp) {
    this.coef = coef; this.exp = exp; this.next = null;
  }
}

class Polynomial {
  constructor() { this.head = null; }

  // insert term keeping sorted order (decreasing exp)
  insertTerm(coef, exp) {
    if (coef === 0) return;
    const node = new PolyNode(coef, exp);
    if (!this.head || this.head.exp < exp) {
      node.next = this.head; this.head = node; return;
    }
    let prev = null, cur = this.head;
    while (cur && cur.exp > exp) { prev = cur; cur = cur.next; }
    if (cur && cur.exp === exp) {
      cur.coef += coef;
      if (cur.coef === 0) { // remove zero coefficient node
        if (prev) prev.next = cur.next; else this.head = cur.next;
      }
    } else {
      node.next = cur; if (prev) prev.next = node;
    }
  }

  // Add another polynomial, return new Polynomial
  add(other) {
    const res = new Polynomial();
    let p = this.head, q = other.head;
    while (p && q) {
      if (p.exp === q.exp) { res.insertTerm(p.coef + q.coef, p.exp); p = p.next; q = q.next; }
      else if (p.exp > q.exp) { res.insertTerm(p.coef, p.exp); p = p.next; }
      else { res.insertTerm(q.coef, q.exp); q = q.next; }
    }
    while (p) { res.insertTerm(p.coef, p.exp); p = p.next; }
    while (q) { res.insertTerm(q.coef, q.exp); q = q.next; }
    return res;
  }

  toString() {
    if (!this.head) return '0';
    let cur = this.head;
    const parts = [];
    while (cur) {
      parts.push(`${cur.coef}x^${cur.exp}`);
      cur = cur.next;
    }
    return parts.join(' + ');
  }
}

// Demo polynomial
const P = new Polynomial();
P.insertTerm(7, 3); P.insertTerm(5, 1); P.insertTerm(2, 0);
console.log('P:', P.toString()); // 7x^3 + 5x^1 + 2x^0

const Q = new Polynomial();
Q.insertTerm(2,3); Q.insertTerm(4,2); Q.insertTerm(-5,1);
console.log('Q:', Q.toString()); // 2x^3 + 4x^2 + -5x^1

const S = P.add(Q);
console.log('P + Q =', S.toString()); // 9x^3 + 4x^2 + 0x^1 + 2x^0 (0 term removed)

// ----------------------------
// End of UNIT1 PART4 Codesheet
// ----------------------------
