import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Container } from './Container.styled';
import { Input, Section } from './Form/FormElements.styled';
// import { Container } from '';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  onAddContact = data => {
    if (this.state.contacts.some(({ name }) => data.name === name))
      return alert(`${data.name} is already in contacts`);
    const newContact = { ...data, id: nanoid() };
    this.setState({ contacts: [...this.state.contacts, newContact] });
  };
  onDeleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  onChangeImput = event => {
    this.setState({ filter: event.target.value.trim() });
  };
  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <Container>
        <Form onAddContact={this.onAddContact} />
        <h2>Contacts</h2>
        {this.state.contacts.length === 0 ? (
          <p>No contacts</p>
        ) : (
          <Section>
            <p>Find conacts by name</p>
            <Input
              type="text"
              placeholder="Search contact"
              value={this.state.filter}
              onChange={this.onChangeImput}
            ></Input>
            <ContactList
              contacts={filteredContacts}
              onDeleteContact={this.onDeleteContact}
            />
          </Section>
        )}
      </Container>
    );
  }
}
