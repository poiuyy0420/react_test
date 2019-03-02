import React from 'react';
import {Counter} from "./Counter";

export class Player extends React.Component{
  render(){
    console.log(this.props.name, 'rendered');
    const {id, name, score, index, removePlayer, changeScore} = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>X</button>
        </span>
        <span className="player-name">{name}</span>
        <Counter {...this.props}/>
        {/*<Counter score={this.props.score} index={this.props.index} changeScore={this.props.changeScore} />*/}
      </div>
    );
  }

  // componentWillReceiveProps(nextProps, nextContext) {
  //   console.log('componentWillReceiveProps', nextProps);
  // }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate', nextProps);
    return nextProps.score !== this.props.score;
  }


}
