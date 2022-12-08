import React from 'react';

export const DescriptionBox = ({ feedbackType }) => {
  switch (feedbackType) {
    case 'feedback':
      return (
        <div className='description-container'>
          <h1>Leave us some feedback</h1>
          <hr />
          <p>
            If you have any queries, requests or suggestions about the Manchester Engineering Center, let us know and we will do what we can to help
          </p>
        </div>
      );
    case 'improvement':
      return (
        <div className='description-container'>
          <h1>Propose an improvement</h1>
          <hr />
          <p>If you think something could be improved on this page, be it for clarity or a new approach that you have to a problem, let us know and we can try to implement it</p>
        </div>
      );
    case 'case-study':
      return (
        <div className='description-container'>
          <h1>Propose a new case study</h1>
          <hr />
          <p>
            If you have an idea for a new case study that you'd like to start working on, or have an existing study that isn't shown here, leave us some feedback and we'll get back to you about your
            proposal.
          </p>
        </div>
      );
    case 'library':
      return (
        <div className='description-container'>
          <h1>Request a new book</h1>
          <hr />
          <p>
            If there's a book that you'd like to read and think other members of your team would be enjoy, leave us with the name of the book and a link to the book (just in case we can't find it) and
            we'll get it added to the library
          </p>
        </div>
      );
    default:
      return <h1>This component does not exist. Type options are 'feedback', 'library', 'case-study' or 'improvement'</h1>;
  }
};

export default DescriptionBox;
