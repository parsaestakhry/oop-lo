// factory function
function createCircle(radius) {
  return {
    // object literal
    // properties
    radius,

    // methods
    draw: function () {
      console.log("draw circle with radius of " + radius);
    },
  };
}
const circle = createCircle(1);

// constructor function

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    compute(0.1)
    console.log("draw with radius of " + radius);
  };
  this.default_location = { x: 0, y: 0 };
  // setter and getter 
  let compute = function(factor){
    console.log('hello compute')
  }
}

// they both are the same
Circle.call(window, 2);
// for passing array
Circle.apply({}, [1, 2, 3]);
const circle_new = new Circle(2);
circle_new.location = { x: 2 };

// functions are objects

// independant values
let x = { value: 10 };
let y = x;

x.value = 20;

// if they're refrence types they will point to the same place in memory other wise if they're primitive types the values will differ

// primitive => copied by value
// refrence => copied by refrence
let number_object = { value: 10 };
function increase(object) {
  object.value = object.value + 1;
}
increase(number_object.value);

delete circle_new.location;

for (let key in circle_new) {
  // returns the properties
  console.log(key, circle_new[key]);
}

console.log(Object.keys(circle_new));

if ("radius" in circle_new) {
  console.log("hello im in circle ");
}
