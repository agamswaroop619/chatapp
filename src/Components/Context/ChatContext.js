import { createContext, useContext, useReducer } from "react";
import { AuthContext } from "./AuthContext";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
    const {currentUser}=useContext(AuthContext) 

    const initialState = {
        chatId: "null",
        user: {}
      };
      
      const chatReducer = (state, action) => {
        switch (action.type) {
          case "CHANGE_USER":
            return {
                user:action.payload,
                chatId: currentUser.uid > action.payload.userId ? currentUser.uid + action.payload.userId : action.payload.userId + currentUser.uid

            };
          default:
            return state;
        }
      };
      const [state, dispatch] = useReducer (chatReducer, initialState) ;
  return (
    <ChatContext.Provider value={{ data:state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
