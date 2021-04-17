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

  getPedido() {
    return this.pedido;
  }

  setPedido(newPedido: Menu | Platos) {
    this.pedido = newPedido;
  }

  getCantidad() {
    this.cantidad;
  }

  setCantidad(newCantidad: number) {
    this.cantidad = newCantidad;
  }
}
