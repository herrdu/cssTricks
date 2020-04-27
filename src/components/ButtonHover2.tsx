import * as React from "react";

import "./ButtonHover.scss";

export class ButtonHover2 extends React.Component {
  render() {
    return (
      <div className="comps-wrap button-hover-2">
        <a className="btn btn-1">
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%"></rect>
          </svg>
          Hover
        </a>
        <a className="btn btn-2">Hover</a>
        <a className="btn btn-3">Hover</a>
      </div>
    );
  }
}
