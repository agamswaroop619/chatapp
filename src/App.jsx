import './App.css';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import {useAuthState} from 'react-firebase-hooks/auth'
import SignIn from './Components/SignIn'
import ChatRoom from './Components/ChatRoom/ChatRoom'
import { auth } from './firebase';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './Components/Context/AuthContext';

function App() {
const[user]= useAuthState(auth);
const {currentUser} = useContext (AuthContext);
console.log(currentUser);
return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/chatroom" element={<ChatRoom />} />
      </Routes>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </BrowserRouter>
  </div>
);
}

export default App;
