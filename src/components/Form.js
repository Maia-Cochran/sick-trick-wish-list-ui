import React, { Component } from 'react';
import './Form.css';
import TrickList from './TrickList'
import App from './App/App'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        stance: '',
        name: '',
        obstacle: '',
        tutorial: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  
  submitTrick = event => {
      event.preventDefault();
      const newTrick = {
          id: Date.now(),
          ...this.state
        }
        return this.props.addTrick(newTrick)
    }

    
    handleChange = event => {
      this.setState({ 
        [event.target.stance]: event.target.value,
        [event.target.name]: event.target.value,
        [event.target.obstacle]: event.target.value,
        [event.target.tutorial]: event.target.value})
    };
  
    render() {
    return (
      <form>
        <select
        placeholder='Choose your stance:'
        value={this.state.stance} 
        onChange={event => this.handleChange(event)}>
        <option value="regular">Regular</option>
        <option value="switch">Switch</option>
        </select>

        <input
          type='text'
          placeholder='Name of trick'
          name='nameTrick'
          value={this.state.obstacle}
          onChange={event => this.handleChange(event)}
        />
        
        <select
        placeholder='Choose your obstacle'
        name='chooseObstacle'
        value={this.state.stance} 
        onChange={event => this.handleChange(event)}>
        <option value="flatground">Flatground</option>
        <option value="ledge">Ledge</option>
        <option value="stairs">Stairs</option>
        <option value="pool">Pool</option>
        </select>
        
        <input
          type='text'
          placeholder='Link to tutorial'
          name='inputLink'
          value={this.state.tutorial}
          onChange={event => this.handleChange(event)}
        />

        <button onClick = {event => this.submitTrick(event)}>Send It!</button>
      </form>
    )
  }
};

export default Form;