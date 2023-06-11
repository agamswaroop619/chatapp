import './App.css';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import {useAuthState} from 'react-firebase-hooks/auth'
import SignIn from './Components/SignIn'
import ChatRoom from './Components/ChatRoom/ChatRoom'
import { auth } from './firebase';

function App() {

const[user]= useAuthState(auth);
  return (
    <div className="App">
      <section>
        {user ?<ChatRoom></ChatRoom>: <SignIn ></SignIn>}
      </section>
      
    </div>
  );
}

export default App;
