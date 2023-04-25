import { useDeleteContactMutation } from "store/contacts/contactsSlice";
import css from './ContactsItem.module.css'

export default function ContactsItem({ contact }) {
    const [deleteContact, { isLoading }] = useDeleteContactMutation();

    const onClick = ({ target }) => {
        const id = target.parentElement.getAttribute('data-key');
        deleteContact(id);
    }
    
    return <li data-key={contact.id} className={css.item}>{contact.name}: {contact.number}
          <button className={css.btn} onClick={onClick} disabled={ isLoading }>Delete</button></li>
}