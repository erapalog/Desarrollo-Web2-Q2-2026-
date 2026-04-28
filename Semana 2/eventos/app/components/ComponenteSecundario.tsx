import React, { useState } from 'react'
import { Persona } from '../models/Persona';
import TablaUsuario from './TablaUsuario';

export default function ComponenteSecundario() {

  const [listaPersonas2, setListaPersonas2] = useState<Persona[]>([{
    id: 1,
    nombre: 'Juan',
    edad: 20,
    email: 'juan@gmail.com'
  }]);


  return (
    <div>
        <TablaUsuario listaPersiona={listaPersonas2} />
    </div>
  )
}
