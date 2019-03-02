import React from 'react';

export class AddPlayerForm extends React.Component {
  // Dom에 접근하기 위한 참조값(실제Dom이 아니라 Dom을 접근하기위한 레퍼런스 값)
  textInput = React.createRef();

  constructor(props){
    super(props);
  }

  handleValueChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.textInput.current.value);
    this.setState({
      value: ''
    });
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="enter a player's name" ref={this.textInput} />
        <input type="submit" value="Add Player" />
      </form>
    )
  }
}