import React, { Component } from 'react';
export class Form extends Component {
  state = { name: '', number: '' };

  onChangeInputValue = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    const addedContact = { name: this.state.name, number: this.state.number };

    // reset form
    this.props.onAddContact(addedContact);
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.onFormSubmit}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            required
            value={this.state.name}
            onChange={this.onChangeInputValue}
            placeholder="User name"
          />
          <p>Number</p>
          <input
            type="tel"
            name="number"
            required
            value={this.state.number}
            onChange={this.onChangeInputValue}
            placeholder="123-45-67"
          />
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
