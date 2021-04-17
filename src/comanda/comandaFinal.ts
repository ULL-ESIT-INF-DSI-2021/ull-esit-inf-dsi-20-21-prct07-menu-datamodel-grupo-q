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

  getComanda() {
    return this.comanda;
  }

  setComanda(newComanda: ComandaPedido[]) {
    this.comanda = newComanda;
  }

  addPedido(newPedido: ComandaPedido) {
    this.comanda.push(newPedido);
  }

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
