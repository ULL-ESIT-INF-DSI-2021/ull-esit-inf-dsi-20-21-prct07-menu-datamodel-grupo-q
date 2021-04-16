
import { Platos } from "../platos/platos"

/**
 * Interfaz Menu. Permite definir los métodos que tendrá la clase Menu, que serán getters y setters.
 */
 export interface MenuI<K>{

  getNombre(): string;
  getPlatos(): Platos[];
  getComposicionNutricional(): K;
  getPrecio(): number;
  addPlato(plato: Platos): void;
  removePlato(plato: Platos): void;
  listadoGrupos(): void;
  setNombre(nombre: string): void;
  setComposicionNutricional(): void;
  setPrecio(precio: number): void;
}