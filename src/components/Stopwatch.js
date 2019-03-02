import React from 'react';

export class Stopwatch extends React.Component {
  tickRef; //클래스 public 속성

  state = {
    isRunning: false,
    timer: 0
  }

  componentDidMount() {
    this.tickRef = setInterval(() => this.tick(), 1000);
  }

  tick = () => {
    if (this.state.isRunning) {
      this.setState(prevState => prevState.timer += 1);
    }
  }

  handleStopwatch = () => {
    this.setState(prevState => ({isRunning: !prevState.isRunning}));
  }

  handleReset = () => {
    this.setState({timer: 0});
  }

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{this.state.timer}</span>
        <button onClick={this.handleStopwatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
  tickRef;

  componentWillUnmount() {
    clearInterval(this.tickRef);
  }
}