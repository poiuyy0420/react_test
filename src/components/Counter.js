import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={() => this.props.changeScore(this.props.index, -1)}> - </button>
        <span className="counter-score">{this.props.score}</span>
        <button className="counter-action increment" onClick={() => this.props.changeScore(this.props.index, 1)}> + </button>
      </div>
    );
  }
}
