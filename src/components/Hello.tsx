import * as React from "react";

export interface HelloProprs {
  compiler: string;
  framework: string;
}

export class Hello extends React.Component<HelloProprs, {}> {
  render() {
    return (
      <h1>
        Hello from {this.props.compiler} and {this.props.framework} !
      </h1>
    );
  }
}
