import React from 'react';

const ContactsAdminPanel = ({ carouselData }) => {
  return (
    <>
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
    </>
  );
};

export default ContactsAdminPanel;
