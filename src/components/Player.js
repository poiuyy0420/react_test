import React from 'react';
import Counter from "./Counter";
import {connect} from "react-redux";
import {removePlayer} from "../redux/actions";

export class Player extends React.PureComponent{
  render(){
    console.log(this.props.name, 'rendered');
    const {id, name, score, removePlayer} = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>X</button>
        </span>
        <span className="player-name">{name}</span>
        {/*<Counter score={this.props.score} index={this.props.index} changeScore={this.props.changeScore} />*/}
        <Counter score={score} index={id}/>
      </div>
    );
  }

  // componentWillReceiveProps(nextProps, nextContext) {
  //   console.log('componentWillReceiveProps', nextProps);
  // }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   console.log('shouldComponentUpdate', nextProps);
  //   return nextProps.score !== this.props.score;
  // }

}
export default connect(null, {removePlayer})(Player);
