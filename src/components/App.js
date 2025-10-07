import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Load contacts from localStorage on mount
  useEffect(() => {
    const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrievedContacts) {
      setContacts(retrievedContacts);
    } else {
      // Set initial contacts if none exist
      const initialContacts = [
        {
          id: Date.now() + 1,
          name: "Jui Mandal",
          email: "juimandal31@gmail.com"
        },
        {
          id: Date.now() + 2,
          name: "Abhishek Purohit",
          email: "abhishekp@example.com"
        },
        {
          id: Date.now() + 3,
          name: "Nikita Sharma",
          email: "nikita.sharma@example.com"
        }
      ];
      setContacts(initialContacts);
    }
  }, []);

  // Save contacts to localStorage whenever they change
  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);

  // Add contact handler
  const addContactHandler = (contact) => {
    const newContact = {
      id: Date.now(),
      ...contact
    };
    setContacts([...contacts, newContact]);
  };

  // Delete contact handler
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContactList));
  };

  // Search handler
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  // Filter contacts based on search term
  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <AddContact addContactHandler={addContactHandler} />
        <ContactList 
          contacts={filteredContacts} 
          removeContactHandler={removeContactHandler}
          searchHandler={searchHandler}
          searchTerm={searchTerm}
        />
      </div>
    </div>
  );
}

export default App;
