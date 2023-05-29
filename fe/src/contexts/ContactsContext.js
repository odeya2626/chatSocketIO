import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
const ContactsContext = createContext();

export function useContacts() {
  return useContext(ContactsContext);
}
export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const createContacts = (id, name) => {
    setContacts((prevContacts) => {
      return [...prevContacts, { id, name }];
    });
  };
  return (
    <ContactsContext.Provider value={{ contacts, createContacts }}>
      {children}
    </ContactsContext.Provider>
  );
}
