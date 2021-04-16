import { Carta } from "./carta";

/**
 * Clase para mostrar por pantalla el contenido de la carta
 */
export class CartaPrinter {
  constructor(private carta: Carta) {
    this.carta = carta;
  }

  /**
   * Metodo para mostrar pon pantalla la carta
   */
  print() {
    console.log(`CARTA DEL RESTAURANTE \n\t Menus:`);
    this.carta.getMenus().forEach((item) => {
      console.log(`\t\tǸombre: ${item.getNombre()}`);
      item.getPlatos().forEach((elemento) => {
      console.log(`\t\t\tTipo: ${elemento.getCategoria()}\tNombre: ${elemento.getNombre()}`);
      });
    });
    console.log(`\t Platos:`);
    this.carta.getPlatos().forEach((item) => {
      console.log(`\t\t\tTipo: ${item.getCategoria()}\tNombre: ${item.getNombre()}`);
    });
  }

  /**
   * Metodo para obtener la carta a imprimir
   * @returns el carta a imprimir
   */
  getcarta() {
    return this.carta;
  }

  /**
   * Metodo para establecer la nueva carta a imprimir
   * @param carta carta a imprimir
   */
  setcarta(carta: Carta) {
    this.carta = carta;
  }
}