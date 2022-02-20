class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newItem = new Node(val);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      newItem.next = this.first;
      this.first = newItem;
    }
    this.size++;
    return this.size;
  }
  pop(val) {
    if (!this.first) return null;
    let popedItem = this.first;
    this.first = this.first.next;
    popedItem.next = null;
    this.size--;
    if (this.size === 0) this.last = null;
    return popedItem.val;
  }
}

let stack = new Stack();
console.log(stack.push("prothomalo"));
console.log(stack.push("bangladeshProtidin"));
console.log(stack.pop());
console.log(stack.pop());
