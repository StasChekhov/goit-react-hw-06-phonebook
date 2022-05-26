import { useMemo } from "react";
import s from "./components/Phonebook.module.css";

import Section from "./components/Section";
import Phonebook from "./components/Phonebook";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import { useSelector } from "react-redux";

export default function App() {
 const contacts = useSelector((state) => state.myValue.contacts.items);
 const filter = useSelector((state) => state.myValue.contacts.filter);

 const filteredContacts = useMemo(
  () =>
   filter
    ? contacts.filter((contact) => contact.name.includes(filter))
    : contacts,
  [filter, contacts]
 );

 return (
  <div>
   <Section title="Phonebook">
    <div className={s.mainDiv}>
     <Phonebook />
    </div>
   </Section>
   <Section title="Contacts">
    {contacts.length < 1 ? <p>Your contacts list is empty</p> : <Filter />}
    <ContactList listContacts={filteredContacts} />
   </Section>
  </div>
 );
}
