import * as React from "react";
import "./App.css";

// Define the ICounterProps interface
// should include the "state" field of type "number"

// Set proper visibility levels for class properties
// public/protected/private

class App extends React.Component<{}, ICounterState> {
  render() {
    return (
      <div className="container">
        <div className="counter">{this.state.counter}</div>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
      </div>
    );
  }

  increment = () => {
    this.setState(state => {
      return { counter: state.counter + 1 };
    });
  };

  decrement = () => {
    this.setState(state => {
      return { counter: state.counter - 1 };
    });
  };
}

export default App;
