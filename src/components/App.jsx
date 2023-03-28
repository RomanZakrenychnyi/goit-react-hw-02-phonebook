import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = event => {
    event.preventDefault();
    console.dir(event.target[1].value);
    const name = event.target[0].value;
    const number = event.target[1].value;
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { name, number, id: nanoid() }]
      };
    }
    );

  handelFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  handleDeleteBtnClick = id => {
    this.setState(prevState => {
      return {contacts: prevState.contacts.filter(contact => contact.id !== id)};
    });
  }

    render() {
      const { contacts } = this.state;

    return (
      <div>
        <Section title="Phonebook">
          <ContactForm handleAddContact={this.handleAddContact} />
        </Section>
        <Filter handelFilter={this.handelFilter} />
        <Section title="Contacts">
          <ContactList
            contacts={contacts}
            handleDeleteBtnClick={this.handleDeleteBtnClick}
          />
        </Section>
      </div>
    );
  }
    
