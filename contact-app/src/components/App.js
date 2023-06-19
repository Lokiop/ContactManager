import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import { v4 as uuid } from 'uuid'
import './App.css';
import api from '../api/contacts'
import Header from './Header';
import AddContact from './AddContact'
import ContactList from './ContactList'
import ContactDetail from './ContactDetail';
import EditContact from './EditContact';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  //Retrieve Contacts
  const retrieveContacts = async () => {
    const reponse = await api.get('/contacts')
    return reponse.data;
  }

  //Add Contact
  const addContactHandler = async (contact) => {
    const request = {
      id: uuid(),
      ...contact
    }

    const response = await api.post('/contacts', request)
    setContacts([...contacts, response.data]);
    console.log(contact);
  }

  const updateContactHandler = async (contact) => {
    console.log(contact)
    const response = await api.put(`/contacts/${contact.id}`, contact)
    const { id, name, email } = response.data;
    setContacts(
      contacts.map((c) => {
        return c.id === id ? response.data : c;
      })
    )
  }

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })

    setContacts(newContactList)
  }

  useEffect(() => {
    //   const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    //   if (retrieveContacts) {
    //     setContacts(retrieveContacts);
    // }
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    }

    getAllContacts();
  }, []);

  useEffect(() => {
    // if (contacts.length > 0) { localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)); }
  }, [contacts]);

  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
          <Route path='/add' element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path='/edit' element={<EditContact updateContactHandler={updateContactHandler} />} />
          <Route path='/contact/:id' element={<ContactDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
