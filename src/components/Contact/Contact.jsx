import { FaPhone } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';
import css from './Contact.module.css';

function Contact({ contact, onDeleteContact }) {
  const { id, name, number } = contact;

  function handleDelete() {
    onDeleteContact(id);
  }

  return (
    <li className={css.contact}>
      <div className={css.iconContainer}>
        <FaPhone className={css.iconPhone} size={15} />
        <IoPersonSharp className={css.iconPerson} size={16} />
      </div>
      <div>
        <p> {name}</p>
        <p> {number}</p>
      </div>
      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

export default Contact;
