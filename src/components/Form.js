import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      stance: '',
      name: '',
      obstacle: '',
      tutorial: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    this.setState({ [event.target.stance]: event.target.value,
    [event.target.name]: event.target.value,
    [event.target.obstacle]: event.target.value,
    [event.target.tutorial]: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='select'
        placeholder='Choose your stance:' 
        value={this.state.stance} 
        onChange={this.handleChange}
        option ="Regular"
        option ="Switch" 
        />

        <input
          type='text'
          placeholder='Name of trick'
          name='nameTrick'
          value={this.state.name}
        />

        <input
          type='select'
          placeholder='Choose your obstacle'
          name='chooseObstacle'
          value={this.state.obstacle}
          onChange={event => this.handleChange(event)}
        />
        
        <input
          type='text'
          placeholder='Link to tutorial'
          name='inputLink'
          value={this.state.tutorial}
          onChange={event => this.handleChange(event)}
        />

        

        <button>Send It!</button>
      </form>
    )
  }
}

export default Form;