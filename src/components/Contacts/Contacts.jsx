import PropTypes from 'prop-types'; 
import css from './Contacts.module.css'
import { useDeleteContactMutation } from 'store/contacts/contactsSlice';

export default function Contacts({ contacts }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const onClick = ({ target }) => {
    const id = target.parentElement.getAttribute('data-key');
    deleteContact(id);
  }
    return <ul>
      {contacts.map((contact) => {
        return <li key={contact.id} data-key={contact.id} className={css.item}>{contact.name}: {contact.number}
          <button className={css.btn} onClick={onClick} disabled={ isLoading }>Delete</button></li>
      })}
    </ul>
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
     number: PropTypes.string.isRequired,
  })),
};