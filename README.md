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
    --On intial render, set to 0s.   
    --Subsequent entries will change to a 1s delay.  
    --Can be changed in the handleMouseEnterDelay function in App.js  
3. onMouseLeaveDelay:
    --Set to 1s.  
    --Can be changed in the handleMouseLeaveDelay function in App.js  

## Files 
1. App.js: used as the TooltipContainer to store logic and JSX
2. App.css: CSS styles
3. index.js: used to render DOM
4. index.html: contains the root element

## Tradeoffs
1. Expose some way to let consumers provide the content of the tooltip  
    Pros:  
        --User friendly: user can modify the message via UI  
        --Easy  
    Cons:  
        --Generally, tooltips are not implemented as such - they have a static message. Otherwise, alternative implementation would have been to make the message customizable via code by adding it as a prop in the render.  
        --For simplicity purposes, there isn't a clear message button implemented. User has to manually delete the text.  
2. Adding a delay  
    Pros:  
        --User can customize the delay timings for mouse enter/leave events  
    Cons:  
        --After the first hover, the transitionDelay value remains at the timing set for the mouse leave event.  
            --Alternative solution, the values can be custominzed via the CSS file - it will remain fixed on each hover.    
        --Being new to ReactJS, I don't have enough understanding of the lifecycle methods. As a consequence, I didn't understand how I can reset the state, so that with each new hover the delay time would reset to what was defined in handleMouseEnterDelay/handleMouseLeave Delay functions.  
