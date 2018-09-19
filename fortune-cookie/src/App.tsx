import * as React from "react";
import "./App.css";
import "./button.css";
import { CreateFortuneCookie } from "./CreateFortuneCookie";
import { FortuneCookieText } from "./FortuneCookieText";
import "./textInput.css";

interface IFortuneCookieState {
  randomFortune: string;
  fortuneCookies: string[];
}

class App extends React.Component<{}, IFortuneCookieState> {
  public state = { randomFortune: "", fortuneCookies: [] };

  public render() {
    return (
      <div className="App">
        <div className="fortune-cookie-wrapper">
          <FortuneCookieText
            key={this.state.randomFortune}
            text={this.state.randomFortune}
          />
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

  private getRandomCookie = () => {
    const { fortuneCookies } = this.state;
    this.setState({
      randomFortune:
        fortuneCookies[Math.floor(fortuneCookies.length * Math.random())]
    });
  };

  private addFortuneCookie = (fortune: string) => {
    this.setState(oldState => ({
      fortuneCookies: [...oldState.fortuneCookies, fortune]
    }));
  };
}

export default App;
