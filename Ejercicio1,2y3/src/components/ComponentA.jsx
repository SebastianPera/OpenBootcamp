import { Contact } from './../models/contact.class';
import ComponentB from './ComponentB';


function ComponentA() {

  const contactExample = new Contact('Sebastián', 'Pera', 'sebaa.pera@gmail.com', false);

  return (
    <div>
      <h1>
        Contacto:
      </h1>
      <ComponentB contact={contactExample}/>
    </div>
  )
}

export default ComponentA;