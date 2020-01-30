var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var txt1 = document.getElementById("txt1");
	var txt2 = document.getElementById("txt2");
	var txt3 = document.getElementById("txt3");
	var txt4 = document.getElementById("txt4");
	var txt5 = document.getElementById("txt5");
	var txt6 = document.getElementById("txt6");
	var txtContainer1 = document.getElementById("txtContainer1");
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
		// .set(txt1, {display:"none"})
		// .set(txt1, {display:"block"})
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {
		

		tl1.set(txt1, {display:"block"})
		.to(img, 1, {x:'-=728', ease: Expo.easeOut})
		.to(txt1, 1, {x:'-=728', ease: Expo.easeOut}, "-=.75")
		.to("#blur1feGaussianBlur", .9, {attr:{stdDeviation:"0.1 0"}, ease:Expo.easeOut}, "-=1")

		.set(txt2, {display:"block"}, "+=1")
		.to(txt2, 1, {x:'-=728', ease: Expo.easeOut})
		.to("#blur2feGaussianBlur", .9, {attr:{stdDeviation:"0.1 0"}, ease:Expo.easeOut}, "-=1")

		.to(txt2, 1, {x:'-=728', ease: Expo.easeIn}, "+=1")
		.to("#blur2feGaussianBlur", .9, {attr:{stdDeviation:"20 0"}, ease:Expo.easeIn}, "-=1")
		.set(txt2, {display:"none"})

		.set(txt3, {display:"block"}, "-=.15")
		.to(txt3, 1, {x:'-=728', ease: Expo.easeOut})
		.to("#blur3feGaussianBlur", .9, {attr:{stdDeviation:"0.1 0"}, ease:Expo.easeOut}, "-=1")

		.to(txt3, 1, {x:'-=728', ease: Expo.easeIn}, "+=1")
		.to("#blur3feGaussianBlur", .9, {attr:{stdDeviation:"20 0"}, ease:Expo.easeIn}, "-=1")
		.set(txt3, {display:"none"})

		.set(txt4, {display:"block"}, "-=.15")
		.to(txt4, 1, {x:'-=728', ease: Expo.easeOut})
		.to("#blur4feGaussianBlur", .9, {attr:{stdDeviation:"0.1 0"}, ease:Expo.easeOut}, "-=1")

		.to(txt4, 1, {x:'-=728', ease: Expo.easeIn}, "+=1")
		.to("#blur4feGaussianBlur", .9, {attr:{stdDeviation:"20 0"}, ease:Expo.easeIn}, "-=1")
		.set(txt4, {display:"none"})

		.set(txt5, {display:"block"}, "-=.15")
		.to(txt5, 1, {x:'-=728', ease: Expo.easeOut})
		.to("#blur5feGaussianBlur", .9, {attr:{stdDeviation:"0.1 0"}, ease:Expo.easeOut}, "-=1")

		.to(txtContainer2, 1, {x:'-=728', ease: Expo.easeIn}, "+=1")
		.to(txt1, 1, {x:'-=728', ease: Expo.easeIn}, "-=1")
		.to("#blur1feGaussianBlur", .9, {attr:{stdDeviation:"20 0"}, ease:Expo.easeIn}, "-=1")
		.to("#blur5feGaussianBlur", .9, {attr:{stdDeviation:"20 0"}, ease:Expo.easeIn}, "-=1")
		.set(txt1, {display:"none"})
		.set(txt5, {display:"none"})

		.set(txt6, {display:"block"}, "-=.15")
		.to(txt6, 1, {x:'-=728', ease: Expo.easeOut})
		.to("#blur6feGaussianBlur", .9, {attr:{stdDeviation:"0.1 0"}, ease:Expo.easeOut}, "-=1")

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
