import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*const players = [
  {name: 'LDK', score: 30, id:1},
  {name: 'HONG', score: 40, id:2},
  {name: 'KIM', score: 50, id:3},
  {name: 'PARK', score: 60, id:4}
];*/


const title = 'My First React Element';
const desc = 'This is Description';
const myTitleId = 'main-title';

/*const header = (
  <header>
    <h1 id={myTitleId}>{title}</h1>
    <p className="main-desc">{desc}</p>
  </header>
);*/

const Header = (props) => {
  console.log(props);
  return(
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      players: 1,
      score: 0
    }
  }

  incrementScore = () => {
    console.log(this);
    /*this.setState(
      {score: this.state.score + 1}
    );*/
    this.setState(prevState => ({score: prevState.score + 1}));
  }

  decrementScore = () => {
    console.log(this);
    /*this.setState(
      {score: this.state.score - 1}
    );*/
    this.setState(prevState => ({score: prevState.score -1}));
  }
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

const Player = (props) => (
  <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={() => props.removePlayer(props.id)}>X</button>
    </span>
    <span className="player-name">{props.name}</span>
    <Counter score={props.score} />
  </div>
);

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
