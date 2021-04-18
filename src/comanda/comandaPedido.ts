import { Menu } from "../menus/menus"
import { Platos } from "../platos/platos"
import { Carta } from "../carta/carta"
var inquirer = require('inquirer');

/**
 * Clase Platos. Permite instanciar objetos de tipo plato. Las propiedades que
 * tiene un ingrediente son: Nombre, ingredientes , su composición nutricional,
 * la ciudad y el país de origen y el precio.
 */
export class ComandaPedido  {
  
  /**
   * Constructor de la clase comanda.
   * @param carta Carta del restaurante
   */
  constructor(private pedido: Menu | Platos, private cantidad: number) {

  }

  /**
   * Método para acceder al pedido.
   */
  getPedido() {
    return this.pedido;
  }

  /**
   * Método para actualizar el pedido.
   * @param newPedido Platos nuevos que quieres asignar al pedido.
   */
  setPedido(newPedido: Menu | Platos) {
    this.pedido = newPedido;
  }

  /**
   * Método para obtener la cantidad.
   */
  getCantidad() {
    return this.cantidad;
  }

  /**
   * Método para actualizar la cantidad de cada ingrediente.
   * @param newCantidad cantidad nueva a asignar.
   */
  setCantidad(newCantidad: number) {
    this.cantidad = newCantidad;
  }
}
