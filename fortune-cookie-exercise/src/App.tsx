import * as React from "react";
import "./App.css";
import "./button.css";
import { CreateFortuneCookie } from "./CreateFortuneCookie";
import { FortuneCookieText } from "./FortuneCookieText";
import "./textInput.css";

// Define and use the IFortuneCookieState
// should have a string attribute "randomFortune"
// and "fortuneCookies" list as array of strings

class App extends React.Component<{}, any> {
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
    // Implement the function body
  };

  private addFortuneCookie = (fortune: string) => {
    // Implement the function body
  };
}

export default App;
