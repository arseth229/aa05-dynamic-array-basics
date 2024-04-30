class DynamicArray {

  constructor(defaultSize = 4) {
    this.defaultSize = defaultSize; 
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);

    
  }

  read(index) {
    return this.data[index];
  }

  unshift(val) {
    this.data.push(val);
    for (let i = this.data.length - 1; i > 0; i--) {
      [this.data[i - 1], this.data[i]] = [this.data[i], this.data[i - 1]]
    }
    this.length++
  }

}



let dynamicArr = new DynamicArray();
dynamicArr.unshift(1);
dynamicArr.unshift(2);
dynamicArr.unshift(3);


module.exports = DynamicArray;
