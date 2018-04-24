
function CameraButton(){

	this.x = 20;
	this.y = 80;
	this.width = 20;
	this.height = 20;
	var camState = 0;

	//Checks the setting for the camera

	this.camera_setting = false;

	this.draw = function(){

// The designs of the camera button when one and when off.
		if(this.camera_setting && camState > 1){
			fill(255,0,100)
			rect(this.x, this.y, this.width, this.height);

		}
		else if(this.camera_setting && camState < 1){
			fill(0,0,255)
			ellipse(this.x, this.y+10, this.width, this.height);


		}
	};
// This to see if the camera is on

	this.camCheck = function(){


			if(mouseX > this.x && mouseX < this.x +this.width && mouseY > this.y && mouseY < this.y + this.height){

			camState++;
			// console.log(camState)
			if (camState == 1){
				// console.log("Camera On",camState,camera_on)

			} else if (camState < 1){
				// console.log("Camera Off",camera_on)
			}
				this.camCheck= !this.camCheck;
				return true;
		}
			return false;
	};


}
