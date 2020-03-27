import * as React from 'react';

export interface ExampleComponentProps {
  text: string;
}

export default class ExampleComponent extends React.Component<
  ExampleComponentProps
> {
  render() {
    const { text } = this.props;

    return <div>Example Component: {text}</div>;
  }
}
