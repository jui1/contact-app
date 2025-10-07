import React, { useState } from 'react';

const ContactCard = ({ contact, removeContactHandler }) => {
  const { id, name, email } = contact;
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      removeContactHandler(id);
    }, 300);
  };

  // Get initials for avatar
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Generate a color based on name
  const getAvatarColor = (name) => {
    const colors = [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', 
      '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div className={`contact-card ${isDeleting ? 'deleting' : ''}`}>
      <div className='contact-avatar' style={{ backgroundColor: getAvatarColor(name) }}>
        {getInitials(name)}
      </div>
      <div className='contact-info'>
        <h3 className='contact-name'>{name}</h3>
        <p className='contact-email'>
          <i className='envelope outline icon'></i>
          {email}
        </p>
      </div>
      <button 
        className='delete-button'
        onClick={handleDelete}
        title='Delete contact'
      >
        <i className='trash alternate outline icon'></i>
      </button>
    </div>
  );
};

export default ContactCard;
