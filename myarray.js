// Implementing Data Structure Array
// Arrays are objects
// Objects has Properties and methods.
// Propertires can be accessed by objectname(dot.)propertyname
// Methods can are called by paraenthesis () -> object.methodname()
// Class are just what we copy to make different objects of same type.
// this keyword refers to which object we are right now

class MyArray {
  // First method that runs when we instantiates an object
  constructor() {
    console.log(this);
    this.length = 0;
    this.data = {};
  }

  // Getting Item By an Index
  get(index) {
    return this.data[index];
  }

  // Pushing item in data

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  // pop delete last elements in an array. Doesn't take any arguments. // It also returns the last items it deleted
  pop() {
    const lastitem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastitem;
  }

  // Deleting Item of Specified Index

  deleteIndex(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    console.log(this.data[this.length - 1]);
    delete this.data[this.length - 1];
    this.length--;
  }
}

const array1 = new MyArray();
array1.push("Hi");
array1.push("Ashish");
array1.push("!");
array1.push("Hah");
array1.push("hahah");
array1.push("Fuck");
console.log(array1.deleteIndex(3));
console.log(array1);
