import React from 'react';
import './App.css';

export class TooltipContainer extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      transitionDelay: ''     
    } 
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleMouseEnterDelay = this.handleMouseEnterDelay.bind(this);
    this.handleMouseLeaveDelay = this.handleMouseLeaveDelay.bind(this);
  }
  
  // Controls input text which makes the tooltip message customizable via UI
  handleUserInput (e) {
	  this.setState({
      userInput: e.target.value      
	  });
  }

  // Changes transition-delay property to cause a delay on the mouse enter hover
  handleMouseEnterDelay() {
    var mouseIn = document.getElementById('tooltip');
    console.log(mouseIn)
    var delayIn = mouseIn.style.transitionDelay = '0s';    
    this.setState({
      transitionDelay: {delayIn}     
    })          
  }
 
  // Changes transition-delay property to result in a delay while moving the mouse away
  handleMouseLeaveDelay() {
    var mouseLeave = document.getElementById('tooltiptext');
    console.log(mouseLeave)
    var delayLeave = mouseLeave.style.transitionDelay = '1s';
    this.setState({
     transitionDelay: {delayLeave}
    })          
  }

  render() {
    return (      
      <div className="App">        
         <div>
          <h2>Tooltip</h2>
          <p>Tooltip Message<input onChange={this.handleUserInput} type="text"
          value={this.state.userInput}/>
          </p>
          </div>
          <br></br>
          <div id='tooltip' className="tooltip" onMouseEnter={this.handleMouseEnterDelay} onMouseLeave={this.handleMouseLeaveDelay}>Hover over me
            <span id='tooltiptext' className="tooltiptext" >{this.state.userInput}</span>
          </div>         
      </div>
    );
  }   
}

export default TooltipContainer;
