'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { Persona } from "./models/Persona";
import TablaUsuario from "./components/TablaUsuario";
import ComponenteSecundario from "./components/ComponenteSecundario";

export default function Home() {

  const [count, setCount] = useState<number>(0);
  const [listaPersiona, setListaPersiona] = useState<Persona[]>([]);
  const [nombre, setNombre] = useState<string>("");
  const [edad, setEdad] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  
  let count2=0;

  function incrementar():void{
     count2+=1;
     setCount(count+1);

  }

  function disminuir(value:number):void{

    if(count<=0){
      return
    }
    count2-=value;
    setCount(count-value);
  }

  //get, set 


  useEffect(()=>{
    //alert("El componente se ha montado");

  },[]);


  useEffect(()=>{
    //alert("El componente count se ha actualizado");

  },[count]);


  function agregarPersona():void{

    const persona: Persona={
      id: listaPersiona.length + 1,
      nombre: nombre,
      edad: parseInt(edad),
      email: email
    }

    setListaPersiona([...listaPersiona, persona]);

    setNombre("");
    setEdad("");
    setEmail("");

  }


  useEffect(()=>{
    console.log(listaPersiona);
  },[listaPersiona]);

  
  return (
      <main className="">
       
         <h1>Uso de Hooks </h1> 

       {/*Estado de React: {count} <br />
         Variable de JavaScript: {count2} <br />

         <button type="button" onClick={incrementar} className="bg-blue-500 text-white p-2 rounded-md">Incrementar</button>
         <button type="button" onClick={()=>disminuir(2)} className="bg-red-500 text-white p-2 rounded-md">Disminuir</button>*/}

        <form action="">
          <input type="text" 
             name="nombre" 
             placeholder="Nombre" 
             className="border-2 border-gray-300 rounded-md p-2"
             value={nombre}
             onChange={(e)=>setNombre(e.target.value)}
             />
          
          <input type="number" 
              name="edad"
               placeholder="Edad" 
               className="border-2
                border-gray-300 rounded-md p-2"  
                value={edad}
                onChange={(e)=>setEdad(e.target.value)}
                />

          <input type="email"
           name="email"
            placeholder="Email" 
            className="border-2 border-gray-300 rounded-md p-2"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
          <button type="button" onClick={agregarPersona} className="bg-blue-500 text-white p-2 rounded-md">Agregar Persiona</button>
        </form> <br />

        <TablaUsuario listaPersiona={listaPersiona} /> <br />

        <ComponenteSecundario />


      </main>
  );
}
