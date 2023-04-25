import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';
import { useGetContactsQuery, useAddContactMutation } from 'store/contacts/contactsSlice';

export default function Form() {
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading}] = useAddContactMutation();
  console.log("🚀 ~ file: Form.jsx:6 ~ useAddContactMutation:", useAddContactMutation())


  const [name, setName] = useState(''); 
  const [number, setNumber] = useState(''); 

  const onChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        setName(target.value);
        break;
      case 'number':
        setNumber(target.value);
        break;
      default:
        break;
    }
  }

  const resetForm = () => {
    setName('');
    setNumber('');
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (contacts?.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    };

    handleAddContact({name, number, id: nanoid() });
    resetForm();
  }

  const handleAddContact = async contact => {
    try {
      await addContact(contact);
      console.log('contact is added to your list')
    } catch (error) {
      console.log(error)
    }
  }
  
  return <form className={css.form} onSubmit={onSubmit}>
          <label className={css.label}>
          Name
          <input className={css.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={onChange}
      />
          </label>
          <label className={css.label}>Phone<input className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onChange}/></label>
    <button className={css.btn} disabled={ isLoading} type="submit">Add contact</button>
        </form>
  
}