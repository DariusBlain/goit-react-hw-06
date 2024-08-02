import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = (id) => dispatch(deleteContact(id));
  return (
    <>
      <ul className={s.list}>
        {visibleContacts.map((contact) => {
          return (
            <li key={contact.id} className={s.listItem}>
              <Contact data={contact} onDelete={handleDeleteContact} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
