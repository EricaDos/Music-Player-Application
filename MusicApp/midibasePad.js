// //Addition of extra sound features over the songs that are being displayed
//   Have to add the to the features
this.MidibasePad = function(){
  this.name = "MidiBaseBoard"


  // A sound file object
  var sirenobj;

  //Trigger the sound
  var sirenButton;

  //Description of the siren button.
  var SirenButton = function(x1, y1, r1) {
    // Location and size
    var x = x1;
    var y = y1;
    var r = r1;

    // Mouse rollover, location of the mouse in the sirenButton
    this.contains = function(mx, my) {
      if (dist(mx, my, x, y) < r) {
        return true;
      } else {
        return false;
      }
    };

    this.display = function(mx, my) {
      if (this.contains(mx, my)) {
        fill(255,0,0);
        strokeWeight(2)
        stroke(0,255,0)
        text("Click Me")
      } else {
        fill(0,0,255);

      }
      stroke(0);
      strokeWeight(4);
      ellipse(x, y, r, r);
    };

    this.draw = function() {
      push();
      background(255);
      sirenButton.display(mouseX, mouseY);
    }
    pop();


    function mousePressed() {
      // If the user clicks on the doorbell, play the sound!
      if (sirenButton.contains(mouseX, mouseY)) {
        sirenobj.play();
      }
    }
};

}
