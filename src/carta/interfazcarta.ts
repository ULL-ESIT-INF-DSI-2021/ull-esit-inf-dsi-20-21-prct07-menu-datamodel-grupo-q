import { Platos } from "../platos/platos"
import { Menu } from "../menus/menus"

/**
 * Interfaz Carta. Permite definir los métodos que tendrá la clase Carta.
 */
 export interface CartaI{

  getMenus(): Menu[];
  getPlatos(): Platos[];
  addPlato(plato: Platos): void;
  removePlato(plato: Platos): void;
  addMenus(menu: Menu): void;
  removeMenus(menu: Menu): void
}