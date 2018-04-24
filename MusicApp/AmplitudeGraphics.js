function AmplitudeGraphics(){
  this.name = "Amplitude and Beat Detection";
  var spectrum = fft.analyze();
  //Updates the fft to be able to create an average
  peakDetection.update(fft);
  var red =0,green =0, blue=0,opc=0;


  this.draw = function(){
    push();

    var MidiState = false;

    background(51);

    stroke(0,255,255)
    push();
    noFill();
    stroke(100,200, 0);
    strokeWeight(4);

    beginShape();
    //calculate the waveform from the fft.
    var waveform = fft.waveform();
    for (var i = 0; i < waveform.length; i++){
      strokeWeight(1);
      //for each element of the waveform map it to screen
      //coordinates and make a new vertex at the point.
      var waveX = map(i, 0, waveform.length, 0, width);
      var waveY = map(waveform[i], -1, 1, 0, height);
      //Creates the wave
      vertex(waveX, waveY);
    }
    ellipse(width / 2 , height / 2, 10 + rootMean * (height / 2), 10 + rootMean * (height / 2) );
    endShape();

    //Root Mean Square - Measuring the Amplitude to detect for changes in the beats
    var rootMean = 0;


    //Controls the changing of colors depending on the peakDetection and adds opacity to be able to give the effect of growing in and out.
    if(peakDetection.isDetected){
      rootMean = amp.getLevel();
      red = 250;
      green = -250;
      blue = -250;
      opc = 0.5;
    } else {
      red = red * .55;
      green = green * .55;
      blue = blue * .55;
      opc = opc * .55;
      rootMean = amp.getLevel();
    }
    //Adding transparency to when it fades
    //pareseInt passes a string into an integer and therefore changing the dataType to allow change in color for when the beat is changed based off the rootMean and the use of the peakDetection
    stroke(0,0,255)
    fill('rgba('+parseInt(250 + red)+','+parseInt(50 + green)+','+parseInt(100 + blue)+','+(.5 + opc)+')');
    ellipse(width / 2 , height / 2, 10 + rootMean * (height / 2), 10 + rootMean * (height / 2) );


    pop();
  }
}
