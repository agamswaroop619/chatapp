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
            const waiter= currentUser.uid > action.payload.uid ? currentUser.uid + action.payload.uid : action.payload.uid+ currentUser.uid;
            console.log(waiter); 
            return {
              user: action.payload,
              chatId: waiter
            };
          default:
            return state;
        }
      };
      
      const [state, dispatch] = useReducer(chatReducer, initialState);      
      
      return (
        <ChatContext.Provider value={{ data: state, dispatch }}>
          {children}
        </ChatContext.Provider>
      );
      
};
