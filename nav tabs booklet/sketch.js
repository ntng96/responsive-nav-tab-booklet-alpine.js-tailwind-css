
// var coverA;

function setup() {
  let cnv = createCanvas(800, 500, WEBGL);
  cnv.parent('myContainer');
  background('red');

 

    
}


// function changeBackground() {

//   coverA.style('background-color', 'red')
// }

function draw() {
  
  
  rotateY(millis() / 1000);
  
  sphere(150);
  
}