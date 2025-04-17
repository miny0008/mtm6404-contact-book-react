import { useState } from 'react';

export function ContactForm({ initialData = {}, onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: initialData.firstName || '',
    lastName: initialData.lastName || '',
    email: initialData.email || '',
    phone: initialData.phone || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting formData:', formData); 
    onSubmit(formData);
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <input
        type="tel"
        placeholder="Phone (optional)"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <button type="submit">Save Contact</button>
    </form>
  );
}