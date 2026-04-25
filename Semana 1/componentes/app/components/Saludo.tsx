import React from 'react'

export default function Saludo(props: Persona) {
  return (
    <div>
        Bienvenido {props.nombre} {props.apellido} de {props.edad} {props.fechaNacimiento ? `y nacido el ${props.fechaNacimiento.toLocaleDateString()}` : ''} años a la clase </div>
  )
}
