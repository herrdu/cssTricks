import * as React from "react";

import "./DirectionAwareHover.scss";

class MySvg extends React.Component {
  render() {
    return (
      <svg viewBox="0 0 80 76" x="0px" y="0px">
        <g>
          <path d="M 68.9708 24.8623 L 60.4554 2.3018 C 59.9641 0.7017 58.1628 -0.2583 56.5252 0.3817 L 1.9822 20.2222 C 0.3822 20.7022 -0.4179 22.6222 0.2222 24.2223 L 8.8624 47.7797 L 8.8624 35.1484 C 8.8624 29.5024 13.3425 24.8623 18.8857 24.8623 L 32.9442 24.8623 L 50.63 12.862 L 60.7829 24.8623 L 68.9708 24.8623 L 68.9708 24.8623 ZM 77.098 32.0625 L 18.8857 32.0625 C 17.2512 32.0625 16.0625 33.4511 16.0625 35.1484 L 16.0625 72.8491 C 16.0625 74.5477 17.2512 75.9375 18.8857 75.9375 L 77.098 75.9375 C 78.742 75.9375 79.9376 74.5477 79.9376 72.8491 L 79.9376 35.1484 C 79.9376 33.4511 78.742 32.0625 77.098 32.0625 L 77.098 32.0625 ZM 73.0626 68.0625 L 23.9375 68.0625 L 23.9375 61.0852 L 31.4704 43.7232 L 42.7696 57.6777 L 53.4138 46.8062 L 67.1695 41.9375 L 73.0626 55.0815 L 73.0626 68.0625 L 73.0626 68.0625 Z"></path>
        </g>
      </svg>
    );
  }
}

class Info extends React.Component {
  render() {
    return (
      <div className="info">
        <h3>Single-origin coffee whatever</h3>
        <p>
          Williamsburg tofu polaroid, 90's Bushwick irony locavore ethnic meh
          messenger bag Truffaut jean shorts.
        </p>
      </div>
    );
  }
}

type keys = 1 | 2 | 3 | 0;

export class DirectionAwareHover extends React.Component {
  directions = { 0: "top", 1: "right", 2: "bottom", 3: "left" };
  classNames = ["in", "out"]
    .map((p) => Object.values(this.directions).map((d) => `${p}-${d}`))
    .reduce((a, b) => a.concat(b));

  getDirectionKey(
    ev: React.MouseEvent<HTMLLIElement, MouseEvent>,
    node: HTMLLIElement
  ): keys {
    const { width, height, top, left } = node.getBoundingClientRect();

    const l = ev.pageX - (left + window.pageXOffset);
    const t = ev.pageY - (top + window.pageYOffset);
    const x = l - (width / 2) * (width > height ? height / width : 1);
    const y = t - (height / 2) * (height > width ? width / height : 1);

    return (Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4) as keys;
  }

  handleMouseOver(ev: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    this.update(ev, "in");
  }
  handleMouseOut(ev: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    this.update(ev, "out");
  }

  update(
    ev: React.MouseEvent<HTMLLIElement, MouseEvent>,
    prefix: "in" | "out"
  ) {
    console.log("handleMouseOver");

    const target = ev.target as HTMLLIElement;
    const n = this.getDirectionKey(ev, target);

    if (target.tagName === "LI") {
      console.log(target.tagName);

      target.classList.remove(...this.classNames);
      target.classList.add(`${prefix}-${this.directions[n]}`);
    } else if (target.tagName === "A") {
      const p = target.parentElement;
      p.classList.remove(...this.classNames);
      p.classList.add(`${prefix}-${this.directions[n]}`);
    }
  }

  handleClick(ev: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    console.log("click");
    console.log(ev.target);
  }

  render() {
    return (
      <div className="comps-wrap direction-aware">
        <div className="container">
          <ul>
            {[...Array(12).keys()].map(() => {
              return (
                <li
                  onMouseOver={(ev) => this.handleMouseOver(ev)}
                  onMouseOut={(ev) => this.handleMouseOut(ev)}
                  onClick={this.handleClick}
                >
                  <a href="#" className="normal">
                    <MySvg></MySvg>
                  </a>
                  <Info></Info>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
