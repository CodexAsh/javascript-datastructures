class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;

    this.length = 1;
  }

  append(value) {
    const newNode = { value: value, next: null };

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = { value: value, next: null };

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  printList() {
    let array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }

  insert(index, value) {
    let a = this.printList();
    const newNode = { value: value, next: null };

    if (index >= this.length) {
      return this.append(value);
    }

    const leader = this.traversetoIndex(index - 1);

    const holdingPointer = leader.next;

    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;

    return this.printList();
  }

  remove(index) {
    if (index <= 0) {
      let head = this.traversetoIndex(index);
      let nexttohead = head.next;
      this.head = nexttohead;
      this.length--;
    } else if (index >= this.length - 1) {
      let leader = this.traversetoIndex(index - 1);

      this.tail = leader;
      leader.next = null;
      this.length--;
    } else {
      const leader = this.traversetoIndex(index - 1);
      const gettingrid = leader.next;
      leader.next = gettingrid.next;
      this.length--;
      return this.printList();
    }
  }

  traversetoIndex(index) {
    let currentNode = this.head;
    let counter = 0;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const mylinkedList = new LinkedList(10);
mylinkedList.append(5);
mylinkedList.append(16);
mylinkedList.append(400);
mylinkedList.printList();
mylinkedList.remove(3);
mylinkedList.printList();

console.log(mylinkedList);
