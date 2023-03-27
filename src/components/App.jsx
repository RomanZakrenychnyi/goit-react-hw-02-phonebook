import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div>
        <Section title='Phonebook'>
          <ContactForm />
        </Section>
        <Section title='Contacts'>
          <ContactList />
        </Section>
      </div>
    );
  }
}
