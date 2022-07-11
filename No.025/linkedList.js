function SingleNode(data) {
  this.data = data;
  this.next = null;
}

function SingleLinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

SingleLinkedList.prototype.isEmpty = function () {
  return this.size === 0;
};

SingleLinkedList.prototype.insert = function (item) {
  if (this.head === null) {
    this.head = new SingleNode(item);
    this.tail = this.head;
  } else {
    const temp = new SingleNode(item);
    this.tail.next = temp;
    this.tail = temp;
  }
  return ++this.size;
};

SingleLinkedList.prototype.remove = function (item) {
  let curr = this.head;
  if (curr.data === item) {
    this.head = curr.next;
    curr.next = null;
    --this.size;
    return curr.data;
  }
  while (curr !== this.tail) {
    if (curr.next.data === item) {
      const temp = curr.next;
      curr.next = temp.next;
      temp.next = null;
      --this.size;
      return temp.data;
    }
    curr = curr.next;
  }
};

SingleLinkedList.prototype.contains = function (item) {
  let curr = this.head;
  while (curr) {
    if (curr.data === item) {
      return true;
    }
    curr = curr.next;
  }
  return false;
};

// 확인용
SingleLinkedList.prototype.getData = function () {
  const tempArr = [];
  let curr = this.head;
  while (curr) {
    tempArr.push(curr.data);
    curr = curr.next;
  }
  return tempArr;
};

const singleList = new SingleLinkedList();
singleList.insert(1);
singleList.insert(2);
singleList.insert(3);
singleList.insert(4);

const delData1 = singleList.remove(5);

console.log(delData1);

console.log(singleList);
console.log(singleList.contains(3));
console.log(singleList.getData());

function DoubleNode(item = null, prev = null) {
  this.data = item;
  this.prev = prev;
  this.next = null;
}

function DoubleLinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

DoubleLinkedList.prototype.isEmpty = function () {
  return this.size === 0;
};

DoubleLinkedList.prototype.insert = function (item) {
  if (this.head === null) {
    this.head = new DoubleNode(item);
    this.tail = this.head;
  } else {
    const temp = new DoubleNode(item, this.tail);
    this.tail.next = temp;
    this.tail = temp;
  }
  this.size += 1;
};

DoubleLinkedList.prototype.remove = function (item) {
  let curr = this.head;
  if (curr.data === item) {
    this.head = curr.next;
    this.head.prev = null;
    curr.next = null;
    --this.size;
    return curr.data;
  }
  while (curr !== this.tail) {
    if (curr.next.data === item) {
      const temp = curr.next;
      curr.next = temp.next;
      temp.next = null;
      temp.prev = null;
      if (curr.next) curr.next.prev = curr;
      else this.tail = curr;
      --this.size;
      return temp.data;
    }
    curr = curr.next;
  }
};

DoubleLinkedList.prototype.contains = function (item) {
  let curr = this.head;
  while (curr) {
    if (curr.data === item) {
      return true;
    }
    curr = curr.next;
  }
  return false;
};

// 확인용
DoubleLinkedList.prototype.getData = function () {
  const tempArr = [];
  let curr = this.head;
  while (curr) {
    tempArr.push(curr.data);
    curr = curr.next;
  }
  return tempArr;
};

const doubleList = new DoubleLinkedList();
console.log(doubleList);

doubleList.insert(1);
doubleList.insert(2);
doubleList.insert(3);
doubleList.insert(4);
console.log(doubleList);

doubleList.remove(7);
console.log(doubleList);
console.log(doubleList.getData());
console.log(doubleList.contains(6));

function CircularLinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

CircularLinkedList.prototype.isEmpty = function () {
  return this.size === 0;
};

CircularLinkedList.prototype.insert = function (item) {
  if (this.head === null) {
    this.head = new SingleNode(item);
    this.tail = this.head;
    this.head.next = this.head;
  } else {
    const temp = new SingleNode(item);
    temp.next = this.head;
    this.tail.next = temp;
    this.tail = temp;
  }
  return ++this.size;
};

CircularLinkedList.prototype.remove = function (item) {
  let curr = this.head;
  if (curr.data === item) {
    this.head = curr.next;
    this.tail.next = this.head;
    curr.next = null;
    --this.size;
    return curr.data;
  }
  while (curr !== this.tail) {
    if (curr.next.data === item) {
      const temp = curr.next;
      curr.next = temp.next;
      temp.next = null;
      --this.size;
      return temp.data;
    }
    curr = curr.next;
  }
};

CircularLinkedList.prototype.contains = function (item) {
  let curr = this.head;
  while (curr) {
    if (curr.next.data === item) return true;

    if (curr.next === this.head) return false;
    curr = curr.next;
  }
  return false;
};

// 확인용
CircularLinkedList.prototype.getData = function () {
  const tempArr = [];
  let curr = this.head;
  while (curr) {
    if (curr === this.head && tempArr.length) break;
    tempArr.push(curr.data);
    curr = curr.next;
  }
  return tempArr;
};

const circularList = new CircularLinkedList();
console.log(circularList);

circularList.insert(1);
circularList.insert(2);
circularList.insert(3);
circularList.insert(4);
console.log(circularList);

circularList.remove(7);
console.log(circularList);
console.log(circularList.getData());
console.log(circularList.contains(2));
