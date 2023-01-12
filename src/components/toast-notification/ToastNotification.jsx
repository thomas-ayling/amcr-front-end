import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import './ToastNotification.css';
import 'react-toastify/dist/ReactToastify.css';

export const runToastNotification = (message, toastType) => {
  if (toastType === 'success') return toast.success(message, { position: 'top-center', autoClose: 5000 });
  if (toastType === 'error') return toast.error(message, { position: 'top-center', autoClose: 5000 });
  return;
};

const ToastNotification = () => {
  return <ToastContainer />;
};
export default ToastNotification;
