function setup() {
    createCanvas(600, 400);
   background ("black")
  }
  
  function draw() {
    fill("white")
    stroke("blue")
  
   //console.log(MouseIsPressed)
  if (mouseIsPressed)
   rect(mouseX, mouseY, 70, 30)
  }