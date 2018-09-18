import * as React from "react";
import "./button.css";

interface IFortuneCookieProps {
  onAddFortuneCookie: (fortune: string) => void;
}

interface IFortuneCookieState {
  cookieText: string;
}

export class CreateFortuneCookie extends React.Component<
  IFortuneCookieProps,
  IFortuneCookieState
> {
  constructor(props: IFortuneCookieProps) {
    super(props);
    this.state = { cookieText: "" };
  }

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

  private onCookieTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ cookieText: e.target.value });
  };
}
