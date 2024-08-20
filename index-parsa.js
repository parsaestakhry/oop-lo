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
const circle = createCircle(1)

// constructor function

function Circle(radius){
    this.radius = radius
    this.draw = function (){
        console.log('draw with radius of ' + radius)
    }
}

// they both are the same
Circle.call(window, 2)
// for passing array
Circle.apply({}, [1,2,3])
const circle_new = new Circle(2)


// functions are objects 