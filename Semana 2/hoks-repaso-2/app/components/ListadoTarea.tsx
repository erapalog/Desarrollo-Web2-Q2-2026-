import React from 'react'
import { ListaTareas } from '../models/ListaTareas'
import { Tarea } from '../models/Tareas';

export default function ListadoTarea({listadetareas}: ListaTareas) {

   function editar({titulo}: Tarea): void{
    console.log(titulo);
   }


  return (
    <>
    <table className='table'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Titulo</th>
                <th>Descripcion</th>
                <th>Completada</th>
            </tr>
        </thead>
        <tbody></tbody>
            {listadetareas.map((tarea) => (
                <tr key={tarea.id}>
                    <td>{tarea.id}</td>
                    <td>{tarea.titulo}</td>
                    <td>{tarea.descripcion}</td>
                    <td>{tarea.completada}</td>
                    <td><button className='btn btn-warning' onClick={() => editar(tarea)}>Editar</button></td>
                </tr>
            ))}
    </table>
    </>
  )
}
