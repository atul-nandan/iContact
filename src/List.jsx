import React from "react";
import { MdDelete } from "react-icons/md";
import "./List.css";

const List = ({ contactlist, removeitem }) => {
  return (
    <div>
      <h2>--------- Contact List ---------</h2>
      {contactlist.length > 0 ? (
        <div className="contact-list">
          {contactlist.map((contact) => (
            <div key={contact.id} className="contact-item">
              <div>
                <strong>{contact.data.name}</strong> <span className="email">{contact.data.email}</span> <span> {contact.data.contact}</span>
              </div>
              <span className="del" onClick={() => removeitem(contact.id)}>
                <MdDelete />
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p>No contacts available</p>
      )}

    </div>
  )
}

export default List;
