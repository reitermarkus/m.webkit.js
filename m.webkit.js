/*! m.webkit.js v1.1 | git.io/ax3e6A | @reitermarkus */

;(function(d,w,n,l,s){

  w.onload = function() {

    hideAddressBar()
    webAppLinks()
    scaleBugFix()

  }

  var standalone = s in n && n[s] // Check if added to Home Screen.

  /* Hide the MobileSafari URL bar by scrolling the page to the top. */
  function hideAddressBar() {
  
    /mobile/i.test(n.userAgent) && !l.hash && !standalone && setTimeout(
      w.scrollTo(0, 0.9)
    , 100)

  }

  /* Open only external links in a new MobileSafari window (resulting in exiting the Web App). */
  function webAppLinks() {

    if(standalone) {
      var t
         
      d.addEventListener('click', function(e) {
        t = e.target
        
        while(!/^(a|html)$/i.test(t.nodeName)) t = t.parentNode
        
        'href' in t && !(~t.href.indexOf('//') === 0 || ~t.href.indexOf(l.hostname) === 0) && (e.preventDefault(), l.href = t.href)
       
      }, !1)
    }
  }
  
  /* Address the infamous iOS scale bug if the orientation is changed. (By @scottjehl, modified by @wilto, @peterwooster, and @reitermarkus.) */
  function scaleBugFix() {

    // If not iOS or if Chrome for iOS, return.
    var ua = n.userAgent
    if(!(/iPhone|iPad|iPod/.test(n.platform) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(ua) && ua.indexOf('AppleWebKit') > -1 && ua.indexOf('CriOS') === -1)) return

    if(!d.querySelector) return
    var meta = d.querySelector('meta[name=viewport]')
    if(!meta) return

    var initialContent = meta && meta.getAttribute('content')
       ,disabledZoom = initialContent + ',maximum-scale=1'
       ,enabledZoom = initialContent + ',maximum-scale=10'
       ,enabled = 1
       ,x, y, z, aig

    function restoreZoom() {
      meta.setAttribute('content', enabledZoom)
      enabled = 1
    }

    function disableZoom() {
      meta.setAttribute('content', disabledZoom)
      enabled = 0
    }

    function checkTilt(e) {

      // If landscape, return.
      if(90 === Math.abs(w.orientation)) {
        if(enabled) restoreZoom()
        return
      } 

      aig = e.accelerationIncludingGravity
      x = Math.abs(aig.x)
      y = Math.abs(aig.y)

      // If in the danger zone where x is much greater than y, turn zoom off.
      if(y === 0 || (x/y) > 1.2) {
        if(enabled) disableZoom()
      } else if(!enabled) restoreZoom()
    }

    w.addEventListener('orientationchange', restoreZoom, !1)
    w.addEventListener('devicemotion', checkTilt, !1)

  }


})(document, this, navigator, location, 'standalone')