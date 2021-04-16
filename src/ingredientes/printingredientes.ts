import { Ingrediente } from "./ingredientes";
/**
 * Clase para mostrar por pantalla el contenido del ingrediente
 */
export class IngredientePrinter {
  constructor(private ingrediente: Ingrediente) {
    this.ingrediente = ingrediente;
  }

  /**
   * Metodo para mostrar pon pantalla el ingrediente
   */
  print() {
    console.log(`Nombre: ${this.ingrediente.getNombre()},\n\tGrupo alimenticio: ${this.ingrediente.getGrupoAlimenticio().grupo}, \n\tComposición nutriconal: \n\t\tKcal = ${this.ingrediente.getComposicionNutricional().kCal}, \n\t\tProteinas = ${this.ingrediente.getComposicionNutricional().proteinas},\n\t\tLipidos = ${this.ingrediente.getComposicionNutricional().lipidos}, \n\t\tHidratos de Carbono = ${this.ingrediente.getComposicionNutricional().hCarbono},\n\tLocalización: \n\t\tCiudad = ${this.ingrediente.getLocalizacion().ciudad}, \n\t\tPais = ${this.ingrediente.getLocalizacion().pais}, \n\tPrecio: ${this.ingrediente.getPrecio()} €/kg`);
  }

  /**
   * Metodo para obtener el ingrediente a imprimir
   * @returns el ingrediente a imprimir
   */
  getIngrediente() {
    return this.ingrediente;
  }

  /**
   * Metodo para establecer el nuevo ingrediente a imprimir
   * @param ingredientess ingrediente a imprimir
   */
  setIngrediente(ingredientes: Ingrediente) {
    this.ingrediente = ingredientes;
  }
}