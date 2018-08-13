## ReactJS_Tooltip
A customizable tooltip built using ReactJS.

![Tooltip](https://github.com/hms15/ReactJS_Tooltip/blob/master/tooltip.png)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Getting Started
1. Clone repository
2. Do an NPM install
3. Run NPM start

## Usage
1. Type a message into the input box
2. Hover over "Hover over me" text to see the tooltip display

## Settings
1. Positioning: relative (defined in App.css .tooltip position)
2. onMouseEnterDelay: 
    On intial render, set to 0s. 
    Subsequent entries will change to a 1s delay.
    Can be changed in the handleMouseEnterDelay function in App.js
3. onMouseLeaveDelay:
    Set to 1s.
    Can be changed in the handleMouseLeaveDelay function in App.js

## Files 
1. App.js: used as the TooltipContainer to store logic and JSX
2. App.css: CSS styles
3. index.js: used to render DOM
4. index.html: contains the root element

## Tradeoffs