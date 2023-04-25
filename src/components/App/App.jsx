import Form from 'components/Form/Form';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import css from './App.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { useGetContactsQuery } from 'store/contacts/contactsSlice';
import { updateFilterValue } from 'store/filter/filterSlice';

export default function App() {
  const { data: contacts } = useGetContactsQuery();

  const {filter} = useSelector((state) => state);

  const dispatch = useDispatch();

  const filterContacts = () => {   
    const filteredContacts = contacts?.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return filter === "" ?  contacts : filteredContacts;
  }
  
  const updateFilter = (inputValue) => {
    dispatch(updateFilterValue(inputValue))
  }
  
  return <div className={css.container}>
    <h1>Phonebook</h1>
    <Form/>
    {contacts && contacts.length !== 0 && <div><h2>Contacts</h2>
      <Filter filterValue={filter} updateFilter={updateFilter} />
      <Contacts contacts={filterContacts()} /></div>}
    </div>
}