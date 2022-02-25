import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import CardContact from './ContactCard';
import {v4 as uuid} from 'uuid'
import React ,{useState} from 'react';


function App() {

  const [contacts,setContacts] = useState([])

  return (
    <div className='ui container' >
        <Header/>
        <AddContact />
        <ContactList contacts={contacts}/>
        
    </div>
  );
}

export default App;
