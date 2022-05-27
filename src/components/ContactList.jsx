import ContactItems from "./ContactItems";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { contacts, filter } from "redux/clickSlice";

const ContactList = () => {
 const filteredContacts = useMemo(
  () =>
   filter
    ? contacts.filter((contact) => contact.name.includes(filter))
    : contacts,
  [filter, contacts]
 );
 return (
  <ul>
   {filteredContacts.map((e) => (
    <li key={e.id}>
     <ContactItems id={e.id} name={e.name} number={e.number} />
    </li>
   ))}
  </ul>
 );
};

export default ContactList;

// ContactList.propTypes = {
//  listContacts: PropTypes.arrayOf(
//   PropTypes.shape({
//    id: PropTypes.string.isRequired,
//    name: PropTypes.string.isRequired,
//    number: PropTypes.string.isRequired,
//   })
//  ),
//  // onDelete: PropTypes.func.isRequired,
// };
