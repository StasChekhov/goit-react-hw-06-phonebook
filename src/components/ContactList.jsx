import ContactItems from "./ContactItems";
import PropTypes from "prop-types";

const ContactList = ({ listContacts }) => {
 return (
  <ul>
   {listContacts.map((e) => (
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
