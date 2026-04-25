import Image from "next/image";
import Saludo from "./components/Saludo";
import ButtonAgregarCarrito from "./components/ButtonAgregarCarrito";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        
           <h1>Trabajando con componentes en Next.js</h1>
           <Saludo nombre='Ana' apellido='Garcia' edad={25}></Saludo>
           <Saludo nombre='Pedro' apellido='Paz' edad={28} fechaNacimiento={new Date('1990-01-01')}></Saludo>
           <ButtonAgregarCarrito />
      </main>
    </div>
  );
}
