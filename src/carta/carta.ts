import { Menu } from "../menus/menus"
import { Platos } from "../platos/platos"
import { CartaI } from "./interfazCarta"

/**
 * Clase Platos. Permite instanciar objetos de tipo plato. Las propiedades que
 * tiene un ingrediente son: Nombre, ingredientes , su composición nutricional,
 * la ciudad y el país de origen y el precio.
 */
export class Carta implements CartaI{
  

  /**
   * Constructor de la clase Carta.
   * @param menus Array con los menús
   * @param platos Array con los platos
   */
  constructor(private nombreRestaurante: string, private menus: Menu[], private platos: Platos[]) {}

  
  /**
   * Metodo para obtener los nombres de los restaurantes que tienen carta
   * @returns Nombre de los restaurantes
   */
   public getNombre() {
    return this.nombreRestaurante
  }


  /**
   * Metodo para obtener los menus de la carta
   * @returns menus de la carta
   */
  public getMenus() {
    return this.menus
  }
  
  /**
   * Metodo para añadir un menu a la carta
   * @param menu el menu a añadir
   */
  public addMenus(menu: Menu) {
    this.menus.push(menu);
  }

  /**
   * Método para borrar un menu de la carta
   * @param menu el menu a eliminar
   */
  public removeMenus(menu: Menu) {
    const indice: number = this.menus.indexOf(menu);
    this.menus.splice(indice, 1);
  }

  /**
   * Metodo para obtener los platos de la carta
   * @returns platos de la carta
   */
  public getPlatos() {
    return this.platos
  }
  
  /**
   * Metodo para añadir un plato a la carta
   * @param plato el plato a añadir
   */
  public addPlato(plato: Platos) {
    this.platos.push(plato);
  }
  /**
   * Método para borrar un plato de la carta
   * @param plato el plato a eliminar
   */
  public removePlato(plato: Platos) {
    const indice: number = this.platos.indexOf(plato);
    this.platos.splice(indice, 1);
  }
}