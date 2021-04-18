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
    console.log(`Nombre: ${this.menu.getNombre()}, \n    Platos:`);
    let auxiliar: [string[], string[], string[], string[]] = [[], [], [], []];
    this.menu.getPlatos().forEach((item) => {
        if (item.getCategoria() == "Entrante") auxiliar[0].push(item.getNombre());
        if (item.getCategoria() == "Primer plato") auxiliar[1].push(item.getNombre());
        if (item.getCategoria() == "Segundo plato") auxiliar[2].push(item.getNombre());
        if (item.getCategoria() == "Postre") auxiliar[3].push(item.getNombre());
    });
      console.log(`       Entrante:`)
      auxiliar[0].forEach((item) => { console.log(`            ● ${item}`)});
      console.log(`       Primer plato:`)
      auxiliar[1].forEach((item) => { console.log(`            ● ${item}`)});
      console.log(`       Segundo plato:`)
      auxiliar[2].forEach((item) => { console.log(`            ● ${item}`)});
      console.log(`       Postres:`)
      auxiliar[3].forEach((item) => { console.log(`            ● ${item}`)});
    console.log(`    Composición nutriconal: \n        Kcal = ${this.menu.getComposicionNutricional().kCal}, \n        Proteinas = ${this.menu.getComposicionNutricional().proteinas},\n        Lipidos = ${this.menu.getComposicionNutricional().lipidos}, \n        Hidratos de Carbono = ${this.menu.getComposicionNutricional().hCarbono},\n    Grupo alimenticio: ${this.menu.listadoGrupos()}, \n    Precio: ${this.menu.getPrecio()} €`);
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