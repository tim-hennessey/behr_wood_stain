var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var txt1 = document.getElementById("txt1");
	var txt2 = document.getElementById("txt2");
	var txt3 = document.getElementById("txt3");
	var txt4 = document.getElementById("txt4");
	var logo2 = document.getElementById("logo2");
	var cta = document.getElementById("cta");

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
		
		// tl1.to(img, 1.5, {x:'-=300', z: 0.1, force3D: true, ease: Expo.easeOut})
		// .to(txt1, 6, {x:'-=600', z: 0.1, force3D: true, ease:SlowMo.ease.config(.2, .8, false)}, "-=1.5")
		// .to(txt2, 6, {x:'-=600', z: 0.1, force3D: true, ease:SlowMo.ease.config(.2, .8, false)}, "-=.5")
		// .to(txt3, 6, {x:'-=600', z: 0.1, force3D: true, ease:SlowMo.ease.config(.2, .8, false)}, "-=.5")
		// .to(txt4, 2, {x:'-=300', z: 0.1, force3D: true, ease: Circ.easeOut}, "-=.5")
		// .to(logo2, .5, {opacity:0})
		// .to(cta, .5, {opacity:1}, "-=.25");

		tl1.to(img, 1.5, {x:'-=300', ease: Expo.easeOut})
		.to(txt1, 6, {x:'-=600', ease:SlowMo.ease.config(.2, .8, false)}, "-=1.5")
		.to(txt2, 6, {x:'-=600', ease:SlowMo.ease.config(.2, .8, false)}, "-=.5")
		.to(txt3, 6, {x:'-=600', ease:SlowMo.ease.config(.2, .8, false)}, "-=.5")
		.to(txt4, 2, {x:'-=300', ease: Circ.easeOut}, "-=.5")
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
