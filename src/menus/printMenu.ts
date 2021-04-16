import { Menu } from "./menus";

/**
 * Clase para mostrar por pantalla el contenido del menú
 */
export class MenuPrinter {
  constructor(private menu: Menu) {
    this.menu = menu;
  }

  /**
   * Metodo para mostrar pon pantalla el menu
   */
  print() {
    console.log(`Nombre: ${this.menu.getNombre()}, \n\tPlatos:`);
    this.menu.getPlatos().forEach((item) => {
      console.log(`\t\tǸombre: ${item.getNombre()} \tTipo: ${item.getCategoria()}`);
    });
    console.log(`\n\tComposición nutriconal: \n\t\tKcal = ${this.menu.getComposicionNutricional().kCal}, \n\t\tProteinas = ${this.menu.getComposicionNutricional().proteinas},\n\t\tLipidos = ${this.menu.getComposicionNutricional().lipidos}, \n\t\tHidratos de Carbono = ${this.menu.getComposicionNutricional().hCarbono},\n\tGrupo alimenticio: ${this.menu.listadoGrupos()}, \n\tPrecio: ${this.menu.getPrecio()} €`);
  }

  /**
   * Metodo para obtener el menu a imprimir
   * @returns el menu a imprimir
   */
  getMenu() {
    return this.menu;
  }

  /**
   * Metodo para establecer el nuevo menu a imprimir
   * @param menus Menu a imprimir
   */
  setMenu(menus: Menu) {
    this.menu = menus;
  }
}