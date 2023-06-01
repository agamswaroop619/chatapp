import logo from './Untitled design.svg';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import SignIn from './Components/SignIn'
import ChatRoom from './Components/ChatRoom/ChatRoom'

function App() {

firebase.initializeApp({
  apiKey: "AIzaSyDsvskhGFbDO5HXK3lqG7iKHaVwrBLJXl4",
  authDomain: "chatapp-6851a.firebaseapp.com",
  projectId: "chatapp-6851a",
  storageBucket: "chatapp-6851a.appspot.com",
  messagingSenderId: "1008138350309",
  appId: "1:1008138350309:web:9e4dfcce3a685f5e706e0c",
  measurementId: "G-GLVKKJS8C2"
});
const auth =firebase.auth();
const firestore=firebase.firestore();

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
