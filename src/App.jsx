import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db } from "./utils/db.js";
import { collection, getDocs } from 'firebase/firestore';
import Home from "./pages/Home.jsx";
import AddContact from "./pages/AddContact.jsx";
import EditContact from "./pages/EditContact.jsx";
import ContactDetails from './comps/contactDetail.jsx';

export function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:id" element={<EditContact />} />
        <Route path="/contact/:id" element={<ContactDetails />} />
      </Routes>
    </Router>
  );
}

