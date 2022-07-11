function HeapTree(type = "max") {
  this.items = [];
  this.type = type;
}

HeapTree.prototype.swap = function (idx1, idx2) {
  const temp = this.items[idx1];
  this.items[idx1] = this.items[idx2];
  this.items[idx2] = temp;
};

HeapTree.prototype.getParentIndex = function (idx) {
  return Math.floor((idx - 1) / 2);
};

HeapTree.prototype.getLeftChildIndex = function (idx) {
  return idx * 2 + 1;
};

HeapTree.prototype.getRightChildIndex = function (idx) {
  return idx * 2 + 2;
};

HeapTree.prototype.getParent = function (idx) {
  return this.items[getParentIndex(idx)];
};

HeapTree.prototype.getLeftChild = function (idx) {
  return this.items[getLeftChildIndex(idx)];
};

HeapTree.prototype.getRightChild = function (idx) {
  return this.items[getRightChildIndex(idx)];
};

HeapTree.prototype.insert = function (item) {
  this.items.push(item);
  let nowIdx = this.items.length - 1;
  const isMax = this.type === "max" ? 1 : -1;

  while (1) {
    const parentIdx = this.getParentIndex(nowIdx);
    if (parentIdx < 0) break;
    if (item * isMax > this.items[parentIdx] * isMax) {
      this.swap(nowIdx, parentIdx);
      nowIdx = parentIdx;
    } else break;
  }
  return this.items;
};

HeapTree.prototype.remove = function () {
  const temp = this.items[0];
  this.items[0] = this.items[this.items.length - 1];
  this.items.pop();

  let nowIdx = 0;
  const isMax = this.type === "max" ? 1 : -1;

  while (1) {
    if (nowIdx > this.items.length - 1) break;
    const leftIdx = this.getLeftChildIndex(nowIdx);
    const rightIdx = this.getRightChildIndex(nowIdx);
    const lowNodeIdx =
      rightIdx > this.items.length - 1 ||
      this.items[leftIdx] * isMax > this.items[rightIdx] * isMax
        ? leftIdx
        : rightIdx;
    if (this.items[nowIdx] * isMax < this.items[lowNodeIdx] * isMax) {
      this.swap(nowIdx, lowNodeIdx);
      nowIdx = lowNodeIdx;
    } else break;
  }
  return temp;
};

const heapTree = new HeapTree("min");
heapTree.insert(1);
heapTree.insert(2);
heapTree.insert(3);
heapTree.insert(4);
heapTree.insert(5);
heapTree.insert(6);
heapTree.insert(-1);
console.log(heapTree.items);
console.log(heapTree.remove());
console.log(heapTree.items);
console.log(heapTree.remove());
console.log(heapTree.items);
