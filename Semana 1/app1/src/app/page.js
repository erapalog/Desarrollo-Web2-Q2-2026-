import Image from "next/image";

export default function Home() {

   let numero=10;
   
   console.log(numero);

   numero ="juan"
   console.log(numero);

   numero = true;
   console.log(numero);

   numero = [1, 2, 3, 4, 5];
   console.log(numero);

   numero = {
    nombre: "Juan",
    edad: 20
   }
   console.log(numero);


   function numero2(){
    return 'juan';
   }
   console.log(numero2());

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Hello World</h1>
      </main>
    </div>
  );
}
