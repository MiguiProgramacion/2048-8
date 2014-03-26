// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
		"../jpg/2.jpg",
		"../jpg/4.jpg",
		"../jpg/8.jpg",
		"../jpg/16.jpg",
		"../jpg/32.jpg",
		"../jpg/64.jpg",
		"../jpg/128.jpg",
		"../jpg/256.jpg",
		"../jpg/512.jpg",
		"../jpg/1024.jpg",
		"../jpg/2048.jpg",
    ];
    for(var i = 0; i < imageList.length; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
