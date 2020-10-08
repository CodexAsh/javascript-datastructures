class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
  
  set(key, value)
  {
    let address = this._hash(key)
   
    if (!this.data[address])
    {
      this.data[address]  = []
    }
    this.data[address].push([key,value])
    
    
  }

 get(key){
    const address = this._hash(key);
    const currentBucket = this.data[address]
    if (currentBucket) {
      for(let i = 0; i < currentBucket.length; i++){
        if(currentBucket[i][0] === key) {
          //console.log(this.data)

          return currentBucket[i][1]
        }
      }
    }
    return undefined;
  }

  
  
}


const myHashTable = new HashTable(50);
myHashTable.set('grapes', 9)
myHashTable.set('apple',10)
myHashTable.set('yo',11)
myHashTable.set('to',12)
myHashTable.set('ashish',13)
console.log(myHashTable.get('yo'))
