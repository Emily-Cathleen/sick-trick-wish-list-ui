import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      stanceName: '',
      obstacle: '',
      trick: '',
      tutorialLink: ''
    }
  }

 handleChange = (event) => {
   event.preventDefault();
   this.setState({ [event.target.name]: event.target.value })
 }



  render() {
  return (
    <form>

      <select className="stance" name="stanceName" onChange={event => this.handleChange(event)} id="id" >
        <option value="none">Choose your Stance</option>
        <option value='regular'>Regular</option>
        <option value='switch'>Switch</option>
      </select>


      <input
        placeholder='Name of Trick'
        name='trick'
        value={this.state.trick}
        onChange={event => this.handleChange(event)}
      />

      <input
        placeholder='Choose your Obstacle'
        name='obstacle'
        value={this.state.obstacle}
        onChange={event => this.handleChange(event)}
      />

      <input
        type='dropdown'
        placeholder='Link your Tutorial'
        name='tutorialLink'
        value={this.state.tutorialLink}
        onChange={event => this.handleChange(event)}
      />

      <button>Send It!</button>

    </form>
  )
}


}


export default Form;
