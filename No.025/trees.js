function TreeNode(item) {
  this.data = item;
  this.children = [];
}

const tree = new TreeNode(1);
tree.children.push(new TreeNode(2));
tree.children.push(new TreeNode(3));
console.log(tree);

function getTreeData(tree, order) {
  if (tree === null) return [];
  let tempArr = [];
  switch (order) {
    case "pre":
      tempArr.push(tree.data);
      if (tree.left) tempArr = tempArr.concat(getTreeData(tree.left, "pre"));
      if (tree.right) tempArr = tempArr.concat(getTreeData(tree.right, "pre"));
      break;
    case "in":
      if (tree.left) tempArr = tempArr.concat(getTreeData(tree.left, "in"));
      tempArr.push(tree.data);
      if (tree.right) tempArr = tempArr.concat(getTreeData(tree.right, "in"));
      break;
    case "post":
      if (tree.left) tempArr = tempArr.concat(getTreeData(tree.left, "post"));
      if (tree.right) tempArr = tempArr.concat(getTreeData(tree.right, "post"));
      tempArr.push(tree.data);
      break;
  }
  return tempArr;
}

function BinaryTreeNode(item) {
  this.data = item;
  this.left = null;
  this.right = null;
}

BinaryTreeNode.prototype.insert = function (item) {
  if (this.left === null) this.left = item;
  else if (this.right === null) this.right = item;
  else return [this.left, this.right];
  return [item];
};

function BinaryTree() {
  this._root = null;
}

BinaryTree.prototype.insert = function (item) {
  const tempNode = new BinaryTreeNode(item);
  if (this._root === null) {
    this._root = tempNode;
  } else {
    let insertArr = [this._root];
    let isInsert = false;
    let idx = 0;
    while (!isInsert) {
      const tempArr = insertArr[idx].insert(tempNode);
      if (tempArr.length === 1) isInsert = true;
      insertArr = insertArr.concat(tempArr);
      idx++;
    }
  }
  return this._root;
};

// 확인용
BinaryTree.prototype.getData = function () {
  const dataArr = [];
  let nodeArr = [this._root];
  let idx = 0;
  while (nodeArr.length > idx) {
    dataArr.push(nodeArr[idx].data);
    if (nodeArr[idx].left) nodeArr = nodeArr.concat(nodeArr[idx].left);
    if (nodeArr[idx].right) nodeArr = nodeArr.concat(nodeArr[idx].right);
    idx++;
  }
  return dataArr;
};

const binaryTree = new BinaryTree();
binaryTree.insert(1);
binaryTree.insert(2);
binaryTree.insert(3);
binaryTree.insert(4);
binaryTree.insert(5);
binaryTree.insert(6);
binaryTree.insert(7);
console.log(binaryTree);
console.log(binaryTree.getData());

function BinarySearchTree() {
  this._root = null;
}

BinarySearchTree.prototype.insert = function (item) {
  if (this._root === null) {
    this._root = new BinaryTreeNode(item);
  } else {
    let node = this._root;
    while (1) {
      if (node.data > item) {
        if (node.left) node = node.left;
        else {
          node.left = new BinaryTreeNode(item);
          break;
        }
      } else if (node.data < item) {
        if (node.right) node = node.right;
        else {
          node.right = new BinaryTreeNode(item);
          break;
        }
      } else break;
    }
  }
};

BinarySearchTree.prototype.remove = function (item, node = null) {
  if (this._root === null) return;
  if (node === null) node = this._root;
  if (node.data > item && node.left) node.left = this.remove(item, node.left);
  else if (node.data < item && node.right)
    node.right = this.remove(item, node.right);
  else {
    if (node.left === null && node.right === null) {
      return null;
    } else if (node.left === null) {
      node = node.right;
      return node;
    } else if (node.right === null) {
      node = node.left;
      return node;
    } else {
      let temp = node.right;
      if (temp) {
        while (temp.left !== null) {
          temp = temp.left;
        }
      }
      node.data = temp.data;
      node.right = this.remove(temp.data, node.right);
      return node;
    }
  }
  return node;
};

BinarySearchTree.prototype.getData = function () {
  const dataArr = [];
  let nodeArr = [this._root];
  let idx = 0;
  while (nodeArr.length > idx) {
    dataArr.push(nodeArr[idx].data);
    if (nodeArr[idx].left) nodeArr = nodeArr.concat(nodeArr[idx].left);
    if (nodeArr[idx].right) nodeArr = nodeArr.concat(nodeArr[idx].right);
    console.log(nodeArr[idx]);
    idx++;
  }
  return dataArr;
};

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(4);
binarySearchTree.insert(2);
binarySearchTree.insert(6);
binarySearchTree.insert(1);
binarySearchTree.insert(3);
binarySearchTree.insert(7);
binarySearchTree.insert(5);

console.log(binarySearchTree);
console.log(binarySearchTree.getData());

binarySearchTree.remove(6);

console.log("binaryTree pre :", getTreeData(binaryTree._root, "pre"));
console.log("binaryTree in :", getTreeData(binaryTree._root, "in"));
console.log("binaryTree post :", getTreeData(binaryTree._root, "post"));
console.log(
  "binarySearchTree pre :",
  getTreeData(binarySearchTree._root, "pre")
);
console.log("binarySearchTree in :", getTreeData(binarySearchTree._root, "in"));
console.log(
  "binarySearchTree post :",
  getTreeData(binarySearchTree._root, "post")
);
