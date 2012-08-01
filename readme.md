# Mobile WebKit

---------------

## What does it do?**
<br />
<br />
### 1. Fix for web app links  
By default, when added to home screen, it will launch as a fullscreen web app. And all links will open up MobileSafari with a new tab.   
This fix detects internal links, so that only outgoing links open in a new Safari tab.   

    <meta name="apple-mobile-web-app-capable" content="yes" />

### 2. Fix for URL bar on top:  
When you open a page in MobileSafari the URL bar is visible by default.      
This fix scrolls to the top on page load so the URL bar is hidden.      
<br />
### 3. Fix for the famous orientation change bug (by [@scottehl](https://github.com/scottjehl/iOS-Orientationchange-Fix)):  
This fix disables zoom when the device is rotated, so that is doesn't zoom in the page when going into landscape.       

    <meta name="viewport" content="width=device-width, initial-scale=1.0" >