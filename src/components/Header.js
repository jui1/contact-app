import React from 'react';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-content'>
        <div className='header-icon'>
          <i className='address book icon'></i>
        </div>
        <h1 className='header-title'>Contact Manager</h1>
        <p className='header-subtitle'>Manage your contacts with ease</p>
      </div>
    </div>
  );
};

export default Header;
