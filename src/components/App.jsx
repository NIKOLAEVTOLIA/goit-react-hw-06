import { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';

function App() {
  const [allContacts, setAllContacts] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    return savedContacts || [];
  });

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(allContacts));
  }, [allContacts]);

  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    const filteredContacts = allContacts.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredContacts(filteredContacts);
  }, [allContacts, searchTerm]);

  const addContact = newContact => {
    setAllContacts([...allContacts, newContact]);
  };

  const deleteContact = id => {
    setAllContacts(allContacts.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox value={searchTerm} onChange={setSearchTerm} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
