import { Revista } from "./revista";
import { Subscriptor } from "./subscriptor";


let revista = new Revista("OPC", "02-03-2023", "las ultimas palabras de un alumno", 24)

let cliente = new Subscriptor("Andrés")

revista.subscribe(cliente)

try{
  revista.subscribe(cliente)
} catch (error) {
  console.log( `${cliente.getnombre()} ya está subscrito`)
}

console.log("Revista actualizada")
revista.publication("OPC", "03-03-2023" , "ahora ya no necesito a nadie", 52)
