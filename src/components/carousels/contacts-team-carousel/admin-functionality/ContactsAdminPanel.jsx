import React from 'react';

const ContactsAdminPanel = ({ carouselData }) => {
  return (
    <div className='contacts-carousel-admin-panel'>
      <div className='contacts-carousel-admin-dropdown'>
        <label className='contacts-carousel-admin-dropdown-label' htmlFor='contacts-carousel-admin-dropdown-select'>
          Select carousel component to modify:
        </label>
        <select id='contacts-carousel-admin-dropdown-select' className='contacts-carousel-admin-dropdown-select' name='name' value='value'>
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
          <label for='contacts-carousel-admin-input-spotlight'>Spotlight</label>
          <input type='checkbox' id='contacts-carousel-admin-input-spotlight' className='contacts-carousel-admin-input-spotlight' />
        </div>
        <textarea className='contacts-carousel-admin-input-name' placeholder='full name' />
        <textarea className='contacts-carousel-admin-input-title' placeholder='job title' />
        <textarea className='contacts-carousel-admin-input-description' placeholder='description' />
        <p>*Attachment component to go here*</p>
      </div>
    </div>
  );
};

export default ContactsAdminPanel;
