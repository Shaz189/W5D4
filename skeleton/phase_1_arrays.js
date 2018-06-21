Array.prototype.uniq = function() {
  const dup_array = [];
  this.forEach(el => {  
    if (dup_array.includes(el)) { return; }
    dup_array.push(el);  
  });
  return dup_array;
};

Array.prototype.twoSum = function() {
  let i = 0;
  const sum_index = [];
  this.forEach(el => {
    let i2 = 0;
    this.forEach(el2 => {
      if (i === i2) { return; }
      if (el + el2 === 0 ) {
        sum_index.push([i, i2]);
      }
      i2++;
    });
    i2 = 0; 
    i++;
  });
  return sum_index;
};

// let arr = [[1,2,3],[4,5,6],[7,8,9]]

Array.prototype.transpose = function() {
  let new_arr = [];
  let i = 0;
  this.forEach(el => {
    new_arr.push(Array(this.length));
  });
  
  i = 0;    
  this.forEach(el => {
    let j = 0;
    this.forEach(el2 => {
      // debugger
      new_arr[j][i] = this[i][j]; 
      j++;
    });
    j = 0;
    i++;
  });
  return new_arr;
};

// my each 

Array.prototype.myEach = function(arg) {
  for( i = 0; i < this.length; i++) {
    arg(this[i]);
  }
};

function add100CB(el) {
  let thing = el + 100;
  return thing;
}
// for( i = 0; i < this.length; i++)

let arr = [1,2,3,4,5,6];

// arr.myMap(add100CB)

Array.prototype.myMap = function(myMapCB) {
  const arr = [];
  
  function myEachCB(el) {
    arr.push(myMapCB(el));
  } 
  
  this.myEach(myEachCB);
  
  return arr;
};

//myReduce
function myADD(acc,el) {
  acc += el;
}

// Array.prototype.myReduce = function(arg, starter) {
//   let acc = starter;
//   if (typeof acc === 'undefined') {
//     acc = 0;
//   }
// 
//   this.myEach(arg);
//   return acc;
// 
// };

// division
function divideMe(acc, el){
  return (acc / el);
}

function addMe(acc, el) {
  return (acc + el);
}
Array.prototype.myReduce = function(operation, starter) { 
  let acc;
  if (typeof starter === 'undefined') {
    acc = this[0];
    arr = this.slice(1, (this.length - 1));
  } else { acc = starter;
    arr = this;
  }
  function happeningInEach(el) {
    acc = operation(acc, el);
  }
  
  arr.myEach(happeningInEach);
  return acc;
};

