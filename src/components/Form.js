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
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form>
        <input
          type='select'
          placeholder='Stance'
          name='chooseStance'
          value={this.state.stance}
          onChange={event => this.handleChange(event)}
//         <option value="grapefruit">Grapefruit</option>
//   <option value="lime">Lime</option>
//   <option selected value="coconut">Coconut</option>
//   <option value="mango">Mango</option>
// </select>
        />

        <input
          type='text'
          placeholder='Name of trick'
          name='nameTrick'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />

        <input
          type='text'
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