import React from 'react'
import { useRef } from 'react';
import Contact from './../../../models/contact';
import { PropTypes } from 'prop-types';

const ContactForm = ({add}) => {

  const nameRef = useRef('');
  const emailRef = useRef('')

  function addContact(e) {
    e.preventDefault();
    const newContact = new Contact(
      nameRef.current.value,
      emailRef.current.value,
      false
    );
    add(newContact);
  }

  return (
    <form onSubmit={addContact} className='d-flex align-items-center mb-4'>
      <div className='d-flex gap-2'>
        <input ref={nameRef} type="text" required autoFocus placeholder='Contact Name' className="form-control form-control-lg" />
        <input ref={emailRef} type="email" required placeholder='example@gmail.com' className="form-control form-control-lg"/>
      </div>
      <button type='submit' className='btn btn-success btn-lg ms-2'>Add Contact</button>
    </form>
  )
}

ContactForm.propTypes = {
  add: PropTypes.func.isRequired,
};

export default ContactForm;