var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var txt1 = document.getElementById("txt1");
	var t = TweenMax;
	var tl1 = new TimelineMax();
	var tl2 = new TimelineMax();

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});
		
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {
		
		tl1.to(img, 1.5, {left:'-=300', ease: Expo.easeOut})
		.to(txt1, 6, {left:'-=600', ease:SlowMo.ease.config(.2, .8, false)}, "-=1.5")
		.to(txt2, 6, {left:'-=600', ease:SlowMo.ease.config(.2, .8, false)}, "-=.5")
		.to(txt3, 6, {left:'-=600', ease:SlowMo.ease.config(.2, .8, false)}, "-=.5")
		.to(txt4, 2, {left:'-=300', ease: Circ.easeOut}, "-=.5")
		.to(logo2, .5, {opacity:0})
		.to(cta, .5, {opacity:1}, "-=.25");
						
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
