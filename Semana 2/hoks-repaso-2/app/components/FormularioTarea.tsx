'use client'
import React, { useEffect, useState } from 'react'
import { ListaTareas } from '../models/ListaTareas';
import { Tarea } from '../models/Tareas';
import ListadoTarea from './ListadoTarea';

export default function FormularioTarea() {

  const [listaTareas, setListaTareas] = useState<Tarea[]>([]);
  const [titulo, setTitulo] = useState<string>('');
  const [descripcion, setDescripcion] = useState<string>('');
  const [completada, setCompletada] = useState<string>('');


  function agregarTarea(): void{
    let tarea: Tarea = {
      id: listaTareas.length + 1,
      titulo: titulo,
      descripcion: descripcion,
      completada: completada
    }

    setListaTareas([...listaTareas, tarea]);

    alert('Tarea agregada correctamente');
    setTitulo('');
    setDescripcion('');
    setCompletada('');

    console.log(listaTareas);

  }


  useEffect(() => {
    console.log(listaTareas);
  }, [listaTareas]);

  return (
    <>

    <form action="" className='form'>
        <div className='form-group'>
            <label htmlFor='titulo'>Titulo</label>
            <input type='text' className='form-control' id='titulo' placeholder='Ingrese el titulo de la tarea'
             value={titulo} onChange={(e) => setTitulo(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <label htmlFor='descripcion'>Descripcion</label>
            <input type='text' className='form-control' id='descripcion' placeholder='Ingrese la descripcion de la tarea' 
            value={descripcion} onChange={(e) => setDescripcion(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <label htmlFor='completada'>Completada</label>
            <input type='input' className='form-control' id='completada'
             value={completada} onChange={(e) => setCompletada(e.target.value)} />
        </div> <br />
        <button type='button' className='btn btn-primary' onClick={agregarTarea}>Agregar Tarea</button>
    </form> <br />
    <ListadoTarea listadetareas={listaTareas} />


    
    </>
  )
}
