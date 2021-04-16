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
    console.log(`CARTA DEL RESTAURANTE \n     Menus:`);
    let auxiliar: [string[], string[], string[], string[]] = [[], [], [], []];;
    this.carta.getMenus().forEach((item) => {
      item.getPlatos().forEach((elemento) => {
        if (elemento.getCategoria() == "Entrante") auxiliar[0].push(elemento.getNombre());
        if (elemento.getCategoria() == "Primer plato") auxiliar[1].push(elemento.getNombre());
        if (elemento.getCategoria() == "Segundo plato") auxiliar[2].push(elemento.getNombre());
        if (elemento.getCategoria() == "Postre") auxiliar[3].push(elemento.getNombre());
      });
      
      console.log(`        Ǹombre: ${item.getNombre()}`);
      console.log(`            Entrante:`)
      auxiliar[0].forEach((elemento) => { console.log(`                ● ${elemento}`)});
      console.log(`\n            Primer plato:`)
      auxiliar[1].forEach((elemento) => { console.log(`                ● ${elemento}`)});
      console.log(`\n            Segundo plato:`)
      auxiliar[2].forEach((elemento) => { console.log(`                ● ${elemento}`)});
      console.log(`\n            Postres:`)
      auxiliar[3].forEach((elemento) => { console.log(`                ● ${elemento}\n\n`)});
    });

    auxiliar = [[], [], [], []];

    console.log(`\n     Platos:`);
    this.carta.getPlatos().forEach((plato) => {
      if (plato.getCategoria() == "Entrante") auxiliar[0].push(plato.getNombre());
      if (plato.getCategoria() == "Primer plato") auxiliar[1].push(plato.getNombre());
      if (plato.getCategoria() == "Segundo plato") auxiliar[2].push(plato.getNombre());
      if (plato.getCategoria() == "Postre") auxiliar[3].push(plato.getNombre());
    });

    console.log(`            Entrantes:`)
    auxiliar[0].forEach((plato) => { console.log(`                ● ${plato}`)});
    console.log(`\n            Primeros platos:`)
    auxiliar[1].forEach((plato) => { console.log(`                ● ${plato}`)});
    console.log(`\n            Segundos platos:`)
    auxiliar[2].forEach((plato) => { console.log(`                ● ${plato}`)});
    console.log(`\n            Postres:`)
    auxiliar[3].forEach((plato) => { console.log(`                ● ${plato}`)});
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