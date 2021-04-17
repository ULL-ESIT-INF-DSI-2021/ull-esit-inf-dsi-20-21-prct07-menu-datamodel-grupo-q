import { Platos } from "./platos";
/**
 * Clase para mostrar por pantalla el contenido del plato
 */
export class PlatoPrinter {
  constructor(private plato: Platos) {
    this.plato = plato;
  }

  /**
   * Metodo para mostrar pon pantalla el plato
   */
  print() {
    
    console.log(`Nombre: ${this.plato.getNombre()}, \n    Ingredientes:`);
    this.plato.getIngredientes().forEach((item) => {
      console.log(`        ${item[0].getNombre()}`);
    });
    console.log(`\n    Composición nutriconal: \n        Kcal = ${this.plato.getComposicionNutricional().kCal}, \n        Proteinas = ${this.plato.getComposicionNutricional().proteinas},\n        Lipidos = ${this.plato.getComposicionNutricional().lipidos}, \n        Hidratos de Carbono = ${this.plato.getComposicionNutricional().hCarbono},\n    Grupo alimenticio: ${this.plato.getGrupoPredominante().grupo}, \n    Precio: ${this.plato.getPrecio()} €`);
  }

  /**
   * Metodo para obtener el plato a imprimir
   * @returns el plato a imprimir
   */
  getPlato() {
    return this.plato;
  }

  /**
   * Metodo para establecer el nuevo plato a imprimir
   * @param platos plato a imprimir
   */
  setPlato(platos: Platos) {
    this.plato = platos;
  }
}