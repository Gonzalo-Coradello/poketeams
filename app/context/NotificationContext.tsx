"use client";

import 'react-toastify/dist/ReactToastify.css';
import { createContext } from "react";
import { toast, ToastContainer } from "react-toastify"

interface Context {
  setNotification: (status: string, msg: string, icon?: JSX.Element) => void
}

export const NotificationContext = createContext<Partial<Context>>({});

export const NotificationProvider = ({ children }: {children: React.ReactNode}) => {
  const setNotification = (status: string, msg: string, icon?: JSX.Element)  => {
    
    const options: any = {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      className: "text-sm w-max"
    }
    if(icon) options.icon = icon

    status === "success" ? toast.success(msg, options) : toast.error(msg, options)
  }
  
  return (
    <NotificationContext.Provider value={{ setNotification }}>
      {children}
      <ToastContainer />
    </NotificationContext.Provider>
  );
};
