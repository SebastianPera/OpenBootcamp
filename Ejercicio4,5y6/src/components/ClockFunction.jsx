import { useEffect, useState } from 'react';

const ClockFunction = () => {

  const initialState = {
    fecha: new Date(),
    edad: 0,
    nombre: 'Sebastián',
    apellidos: 'Pera'
  }

  const [state, setState] = useState(initialState);
  
  const tick = () => {
    setState({
      ...state,
      fecha: new Date(),
      edad: state.edad + 1
    })
  }
  
  useEffect(() => {
    const timerID = setInterval(() => {
      tick();
    }, 1000)
    
    return() => {
      clearInterval(timerID)
    }
    
  });
  
  return (
    <div>
      <h2>
        Hora actual: 
        {state.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {`${state.nombre} ${state.apellidos}`}
      </h3>
      <h1>
        Edad: {state.edad}
      </h1>
    </div>
  )
}

export default ClockFunction;