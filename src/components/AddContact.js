import React, { useState } from 'react';

const AddContact = ({ addContactHandler }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    addContactHandler({ name, email });
    setName('');
    setEmail('');
    setErrors({});
    
    // Show success animation
    const form = e.target;
    form.classList.add('success-submit');
    setTimeout(() => {
      form.classList.remove('success-submit');
    }, 600);
  };

  return (
    <div className='add-contact-container'>
      <div className='add-contact-header'>
        <i className='user plus icon'></i>
        <h2>Add New Contact</h2>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>
            <i className='user icon'></i>
            Name
          </label>
          <input 
            type="text" 
            name="name" 
            placeholder='Enter name' 
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors({ ...errors, name: '' });
            }}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className='error-message'>{errors.name}</span>}
        </div>

        <div className='form-group'>
          <label>
            <i className='envelope icon'></i>
            Email
          </label>
          <input 
            type="text" 
            name="email" 
            placeholder='Enter email' 
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors({ ...errors, email: '' });
            }}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className='error-message'>{errors.email}</span>}
        </div>

        <button className='add-button' type='submit'>
          <i className='plus icon'></i>
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default AddContact;

