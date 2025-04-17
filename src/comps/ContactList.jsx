import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";  
import { db } from "../utils/db";
import { Link } from "react-router-dom";

export function ContactList({ contacts }) {
  return (
    <ul className="contact-list">
      {contacts.map(contact => (
        <li key={contact.id}>
          <Link to={`/contact/${contact.id}`}>
            {contact.lastName}, {contact.firstName}
          </Link>
        </li>
      ))}
    </ul>
  );
}

