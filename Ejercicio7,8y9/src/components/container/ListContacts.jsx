import { useState } from 'react';
import Contact from "../../models/contact";
import ContactComponent from '../pure/ContactComponent';
import ContactForm from './../pure/form/ContactForm';
import '../../styles/listContact.scss'

const ListContacts = () => {
  const defaultContact = new Contact(
    "Juan Perez",
    "example@gmail.com",
    false
  );

  const [contacts, setContacts] = useState([defaultContact]);

  function checkState(contact) {
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts[index].connected = !tempContacts[index].connected;
    setContacts(tempContacts);
  }

  function deleteContact(contact) {
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.splice(index, 1);
    setContacts(tempContacts);   
  }

  function addContact(contact) {
    const tempContacts = [...contacts];
    tempContacts.push(contact);
    setContacts(tempContacts);
  }

  return (
    <div className='d-flex flex-column align-items-center gap-5'>
      <div className="col-12 d-flex justify-content-center">
        <div className='card w-50'>
          {/* Card Title */}
          <div className="card-header p-3 d-flex justify-content-center">
            <h5>Your Contacts:</h5>
          </div>
          {/* Card Body */}
          <div className="card-body" style={{ position: 'relative', height: '400px' }}>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>Contact</th>
                  <th scope='col'>Email</th>
                  <th scope='col'>State</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, index) => {
                  return(
                    <ContactComponent key={index} contact={contact} state={checkState} remove={deleteContact}/>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ContactForm add={addContact}/>
    </div>
  );
};

export default ListContacts;
