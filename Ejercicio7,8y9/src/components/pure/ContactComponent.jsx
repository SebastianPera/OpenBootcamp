import React from 'react'
import { PropTypes } from 'prop-types';
import Contact from './../../models/contact';
import '../../styles/contact.scss'


const ContactComponent = ({ contact, state, remove }) => {

  function contactState() {
    if (contact.connected) {
      return(
        <h6 className='mb-0'>
          <span className='badge bg-primary'>CONECTADO</span>
        </h6>
      )
    }else{
      return(
        <h6 className='mb-0'>
          <span className='badge bg-danger'>DESCONECTADO</span>
        </h6>
      )
    }
  }

  function contactStateIcon() {
    if (contact.connected) {
      return(
        <i onClick={() => {state(contact)}} className='bi bi-toggle-on contact-action' style={{ color: "green", fontWeight: 'bold' }}></i>
      )
    }else{
      return(
        <i onClick={() => {state(contact)}} className='bi bi-toggle-off contact-action' style={{ color: 'grey' }}></i>
      )
    }
  }

  return (
    <tr>
      <th>
        <span>{contact.name}</span>
      </th>
      <td>
        <span>{contact.email}</span>
      </td>
      <td>
        {/* Execution of function to return badge element */}
        { contactState() }
      </td>
      <td>
        {/* Execution of function to return icon depending on completion */}
        { contactStateIcon() }
        <i onClick={() => {remove(contact)}} className="bi-trash ms-3 contact-action" style={{ color: "tomato" }}></i>
      </td>
    </tr>
  )
}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
  state: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default ContactComponent