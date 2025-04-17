// pages/Home.jsx
import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../utils/db';
import { ContactList } from '../comps/ContactList.jsx';
import { SearchBar } from '../comps/SearchBar.jsx';
import { Link } from 'react-router-dom';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const q = query(collection(db, 'Contacts'), orderBy('lastName'));
        const querySnapshot = await getDocs(q);
        const contactsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setContacts(contactsData);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };
    fetchContacts();
  }, []);

  const filteredContacts = contacts.filter(contact => 
    contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Contact Book</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ContactList contacts={filteredContacts} />
      <Link to="/add" className="add-button">Add Contact</Link>
    </div>
  );
}