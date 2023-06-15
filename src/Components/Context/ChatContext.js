import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <ChatContext.Provider value={{ currentUser }}>
      {children}
    </ChatContext.Provider>
  );
};
