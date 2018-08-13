import React from 'react';
import ReactDOM from 'react-dom';
import { TooltipContainer } from './App';

class Tooltip extends React.Component {
    render(){
        return <TooltipContainer />
    }
}

ReactDOM.render(
    <Tooltip />,
    document.getElementById('root')
)
