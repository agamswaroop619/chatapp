import logo from './Untitled design.svg';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import SignIn from './Components/SignIn'
import ChatRoom from './Components/ChatRoom/ChatRoom'
import { getFirestore } from 'firebase/firestore';
import { firestore } from './firebase';
import { auth } from './firebase';
import { db } from './firebase';
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
