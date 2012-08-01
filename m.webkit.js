/*! Mobile WebKit by Markus Reiter, @reitermarkus
    
    Small fixes for iOS.


    OrientationChangeFix (by @scottjehl):
    http://github.com/scottjehl/iOS-Orientationchange-Fix/

*/

window.onload = (function MobileWebKit(w){

	var	thisDomain;
	//	thisDomain = 'example.com';  /* If it doesn't work automatically, uncomment this line and set your domain manually, without 'http://'. */
	
	var extLinkClass = 'external'; /* Change the outgoing link class, if not needed delete it or set it to ''. */

	function WebAppLinks(){
		
		var URL = {
		    pattern: /https?:\/\/([^\/]*)\//,
		    current: window.location.href,
		    getCurrent: function() {
		        return this.current.match(this.pattern)[1];
		    }
		}

		if(thisDomain == undefined || thisDomain.length === 0) {
			thisDomain = URL.getCurrent();
		}

		var a = document.getElementsByTagName('a');

		setTimeout(function(){
			for(var i = 0; i < a.length; i++){
				var href = a[i].href;
				var matches = href.match(URL.pattern);

				if(a[i].className.match(extLinkClass)){
					/* do nothing */
				} else if(matches[1] && matches[1] != thisDomain){
					if(extLinkClass != undefined && extLinkClass.length > 0){
						a[i].className += " " + extLinkClass; /* Space to not overwrite existing classes */
					};
				} else {
					a[i].onclick = function () {
						window.location = this.getAttribute('href'); /* set current window location to clicked link */
						return false;
					};
				};
			};
		}, 50);

	}


	function HideAdressBar(){

		setTimeout(function(){

			window.scrollTo(0, 0.9); 

		}, 50);

	}


	function OrientationChangeFix(){

		/* This fix addresses an iOS bug, so return early if the UA claims it's something else. */
		var ua = navigator.userAgent;
		if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(ua) && ua.indexOf( "AppleWebKit" ) > -1 ) ){
			return;
		}

		var doc = w.document;

		if( !doc.querySelector ){ return; }

		var meta = doc.querySelector( "meta[name=viewport]" ),
			initialContent = meta && meta.getAttribute( "content" ),
			disabledZoom = initialContent + ",maximum-scale=1",
			enabledZoom = initialContent + ",maximum-scale=10",
			enabled = true,
			x, y, z, aig;

		if( !meta ){ return; }

		function restoreZoom(){
			meta.setAttribute( "content", enabledZoom );
			enabled = true;
		}

		function disableZoom(){
			meta.setAttribute( "content", disabledZoom );
			enabled = false;
		}

		function checkTilt( e ){
			aig = e.accelerationIncludingGravity;
			x = Math.abs( aig.x );
			y = Math.abs( aig.y );
			z = Math.abs( aig.z );

			/* If portrait orientation and in one of the danger zones */
			if( (!w.orientation || w.orientation === 180) && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
			
				if( enabled ){
					disableZoom();
				}
			
			} else if( !enabled ){
				restoreZoom();
			}
		}

		w.addEventListener( "orientationchange", restoreZoom, false );
		w.addEventListener( "devicemotion", checkTilt, false );

	}

	w.initialize = function() { /* Comment out or delete the ones you don't need. */
		OrientationChangeFix();
		HideAdressBar();
		WebAppLinks();
	}
	w.initialize();
})( this );