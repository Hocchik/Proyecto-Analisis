import React from 'react'
import { useSelector } from 'react-redux'

const ResumenReserva = () => {
    const reserva = useSelector(state => state.reserva)
    const {numeroPersonas, fecha, hora, numeroMesa} = reserva;

  return (
    <div>
      <h1>Resumen de tu reserva</h1>
      <p>Fecha :{fecha}</p>
      <p>Hora: {hora}</p>
      <p>Cantidad de personas: {numeroPersonas}</p>
      <p>Numero de mesa: {numeroMesa}</p>

    </div>
  )
}

export default ResumenReserva;