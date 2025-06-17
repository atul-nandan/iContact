import { useEffect, useState } from 'react'
import Header from './Header'
import './App.css'
import Contact from './Contact'
import List from './List'
import uuid4 from 'uuid4';

function App() {
  const localstorageKey = "contacts";
    // show or hide form
  const [showForm, setShowForm] = useState(false);
  const [contacts, setContacts] = useState(()=>{
    // Retrieve from localStorage when the component first mounts
    return JSON.parse(localStorage.getItem(localstorageKey)) || []
  });
  // useEffect(() => {
  //   const storedContacts = ;
  //   setContacts(storedContacts);
  // }, []);

  //Local Storage
  useEffect(() => {
    localStorage.setItem(localstorageKey, JSON.stringify(contacts))
  }, [contacts]);

  const alldatafunc = (data) => {
    // console.log(data,"from app");
    setContacts([...contacts, { id: uuid4(), data }]);
     setShowForm(false);
  }

  const removehandle = (id) => {
    const newcontact = contacts.filter((item) => {
      return item.id !== id;
    });
    setContacts(newcontact);
  }

  return (
    <>
      <Header />
      <List contactlist={contacts} removeitem={removehandle} />
      {!showForm ? (
        <button className="golden-button" onClick={() => setShowForm(true)}><span class="golden-text">Add New Contact</span></button>
      ) : (
        <Contact alldata={(data) => alldatafunc(data)} />
      )}

      
    </>
  )
}

export default App
