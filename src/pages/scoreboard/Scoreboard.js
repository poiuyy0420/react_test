import React from 'react';
import Header from "../../components/Header";
import {Player} from "../../components/Player";
import AddPlayerForm from "../../components/AddPlayerForm";
import {connect} from "react-redux";
import './Scoreboard.module.css';

class Scoreboard extends React.Component {

  /*handleRemovePlayer = (id) => {
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }))
  }*/

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.props.players}/>
        {
          this.props.players.map((play, index) => <Player
            id={play.id}
            name={play.name}
            score={play.score}
            key={play.id}
            index={index}
          />)
        }
        <AddPlayerForm />
      </div>
    )
  }
}

//console.log(Header());

let mapStatToProps = (state) => ({
  players: state.playerReducer.players
})

export default connect(mapStatToProps)(Scoreboard);

