import * as React from "react";

// Implement "IFortuneCookieProps" interface
// should accept "onAddFortuneCookie" function

// Implement "IFortuneCookieState"
// should have string field "cookieText"

export class CreateFortuneCookie extends React.Component<any, any> {
  // Get rid of "any" types
  public state = { cookieText: "" };

  public render() {
    return (
      <div className="create-cookie-wrapper">
        <input
          className="textInput"
          type="text"
          value={this.state.cookieText}
          onChange={this.onCookieTextChange}
        />
        <button className="button" onClick={this.addFortuneCookie}>
          Add Fortune Cookie
        </button>
      </div>
    );
  }

  private addFortuneCookie = () => {
    this.props.onAddFortuneCookie(this.state.cookieText);
    this.setState({ cookieText: "" });
  };

  // Implement the "onCookieTextChange" function
  // It should accept proper event type
}
