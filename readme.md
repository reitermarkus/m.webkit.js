# Mobile WebKit

---------------



# About

In this kit you find some useful features and bug fixes, and also some tips for your Mobile Web Development.



# What's inside?

### 1. Only open outgoing links in Safari when added to homescreen
By default, when added to home screen, it will launch as a fullscreen web app. And all links will open up MobileSafari with a new tab.  
This fix detects internal links, so that only outgoing links open in a new Safari tab.  

    <meta name="apple-mobile-web-app-capable" content="yes" />

### 2. Hide top URL bar (scroll to top) on page refresh in Mobile Safari  
When you open a page in MobileSafari the URL bar is visible by default.  
This fix scrolls to the top on page load so the URL bar is hidden.  

### MobileSafari Orientation Change Fix (by [@scottehl](https://github.com/scottjehl/iOS-Orientationchange-Fix))  
This fix disables zoom when the device is rotated, so that is doesn't zoom in the page when going into landscape.  

    <meta name="viewport" content="width=device-width, initial-scale=1.0" >
    


# Useful Tips and Tricks

## Web Apps

##### The Title
Be sure to check if your title doesn't exceed the character limit, which I found is at about 12-13, depending on which characters it contains. You will have to experiment.

    <title>My Web App</title>

##### Make it Full-Screen
To make your App an App, rather than a bookmark, add this meta tag to your `<head>`.

    <meta name="apple-mobile-web-app-capable" content="yes" />

##### The Status Bar Style
There are three styles to choose from: `default`, `black`, and `black-translucent`. Change it respectively.

    <meta name="apple-mobile-web-app-status-bar-style" content="default" />  


<br />

## Disable automatic Phone-Number-Detection

With this meta-tag you can disable the automatic phone-number-detection on iOS and also some Android Devices.
  
    <meta name="format-detection" content="telephone=no">


<br />

## Native Overflow-Scrolling

In iOS 5 there is a new CSS property. Be sure to add the following to any selector that also has `overflow: scroll` set.

    -webkit-overflow-scrolling: touch;



