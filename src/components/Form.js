import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: Date.now(),
        stance: '',
        name: '',
        obstacle: '',
        tutorial: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  
  submitTrick = event => {
      event.preventDefault();
      const newTrick = this.state
      this.props.addTrick(newTrick)
    }

    
    handleChange = event => {
      this.setState({ 
        [event.target.name]: event.target.value
    })
  };
  
    render() {
    return (
      <form>
        <select
        value={this.state.stance} 
        name='stance'
        onChange={event => this.handleChange(event)}>
        <option value="" disabled selected>Choose your stance:</option>
        <option value="regular">Regular</option>
        <option value="switch">Switch</option>
        </select>

        <input
          type='text'
          placeholder='Name of trick'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        
        <select
        name='obstacle'
        value={this.state.obstacle} 
        onChange={event => this.handleChange(event)}>
        <option value="" disabled selected>Choose your obstacle:</option>
        <option value="flatground">Flatground</option>
        <option value="ledge">Ledge</option>
        <option value="stairs">Stairs</option>
        <option value="pool">Pool</option>
        </select>
        
        <input
          type='text'
          placeholder='Link to tutorial'
          name='tutorial'
          value={this.state.tutorial}
          onChange={event => this.handleChange(event)}
        />

        <button onClick = {event => this.submitTrick(event)}>Send It!</button>
      </form>
    )
  }
};

export default Form;