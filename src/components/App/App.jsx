import Form from 'components/Form/Form';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import css from './App.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { addNewContact, deleteContactById } from 'store/contacts/contactsSlice';
import { updateFilterValue } from 'store/filter/filterSlice';

export default function App() {
  const { contacts } = useSelector((state) => state.contacts);
  const {filter} = useSelector((state) => state.filter);

  const dispatch = useDispatch();  

  const addContact = (newContact) => {
    dispatch(addNewContact(newContact))
  }
  
  const deleteContact = (id) => {
    dispatch(deleteContactById(id))
  }

  const filterContacts = () => {   
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return filter === "" ?  contacts : filteredContacts;
  }
  
  const updateFilter = (inputValue) => {
    dispatch(updateFilterValue(inputValue))
  }
  
  return <div className={css.container}>
      <h1>Phonebook</h1>
      <Form contacts={contacts} addContact={addContact}  />
      {contacts.length !== 0 && <div><h2>Contacts</h2>
      <Filter filterValue={filter} updateFilter={ updateFilter} />
      <Contacts deleteContact={deleteContact} contacts={filterContacts()} /></div>}
    </div>
}
