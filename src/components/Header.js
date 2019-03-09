import React from 'react';
import {Stats} from "./Stats";
import {Stopwatch} from "./Stopwatch";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import App from "../App";
import {updateTitle} from "../redux/actions";

export const Header = ({players, title, changeTitle}) => {
  //console.log(props);
  //const {players, title} = props;
  return (
    <header>
      <Stats players={players} />
      <h1 onClick={changeTitle}>{ title }</h1>
      <Stopwatch />
    </header>
  )
}

Header.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
}

Header.defaultProps = {
  title: 'Scoreboard'
}

let mpaStateToProps = (state) => {
  return {
    title : state.playerReducer.title
  }
}

//action을 dispatch하는 function을 Props로 매핑
let mapActionToProps = (dispatch) => {
  return{
    changeTitle: () => dispatch(updateTitle('test scoreboard'))
  }
}

export default connect(mpaStateToProps, mapActionToProps)(Header);
