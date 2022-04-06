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

 submitTrick = (event) => {
   event.preventDefault();
      const newTrick = {
        id: Date.now(),
        ...this.state
      }
      this.props.addTrick(newTrick);
      this.clearInputs();
    }

    clearInputs = () => {
      this.setState({ stanceName: '', obstacle: '', trick: '', tutorialLink: '' });
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
        type='text'
        placeholder='Name of Trick'
        name='trick'
        value={this.state.trick}
        onChange={event => this.handleChange(event)}
      />

      <select className='obstacle' name='obstacle' onChange={event => this.handleChange(event)} id="id">
        <option value="none">Choose your Obstacle</option>
        <option value='flatground'>Flatground</option>
        <option value='Ledge'>Ledge</option>
        <option value='Rails'>Rails</option>
        <option value='Stairs'>Stairs</option>
        <option value='Pool'>Pool</option>
      </select>


      <input
        type='text'
        placeholder='Link your Tutorial'
        name='tutorialLink'
        value={this.state.tutorialLink}
        onChange={event => this.handleChange(event)}
      />

      <button onClick={(event) => this.submitTrick(event)}>Send It!</button>

    </form>
  )
}


}


export default Form;
