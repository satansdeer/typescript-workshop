import * as React from "react";
import "./App.css";
import "./button.css";
import { CreateFortuneCookie } from "./CreateFortuneCookie";
import { FortuneCookieText } from "./FortuneCookieText";
import "./textInput.css";

// Define and use the IFortuneCookieState
// should have a string attribute "randomFortune"
// and "fortuneCookies" list as array of strings

// Add proper member visibility types to App methods

class App extends React.Component<{}, any> {
  render() {
    return (
      <div className="App">
        <div className="fortune-cookie-wrapper">
          <FortuneCookieText text={this.state.randomFortune} />
          <button
            className="button"
            disabled={!this.state.fortuneCookies.length}
            onClick={this.getRandomCookie}
          >
            Get random cookie
          </button>
        </div>

        <CreateFortuneCookie onAddFortuneCookie={this.addFortuneCookie} />
      </div>
    );
  }

  getRandomCookie = () => {
    const { fortuneCookies } = this.state;
    this.setState({
      randomFortune:
        fortuneCookies[Math.floor(fortuneCookies.length * Math.random())]
    });
  };

  addFortuneCookie = (fortune: string) => {
    this.setState(oldState => ({
      fortuneCookies: [...oldState.fortuneCookies, fortune]
    }));
  };
}

export default App;
