import React from 'react'
import { Persona } from '../models/Persona'
import { ListaPersona } from '../models/ListaPersona'

export default function TablaUsuario(props: ListaPersona) {
    return (
        <div>


            <table className="w-full">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        props.listaPersiona.map((persona: Persona) => (
                            <tr key={persona.id} className="border-2 border-gray-300 rounded-md p-2">
                                <td>{persona.id}</td>
                                <td>{persona.nombre}</td>
                                <td>{persona.edad}</td>
                                <td>{persona.email}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}
