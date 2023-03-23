import { Observable } from "./observable";
import { Observer } from "./observer";

/**
 * clase revista que implementa la interfaz observable
 */
export class Revista implements Observable{
  private observers: Observer[] = [];
  /**
   * constructor de la clase revista
   * @param nombre nombre de la revista
   * @param fecha fehca de lanzamiento
   * @param titulo titular 
   * @param lectores numero de lectores medio
   */
  constructor(private nombre: string, private fecha: string, private titulo: string, private lectores: number){}
  /**
   * getter dle nombre
   * @returns nomgre
   */
  getname(){
    return this.nombre
  }
  /**
   * setter del nombre
   * @param nombre_ nuevo nombre
   */
  setname(nombre_ :string){
    this.nombre = nombre_
  }
  /**
   * getter de la fehca de publicacion
   * @returns fecha
   */
  getFecha(){
    return this.fecha
  }
  /**
   * setter de la fecha 
   * @param fecha_ fecha nueva
   */
  setFecha(fecha_ : string){
    this.fecha = fecha_
  }
  /**
   * getter del titular
   * @returns titular
   */
  getTitulo(){
    return this.titulo
  }
  /**
   * setter del titulo
   * @param titulo_ nnuevo titulo
   */
  setTitulo(titulo_ : string){
    this.titulo = titulo_
  }
  /**
   * getter de la cantidad de lectores medio
   * @returns numero de lectores
   */
  getlectores(){
    return this.lectores
  }
  /**
   * setter de lectores
   * @param lectores_ numero de lectores emdio
   */
  setLectores(lectores_ : number){
    this.lectores = lectores_
  }
  /**
   * metodo subscribe, añade observadores al array de observers apr anotificar cuando hay un cambio
   * @param observer 
   */
  subscribe(observer: Observer) {
    if (this.observers.includes(observer)) {
      throw new Error('The observer had already been subscribed');
    } else {
      this.observers.push(observer);
    }
  }
  /**
   * elimina determinado subscriptor del array
   * @param observer 
   */
  unsubscribe(observer: Observer) {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      throw new Error('The observer has not been subscribed');
    } else {
      this.observers.splice(index, 1);
    }
  }
  /**
   * metodo que notifica a todos los observadores
   */
  notify() {
    this.observers.forEach((observer) => observer.update(this));
  }
  /**
   * metodo para publicar otra revista
   * @param nombre nuevo nombre
   * @param fecha nueva fecha
   * @param titulo nuevo titular
   * @param lectores nuevos lectores
   */
  publication( nombre: string,  fecha: string,  titulo: string,  lectores: number){
    this.nombre = nombre
    this.fecha = fecha
    this.titulo = titulo
    this.lectores = lectores
    this.notify()
  }
}