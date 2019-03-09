import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {changeScore} from "../redux/actions";

class Counter extends React.Component {
  static propTypes = {
    index: PropTypes.number,
    score: PropTypes.number,
    changeScore: PropTypes.func
  }

  render() {
    const {index, score, changeScore} = this.props;
      return (
        <div className="counter">
          <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> -</button>
          <span className="counter-score">{score}</span>
          <button className="counter-action increment" onClick={() => changeScore(index, 1)}> +</button>
        </div>
      );
    }
  }

export default connect(null, {changeScore})(Counter);





