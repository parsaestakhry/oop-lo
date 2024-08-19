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

const circle_new = new Circle(2)

circle_new.draw()