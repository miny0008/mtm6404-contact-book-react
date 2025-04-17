import { useEffect, useState } from 'react';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../utils/db';
import { useParams, useNavigate, Link } from 'react-router-dom';

export default function ContactDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      await deleteDoc(doc(db, 'contacts', id));
      navigate('/');
    }
  };

  useEffect(() => {
    const fetchContact = async () => {
      const docRef = doc(db, 'contacts', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) setContact({ id: docSnap.id, ...docSnap.data() });
    };
    fetchContact();
  }, [id]);

  if (!contact) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="header">
        <Link to="/" className="btn btn-secondary">← Back</Link>
        <div className="actions">
          <Link to={`/edit/${id}`} className="btn btn-warning">Edit</Link>
          <button onClick={handleDelete} className="btn btn-danger">Delete</button>
        </div>
      </div>
      <div className="contact-details">
        <h2>{contact.firstName} {contact.lastName}</h2>
        <p><strong>Email:</strong> {contact.email}</p>
        {contact.phone && <p><strong>Phone:</strong> {contact.phone}</p>}
        {contact.address && <p><strong>Address:</strong> {contact.address}</p>}
      </div>
    </div>
  );
}