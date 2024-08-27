function createLimitedCounter(max) {
  let count = 0;
  this.max = max;

  this.increment = function () {
    if (count < max) {
        count ++
    }
    return count;
    
  };
}

const counter = new createLimitedCounter(5);

console.log(counter.increment());

console.log(counter.increment());

console.log(counter.increment());

console.log(counter.increment());

console.log(counter.increment());

console.log(counter.increment());
