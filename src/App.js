import React, { Component } from 'react';
import './App.css';

import {Header} from "./components/Header";
import {Player} from "./components/Player";
import {AddPlayerForm} from "./components/AddPlayerForm";


class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 0, id: 1},
      {name: 'HONG', score: 0, id: 2},
      {name: 'KIM', score: 0, id: 3},
      {name: 'PARK', score: 0, id: 4}
    ]
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }))
  }

  handleAddPlayer = (name) => {
    this.setState(prevState => {
      const maxId = prevState.players.reduce((max, player) => {
        return max > player.id ? max : player.id;
      }, 0);

      return {
        players: [
          ...prevState.players,
          {id: maxId + 1, name, score: 0}
        ]
      }
    });
  }

  handleChangeScore = (index, delta) => {
    console.log(index,delta);
    const players = this.state.players.map((player, idx) =>{
      if(idx === index){
        player.score = player.score + delta
        return player;
      } else {
        return player;
      }
    });

    this.setState({players})

  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" players={this.state.players}/>
        {
          this.state.players.map((play, index) => <Player
            id={play.id}
            name={play.name}
            score={play.score}
            key={play.id}
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleChangeScore}
            index={index}
          />)
        }
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    )
  }
}

//console.log(Header());


export default App;

