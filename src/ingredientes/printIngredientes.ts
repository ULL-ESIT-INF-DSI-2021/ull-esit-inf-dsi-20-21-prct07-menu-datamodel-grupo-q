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
    console.log(`Nombre: ${this.ingrediente.getNombre()},\n    Grupo alimenticio: ${this.ingrediente.getGrupoAlimenticio().grupo}, \n    Composición nutriconal: \n        Kcal = ${this.ingrediente.getComposicionNutricional().kCal}, \n        Proteinas = ${this.ingrediente.getComposicionNutricional().proteinas},\n        Lipidos = ${this.ingrediente.getComposicionNutricional().lipidos}, \n        Hidratos de Carbono = ${this.ingrediente.getComposicionNutricional().hCarbono},\n    Localización: \n        Ciudad = ${this.ingrediente.getLocalizacion().ciudad}, \n        Pais = ${this.ingrediente.getLocalizacion().pais}, \n    Precio: ${this.ingrediente.getPrecio()} €/kg`);
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