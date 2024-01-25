import React, { createContext, useContext, useState } from "react";
import { Notification } from "../components";
import { AlertColor } from "@mui/material";

type ContextProps = {
  getError: (msg: string) => void;
};

const NotificationContext = createContext<ContextProps | null>(null);

export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [msg, setMsg] = useState("second");
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<AlertColor | undefined>(undefined);

  const handleClose = () => {
    setOpen(false);
  };

  const getError = (msg: string) => {
    setSeverity("error");
    setOpen(true);
    setMsg(msg);
  };

  const value = {
    getError,
  };

  return (
    <NotificationContext.Provider value={value}>
      <Notification
        handleClose={handleClose}
        open={open}
        severity={severity}
        msg={msg}
      />
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error("No existe el context");
  return context;
};