import react, {useState, createContext, useContext} from 'react';
import ContactComponent from '../contact-component/ContactComponent';
import ErrorMessage from './ErrorMessage';

const ErrorMessageContext = () => {
    const ErrorContext = createContext(null);
  return (
    <ErrorContext.Provider value = {{message, runMessage}}>
        <ErrorMessage/>
        <ContactComponent/>
    </ErrorContext.Provider>
  )
}

export default ErrorMessageContext