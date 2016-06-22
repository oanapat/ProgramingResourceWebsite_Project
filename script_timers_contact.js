// Two methods for timers - setTimeout and SetInterval (single / repeating)

function simpleMessage() {
	alert("This is just an alert box");
}

// settimeout is in milliseconds
//setTimeout(simpleMessage,5000);

var myImage = document.getElementById(".contact");

var imageArray = ["wp_images/be-the-change-you-wish-to-see-in-the-world_eatingrules.com_how-to-change-the-world.jpg","wp_images/beautiful-flowers-friends-friendship-girl-Favim.com-261816 (500x250).jpg"];
var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

// setInterval is also in milliseconds
var intervalHandle = setInterval(changeImage,5000);

myImage.onclick =  function() {
	clearInterval(intervalHandle);
};







