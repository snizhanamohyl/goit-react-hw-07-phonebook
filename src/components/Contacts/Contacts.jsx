import PropTypes from 'prop-types'; 
import ContactsItem from 'components/ContactsItem/ContactsItem';

export default function Contacts({ contacts }) {

    return <ul>
      {contacts.map((contact) => <ContactsItem contact={contact } key={contact.id}/>)}
    </ul>
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
     number: PropTypes.string.isRequired,
  })),
};