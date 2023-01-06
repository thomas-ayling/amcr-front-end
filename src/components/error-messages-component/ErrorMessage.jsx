import react, {useState, createContext, useContext} from 'react';

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ErrorMessage = () => {
    const [message, setMessage] = useState("");
    const runMessage = () => {
        toast(message);
    }

    return(
        <ToastContainer/>
    )
}

export default ErrorMessage;