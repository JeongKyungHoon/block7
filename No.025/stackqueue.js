function Stack(arr) {
  this.arr = [];
  if (arr) this.arr = arr;
}

Stack.prototype.getBuffer = function () {
  return this.arr.slice();
};

Stack.prototype.isEmpty = function () {
  return this.arr.length === 0;
};

Stack.prototype.push = function (item) {
  return this.arr.push(item);
};

Stack.prototype.pop = function () {
  return this.arr.pop();
};

const stack1 = new Stack();

Stack.prototype.peek = function () {
  return this.arr[this.arr.length - 1];
};

const stackObj = {
  arr: [],
  getBuffer: function () {
    return this.arr.slice();
  },
  isEmpty: function () {
    return this.arr.length === 0;
  },
  push: function (item) {
    return this.arr.push(item);
  },
  pop() {
    return this.arr.pop();
  },
  peek() {
    return this.arr[this.arr.length - 1];
  },
};

function Queue(arr) {
  this.arr = arr ? arr : [];
}

Queue.prototype.getBuffer = function () {
  return this.arr.slice();
};

Queue.prototype.isEmpty = function () {
  return this.arr.length === 0;
};

Queue.prototype.peek = function () {
  return this.arr[0];
};

Queue.prototype.enQueue = function (item) {
  return this.arr.push(item);
};

Queue.prototype.deQueue = function () {
  return this.arr.shift();
};
