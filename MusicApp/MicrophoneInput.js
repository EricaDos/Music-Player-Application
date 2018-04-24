function MicrophoneInput(){
  this.name = "Intro";
    this.draw = function(){


      // var mic;
      var mic_freq = mic.getLevel();
      mic.start();

      push();

      camera_on = image(capture, 1000, 100, 200, 200); //Displays the camera
    	if (camera_on = true){
    		if(CameraButton)
    		camState = 1;
    	} else if (camera_on = false && CameraButton){
    		camState = 0;
    	}

      fill(100,200,50);


      var spectrum = fft.analyze();
      // peakDetect accepts an fft post-analysis
      peakDetection.update(fft);

      fill(0,50,100);
      stroke(0,200,100);
      strokeWeight(1);
      amp.smooth(0.8);

      for (var i = 0; i< spectrum.length; i+=10){
          var x = map(i , 0, spectrum.length, 0, width);
          var h = -height + map(spectrum[i], 0, 255, height, 0);
          rect(x, height -200, (width / spectrum.length) * 5, h )
      }
      pop();
    };
  }
