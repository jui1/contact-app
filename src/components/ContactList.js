import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const { Contacts } = props;

  const renderContactList = Contacts.map((contact) => {
    return <ContactCard contact={contact} key={contact.id} />;
  });

  return (
    <div className='ui celled list'>
      <h2>Contact List</h2>
      {renderContactList}
    </div>
  );
};

export default ContactList;
