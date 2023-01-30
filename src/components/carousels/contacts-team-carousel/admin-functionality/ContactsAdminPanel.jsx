import React from 'react';

const ContactsAdminPanel = ({ carouselData, name, title, description }) => {
  return (
    <div className='contacts-carousel-admin-panel'>
      <div className='contacts-carousel-admin-dropdown'>
        <label className='contacts-carousel-admin-dropdown-label' htmlFor='contacts-carousel-admin-dropdown-select'>
          Select carousel component to modify:
        </label>
        <select id='contacts-carousel-admin-dropdown-select' className='contacts-carousel-admin-dropdown-select' name='name'>
          {carouselData.map((elem, i) => (
            <option value={elem.fullName} key={i}>
              {elem.fullName} ({elem.id})
            </option>
          ))}
        </select>
      </div>
      <div className='contacts-carousel-admin-buttons'>
        <button>Add new</button>
        <button>Delete selected</button>
        <button>Confirm</button>
        <button>Cancel</button>
      </div>
      <div className='contacts-carousel-admin-inputs'>
        <div>
          <label htmlFor='contacts-carousel-admin-input-spotlight'>Displayed</label>
          <input type='checkbox' id='contacts-carousel-admin-input-spotlight' className='contacts-carousel-admin-input-spotlight' />
        </div>
        <textarea className='contacts-carousel-admin-input-name' value={name} placeholder='full name' />
        <textarea className='contacts-carousel-admin-input-title' value={title} placeholder='job title' />
        <textarea className='contacts-carousel-admin-input-description' value={description} placeholder='description' />
        <p>*Attachment component to go here*</p>
      </div>
    </div>
  );
};

export default ContactsAdminPanel;
