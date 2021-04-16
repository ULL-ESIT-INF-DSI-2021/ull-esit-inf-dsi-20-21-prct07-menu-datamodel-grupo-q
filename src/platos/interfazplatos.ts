/**
 * Interfaz Ingredientes. Permite definir los métodos que tendrá la clase Ingrediente, que serán getters y setters.
 */
 export interface PlatosI<G, K>{

  getNombre(): string;
  getGrupoPredominante(): G;
  getComposicionNutricional(): K;
  getCategoria(): string;
  getPrecio(): number;

  setNombre(nombre: string): void;
  setGrupoPredominante(): void;
  setComposicionNutricional(): void;
  setCategoria(categoria: "Entrante" | "Primer plato" | "Segundo plato" | "Postre"): void;
  setPrecio(precio: number): void;
}