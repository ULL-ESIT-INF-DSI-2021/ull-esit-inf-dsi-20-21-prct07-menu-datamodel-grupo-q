import { Menu } from "../menus/menus"
import { Platos } from "../platos/platos"
import { ComandaPedido } from "./comandaPedido"
var inquirer = require('inquirer');

/**
 * Clase Platos. Permite instanciar objetos de tipo plato. Las propiedades que
 * tiene un ingrediente son: Nombre, ingredientes , su composición nutricional,
 * la ciudad y el país de origen y el precio.
 */
export class ComandaFinal  {
  
  /**
   * Constructor de la clase comanda.
   * @param carta Carta del restaurante
   */
  constructor(private comanda: ComandaPedido[]) {

  }

  /**
   * Método para acceder a la comanda.
   */
  getComanda() {
    return this.comanda;
  }

  /**
   * Método para añadir una comanda nueva.
   * @param newComanda Actualizar nuestra comanda.
   */
  setComanda(newComanda: ComandaPedido[]) {
    this.comanda = newComanda;
  }

  /**
   * Método para añadir un pedido nuevo a nuestra comanda
   * @param newPedido Pedido que queremos añadir.
   */
  addPedido(newPedido: ComandaPedido) {
    this.comanda.push(newPedido);
  }

  /**
   * Método para eliminar un pedido de la comanda
   * @param newPedido Pedido que queremos eliminar.
   */
  removePedido(newPedido: ComandaPedido) {
    let i: number = 0;
    let indice: number = 0;
    this.comanda.forEach((item) => {
      if (item == newPedido) {
        indice = i;
      }
      i++;
    });

    this.comanda.splice(indice, 1);
  }
}
