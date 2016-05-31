/** nightnight.みんな v1.0 | MIT License | https://git.io/vwz9N */

window.nightnightHide = function() {
	var banners = document.getElementsByClassName('nightnight');

	for (var i = 0; i < banners.length; i++) {
		banners[i].style.display = 'none';
	}
};

(function(){
	var d = new Date();
	var m = d.getHours() * 60 + d.getMinutes();
	var bh = 8, bm = 0;
	var eh = 6, em = 0;

	var use12HourClock = true;

	var b = bh * 60 + bm;
	var e = eh * 60 + em;

	if (b < e) {
		console.log("WARNING: NightNight: invalid time interval: sleep time is earlier in the day than wakeup time");
		return
	}

	if (m >= b || m <= e) {
		console.log('NightNight activated')

		// Inject CSS
		var css = '.nightnight {background: #4CAF50; font-family: "Lato", Arial, sans-serif; font-weight: 900; color: #fff; font-size: 84px; padding: 5%; position: fixed; margin: 0; top: 0; left: 0; width: 100%; height: 100%; z-index: 9999; } .nightnight-skip a {padding: 10px 0; } .nightnight a:link {color: #555; } .nightnight a:visited {color: #555; } .nightnight a:hover {color: #FFF; } .nightnight-timing {font-size: 84px; font-weight: 900; } .nightnight-skip {font-style: italic; font-size: 24px; margin-top: 40px; } .nightnight-credits {position: fixed; bottom: 20px; right: 20px; margin-top: 40px; font-size:9px; }';
		var head = document.head || document.getElementsByTagName('head')[0];
		var style = document.createElement('style');
		style.type = 'text/css';
		if (style.styleSheet){
			style.styleSheet.cssText = css;
		} else {
			style.appendChild(document.createTextNode(css));
		}
		head.appendChild(style);

		// Format time
		var time = ''
		if (use12HourClock) {
			var suffix = eh < 12 ? "AM" : "PM"
			time = (eh % 13) + ":" + ("0"+em).slice(-2) + " " + suffix;
		} else {
			time = ("0"+eh).slice(-2) + ":" + ("0"+em).slice(-2)
		}

		// Inject DIV
		var wrapper = document.createElement('div');
		wrapper.innerHTML = '<div class="nightnight"><div>It&rsquo;s late&hellip;</div><div> Nothing I can offer you is more important than your sleep.</div> <div> Sleep well, sweet dreams, and we will catch you in the morning.</div> <div class="nightnight-timing">This site will wake up at ' +
			time +
			'</div> <div class="nightnight-skip"> <a href="javascript:nightnightHide()">I&rsquo;ll sleep later, I really need to use this site right now &rightarrow;</a> </div>  </div>';
		document.body.appendChild(wrapper);
	}
})();
