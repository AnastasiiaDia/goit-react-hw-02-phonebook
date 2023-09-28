import React, { Component } from 'react';
import { Button, FormEl, Input } from './FormElements.styled';

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
        <FormEl onSubmit={this.onFormSubmit}>
          <span>Name</span>
          <Input
            type="text"
            name="name"
            required
            value={this.state.name}
            onChange={this.onChangeInputValue}
            placeholder="Diana Ivanova"
          />
          <span>Number</span>
          <Input
            type="tel"
            name="number"
            required
            value={this.state.number}
            onChange={this.onChangeInputValue}
            placeholder="123-45-67"
          />
          <Button type="submit">Add contact</Button>
        </FormEl>
      </>
    );
  }
}
