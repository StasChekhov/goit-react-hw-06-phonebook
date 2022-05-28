import s from "./components/Phonebook.module.css";
import Section from "./components/Section";
import Phonebook from "./components/Phonebook";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import { getContacts } from "redux/clickSlice";

export default function App() {
 return (
  <div>
   <Section title="Phonebook">
    <div className={s.mainDiv}>
     <Phonebook />
    </div>
   </Section>
   <Section title="Contacts">
    {getContacts.length < 1 ? <p>Your contacts list is empty</p> : <Filter />}
    <ContactList />
   </Section>
  </div>
 );
}
