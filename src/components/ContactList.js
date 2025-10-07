import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, removeContactHandler, searchHandler, searchTerm }) => {
  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard 
        contact={contact} 
        key={contact.id} 
        removeContactHandler={removeContactHandler}
      />
    );
  });

  return (
    <div className='contact-list-container'>
      <div className='contact-list-header'>
        <div className='header-title-section'>
          <i className='users icon'></i>
          <h2>My Contacts</h2>
          <span className='contact-count'>{contacts.length}</span>
        </div>
        <div className='search-container'>
          <i className='search icon'></i>
          <input 
            type="text" 
            placeholder='Search contacts...' 
            value={searchTerm}
            onChange={(e) => searchHandler(e.target.value)}
            className='search-input'
          />
        </div>
      </div>
      
      <div className='contact-list'>
        {contacts.length === 0 ? (
          <div className='empty-state'>
            <i className='inbox icon massive'></i>
            <h3>No Contacts Found</h3>
            <p>
              {searchTerm 
                ? "Try adjusting your search" 
                : "Add your first contact to get started"}
            </p>
          </div>
        ) : (
          renderContactList
        )}
      </div>
    </div>
  );
};

export default ContactList;
