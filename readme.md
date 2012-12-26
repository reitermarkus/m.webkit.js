# Mobile WebKit

---------------



# About

In this kit you find some useful features and bug fixes, and also some tips for your Mobile Web Development.



# What's inside?

## When added as [Full-Screen](#make-it-full-screen) App, only open outgoing links in Safari  
By default, when added to home screen, it will launch as a fullscreen web app. 
And all links will open up MobileSafari with a new tab.  
This fix detects internal links, so that only outgoing links open in a new Safari tab.  

## Hide top URL bar (scroll to top) on page refresh in Mobile Safari  
When you open a page in MobileSafari the URL bar is visible by default. 
This fix scrolls to the top on page load so the URL bar is hidden.  

## MobileSafari [Orientation Change Fix](https://github.com/scottjehl/iOS-Orientationchange-Fix) by [@scottehl](https://github.com/scottjehl)  
This fix disables zoom when the device is rotated, so that is doesn't zoom in the page when going into landscape. For this to work set the following meta tag.

    <meta name=viewport content="width=device-width,initial-scale=1.0">
    


# Useful Tips and Tricks

## The Title
Be sure to check if your title doesn't exceed the character limit, which I found is at about 12-13, depending on which characters it contains. You will have to experiment.

    <title>My Web App</title>


## Bookmark Icons

To set your icons, add this to your `<head>`. For more information on why it is in this order, please [read the related article](http://mathiasbynens.be/notes/touch-icons) by [@mathiasbynens](https://github.com/mathiasbynens).

    <!-- Retina iPad -->
    <link rel=apple-touch-icon-precomposed href="apple-touch-icon-144x144-precomposed.png" sizes=144x144>
    <!-- Retina iPhone -->
    <link rel=apple-touch-icon-precomposed href="apple-touch-icon-114x114-precomposed.png" sizes=114x114>
    <!-- iPad and iPad mini-->
    <link rel=apple-touch-icon-precomposed href="apple-touch-icon-72x72-precomposed.png" sizes=72x72>
    <!-- iPhone, iPod Touch and Android 2.1+ devices -->
    <link rel=apple-touch-icon-precomposed href="apple-touch-icon-precomposed.png">


## Web Apps

### Make it Full-Screen
To make your App an App, rather than a bookmark, add this meta tag to your `<head>`.

    <meta name=apple-mobile-web-app-capable content=yes>

### The Status Bar Style
There are three styles to choose from: `default`, `black`, and `black-translucent`. Change it respectively.

    <meta name=apple-mobile-web-app-status-bar-style content=default>  

### Add a Startup Image
If you want to give your web app eyecandy, add a startup image. Note that the media queries have to be that specific or else the images won't be loaded. Also note that because of the status bar all images have to be 20px (40px for Retina graphics) shorter than the screen resolution.

    <!-- iPhone -->
    <link rel=apple-touch-startup-image href=apple-touch-startup-image-320x460.png media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)">
    <!-- Retina iPhone -->
    <link rel=apple-touch-startup-image href=apple-touch-startup-image-640x920.png media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)">
    <!-- iPhone 5 -->
    <link rel=apple-touch-startup-image href=apple-touch-startup-image-640x1096.png media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)">
    <!-- iPad -->
    <link rel=apple-touch-startup-image href=apple-touch-startup-image-768x1004.png media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)">
    <link rel=apple-touch-startup-image href=apple-touch-startup-image-1024x748.png media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)">
    <!-- Retina iPad -->
    <link rel=apple-touch-startup-image href=apple-touch-startup-image-1536x2008.png media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)">
    <link rel=apple-touch-startup-image href=apple-touch-startup-image-2048x1496.png media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)">


## Disable automatic Phone-Number-Detection

With this meta-tag you can disable the automatic phone-number-detection on iOS and also some Android Devices.
  
    <meta name=format-detection content="telephone=no">


## Native Overflow-Scrolling

In iOS 5 there is a new CSS property. Be sure to add the following to any selector that also has `overflow: scroll` set.

    element {
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
    }
