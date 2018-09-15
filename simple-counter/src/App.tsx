import * as React from "react";
import "./App.css";

interface ICounterProps {
  counter: number;
}

class App extends React.Component<{}, ICounterProps> {
  public state = {counter: 0}

  public render() {
    return (
      <div className="container">
        <div className="counter">{this.state.counter}</div>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
      </div>
    );
  }

  private increment = () => {
    this.setState(state => {
      return { counter: state.counter + 1 };
    });
  };

  private decrement = () => {
    this.setState(state => {
      return { counter: state.counter - 1 };
    });
  };
}

export default App;
