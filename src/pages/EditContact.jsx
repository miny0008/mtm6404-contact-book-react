import { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../utils/db';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditContact() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const docRef = doc(db, 'Contacts', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFormData(docSnap.data());
        }
      } catch (error) {
        console.error('Error fetching contact:', error);
      }
    };
    fetchContact();
  }, [id]);

}