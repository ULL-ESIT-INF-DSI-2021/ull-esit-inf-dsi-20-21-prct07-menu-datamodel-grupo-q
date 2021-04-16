import { Platos } from "./platos";
export class PlatoPrinter {
  constructor(private plato: Platos) {
    this.plato = plato;
  }

  print() {
    
    console.log(`Nombre: ${this.plato.getNombre()}, \n\tIngredientes:`);
    this.plato.getIngredientes().forEach((item) => {
      console.log(`\t\t${item[0].getNombre()}`);
    });
    console.log(`\n\tComposición nutriconal: \n\t\tKcal = ${this.plato.getComposicionNutricional().kCal}, \n\t\tProteinas = ${this.plato.getComposicionNutricional().proteinas},\n\t\tLipidos = ${this.plato.getComposicionNutricional().lipidos}, \n\t\tHidratos de Carbono = ${this.plato.getComposicionNutricional().hCarbono},\n\tGrupo alimenticio: ${this.plato.getGrupoPredominante().grupo}, \n\tPrecio: ${this.plato.getPrecio()} €`);
  }
}