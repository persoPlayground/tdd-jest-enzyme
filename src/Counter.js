import React from 'react';

export default class Counter extends React.Component {
   constructor(){
       super();
       this.state = {
           count: 0
       }
   }
    render() {
        return (
<div data-test-id="component-counter">
<h3 data-test-id="counter-display">Counter: {this.state.count}</h3>
<button data-test-id="inc-button" onClick={() => this.setState({count: this.state.count + 1})}></button>
<button data-test-id="dec-button" onClick={() => this.setState({count: this.state.count === 0 ? 0 : this.state.count - 1})}></button>>
</div>
        )
    }
}