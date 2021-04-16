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
    
    console.log(`Nombre: ${this.plato.getNombre()}, \n\tIngredientes:`);
    this.plato.getIngredientes().forEach((item) => {
      console.log(`\t\t${item[0].getNombre()}`);
    });
    console.log(`\n\tComposición nutriconal: \n\t\tKcal = ${this.plato.getComposicionNutricional().kCal}, \n\t\tProteinas = ${this.plato.getComposicionNutricional().proteinas},\n\t\tLipidos = ${this.plato.getComposicionNutricional().lipidos}, \n\t\tHidratos de Carbono = ${this.plato.getComposicionNutricional().hCarbono},\n\tGrupo alimenticio: ${this.plato.getGrupoPredominante().grupo}, \n\tPrecio: ${this.plato.getPrecio()} €`);
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