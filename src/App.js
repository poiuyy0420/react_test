import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header";
import {Counter} from "./components/Counter";
import {Player} from "./components/Player";


const title = 'My First React Element';
const desc = 'This is Description';
const myTitleId = 'main-title';


class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', id: 1},
      {name: 'HONG', id: 2},
      {name: 'KIM', id: 3},
      {name: 'PARK', id: 4}
    ]
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }))
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={this.state.players.length} />
        {
          this.state.players.map(play => <Player
            id={play.id}
            name={play.name}
            score={play.score}
            key={play.id}
            removePlayer={this.handleRemovePlayer}/>)
        }
      </div>
    )
  }
}

//console.log(Header());


export default App;
