import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      stance: '',
      obstacle: ''
    }
  }

  handleChange = event => {
  this.setState({ [event.target.name]: event.target.value });
}

  render() {
  return (
    <form>
      <select/>
        <option value="none"></option>
        <option>Regular</option>
        <option >Switch</option>
        <select/>


      <input
        placeholder='Name of Trick'
        name='title'
        value={this.state.stance}
        onChange={event => this.handleChange(event)}
      />

      <input
        type='dropdown'
        placeholder='Choose your Obstacle'
        name='description'
        value={this.state.obstacle}
        onChange={event => this.handleChange(event)}
      />

      <input
        type='dropdown'
        placeholder='Link your Tutorial'
        name='description'
        value={this.state.obstacle}
        onChange={event => this.handleChange(event)}
      />

      <button>Send It!</button>
    </form>
  )
}



}


export default Form;
