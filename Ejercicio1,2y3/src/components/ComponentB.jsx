import { useState } from 'react';
import { Contact } from './../models/contact.class';
import PropTypes from 'prop-types'

function ComponentB({ contact }) {

  const [conectado, setConectado] = useState(contact.conectado);

  return (
    <div>
      <h2>Nombre: { contact.nombre }</h2>
      <h2>Apellido: { contact.apellido }</h2>
      <h3>Email: { contact.email }</h3>
      <h4>
        {conectado === false ? 'Contacto no disponible' : 'Contacto en línea'}
      </h4>
      <button onClick={ () => setConectado(!conectado) }>
        Cambiar estado
      </button>
    </div>
  )
}

ComponentB.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ComponentB;