# nav-tabs-booklet / p5.js integration (not responsive yet)

main branch comment: 

The idea of ​​this code was to make a light and simple application on the web page. Following this principle I chose to use tailwind css and alpine js to style and animate directly in the html document. The application allows you to put content on the canvas and create an internal navigation menu on the same page. I also used the $persist apline plugin to allow the user to reload the page and not lose the table of contents they were in.

p5.js-integration branch comment:

I implemented the library p5.js to the project to make it interactive. To keep things simple I installed p5.js via the Visual Studio Code extension: p5.vscode v1.2.8. It creates automatically a sketch.js file, a  new index.html (if you dont have one already), a style.css file and a directory called libraries. To keep things simple I deleted the libraries directory and installed the p5.js sound and mini libraries via CDN from the p5js.org page:  http://staging.p5js.org/get-started/

I commented the CDN installations of the project to make it easy to see.

Then I created a simple elipisis animation in the sketch.js file and added it to the cover tab of the project using:

// Add the following comment to html file.
 // <div id="myContainer"></div>
// The js code
 let cnv = createCanvas(100, 100);
 cnv.parent('myContainer');

I hope this make sense.... !
