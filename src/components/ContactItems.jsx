import PropTypes from "prop-types";
import { remove } from "../redux/clickSlice";
import { useDispatch } from "react-redux";

const ContactItems = ({ id, name, number }) => {
 const dispatch = useDispatch();

 return (
  <>
   <span>{name}</span>
   <span>{number}</span>
   <button type="button" data-id={id} onClick={() => dispatch(remove({ id }))}>
    Delete
   </button>
  </>
 );
};

export default ContactItems;

// ContactItems.propTypes = {
//  id: PropTypes.string.isRequired,
//  name: PropTypes.string.isRequired,
//  number: PropTypes.string.isRequired,
//  //   onDelete: PropTypes.func.isRequired,
// };
