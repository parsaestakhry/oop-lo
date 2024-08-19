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
circle.draw();
