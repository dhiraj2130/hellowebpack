import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.climb = this.climb.bind(this);
  }

  climb() {
    this.setState((prevState) => ({
      count: prevState.count + 2,
    }));
  }

  render() {
    const { count } = this.state;
    return (
      <>
        <button type='submit' onClick={this.climb}>
          clickme
        </button>
        <h1>{count}</h1>
      </>
    );
  }
}
