import * as React from "react";

interface IFortuneCookieProps {
  text: string;
}

export const FortuneCookieText: React.StatelessComponent<
  IFortuneCookieProps
> = ({ text }) => {
  return (
    <div className="cookie-wrapper">
      <div className={`cookie-image ${text ? "is-open" : ""}`}>
        <div className="cookie-paper">{text}</div>
      </div>
    </div>
  );
};
