import Image from "next/image";

export default function Home() {

  let numero:number=10;

  console.log(numero);


 let nombre:string="juan";

 console.log(nombre);


 let listaNumeros:number[]=[1, 2, 3, 4, 5];

 let listaNombres:string[]=["juan", "pedro", "maria"];

 function numero2():string{
  return 'juan';
 }





  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
       <h1>Hola Mundo con typescript</h1>
      </main>
    </div>
  );
}
