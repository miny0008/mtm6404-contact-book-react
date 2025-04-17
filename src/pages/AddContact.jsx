
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { ContactForm } from '../comps/ContactForm.jsx';
import { db } from '../utils/db';
import { useNavigate } from 'react-router-dom';


export default function AddContact() {
    const navigate = useNavigate();
  
    const handleSubmit = async (formData) => {
        console.log('Sending to Firestore:', formData); 
        try {
          const docRef = await addDoc(collection(db, 'Contacts'), formData);
          navigate(`/contact/${docRef.id}`);
        } catch (error) {
          console.error('Error adding document:', error);
        }
      };
  
    return <ContactForm onSubmit={handleSubmit} />;
  }