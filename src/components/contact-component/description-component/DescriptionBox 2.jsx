import React from 'react';

export const DescriptionBox = ({ feedbackType }) => {
  switch (feedbackType) {
    case 'feedback':
      return (
        <>
          <h1>Leave us some feedback</h1>
          <p>
            Text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text
          </p>
        </>
      );
    case 'improvement':
      return (
        <>
          <h1>Propose an improvement to the engineering center</h1>
          <p>
            Text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text
          </p>
        </>
      );
    case 'case-study':
      return (
        <>
          <h1>Propose a new case study</h1>
          <p>
            Text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text
          </p>
        </>
      );
    case 'library':
      return (
        <>
          <h1>Request a new book for the library</h1>
          <p>
            Text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text
          </p>
        </>
      );
    default:
      return <h1>This component does not exist. Type options are 'feedback', 'library', 'case-study' or 'improvement'</h1>;
  }
};

export default DescriptionBox;
