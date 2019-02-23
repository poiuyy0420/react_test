import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Header} from "./components/Header";
import {Counter} from "./components/Counter";
import {Player} from "./components/Player";


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
        <Header title="My scoreboard" totalPlayers={this.state.players.length}/>
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
      </div>
    )
  }
}

//console.log(Header());


export default App;
