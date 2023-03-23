import { Observable } from "./observable";
import { Observer } from "./observer";
import { Revista } from "./revista";
/**
 * clase subscriptor,  implementa la interfazr observador
 */
export class Subscriptor implements Observer {
  /**
   * constructor de la clase
   * @param nombre nombre del subscriptor
   */
  constructor(private nombre: string) {}
  /**
   * getter del nomber del subscriotor
   * @returns nombre
   */
  getnombre() {
    return this.nombre;
  }
  /**
   * setter del nombre del subscriptor
   * @param nombre nombre del sunscriptor
   */
  setNombre(nombre: string) {
    this.nombre = nombre;
  }
  /**
   * metodo oblicado por al interfaz observador, para avisar cunado hay una cambio en el objeto observado
   * @param observable 
   */
  update(observable: Observable): void {
    if (observable instanceof Revista) {
      console.log(
        `El nombre de la revista es ${observable.getname()},` +
          ` se publica en esta fecha ${observable.getFecha()},` +
          ` el titulo de la revista es ${observable.getTitulo()}` +
          `y tiene ${observable.getlectores()} lectores mensuales`
      );
    }
  }
}
