import { Menu } from "../../menus/menus";
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { Ingrediente } from "../../ingredientes/ingredientes";
import { pruebaCartas} from "../borja/prueba";
import { ComposicionNutricional, GrupoAlimenticio } from "../../ingredientes/tiposDefinidos";
import { Platos } from "../../platos/platos";
import { coleccionPlatos } from "../platos/platosBD";
import { Carta } from "../../carta/carta";
import { coleccionMenus } from "../menus/menusBD";

/**
 * Esquema de la base de datos de menus.
 */
type schemaTypeCarta = {
  /*carta: {
        nombreRestaurante: string,
        menus: {
            nombre: string,
            platos: {
                name: string,
                ingredientes: [Ingrediente, number][],
                categoria: "Entrante" | "Primer menu" | "Segundo menu" | "Postre",
                composicionNutricional: ComposicionNutricional,
                grupoPredominante: GrupoAlimenticio,
                precio: number
            }[],
        }[]
    }[]*/
    carta: {}[]
}

export class CartaBD {
  private database: lowdb.LowdbSync<Carta[]>;
  /**
   * Constructor de la clase.
   */
  constructor(private datosCarta: Carta[] = []) {
    this.database = lowdb(new FileSync("./src/baseDeDatos/carta/carta.json"))
    
    if (this.database.has('carta').value()) {
        /*let dbtItems = this.database.get('carta').value();
        let platosAux: Platos[] = [];
        let menusAux: Menu[] = [];
        dbtItems.forEach(cartas=> {
            cartas.menus.forEach(menus => {
                menus.platos.forEach((plato) => {
                    platosAux.push(coleccionPlatos.getPlatoConcreto(plato.name));
                })
                //menusAux.push(new Menu(menus.nombre, platosAux));
                menusAux.push(coleccionMenus.getMenuConcreto(menus.nombre))
            });
            datosCarta.push(new Carta(cartas.nombreRestaurante, menusAux, platosAux));
            platosAux = [];
            menusAux = [];
        });*/
    }
    else {
      this.database.set('carta', datosCarta).write();
    }
}


  /**
  * Función para acceder al atributo privado datosCartas
  * @returns El atributo privado datosCartas
  */
  getDatoscarta(){
    return this.datosCarta;
  }


  /**
  * Función para obtener una carta en función del nombre de su nombre
  * @param nombreCarta Nombre de la carta
  * @returns La carta
  */
   getMenuConcreto(nombreCarta: string){
    let i: number = 0;
    let indice: number = 0;

    this.datosCarta.forEach((item) => {
        if (item.getNombre() == nombreCarta) {
            indice = i;
        }
        i++;
    });
    
    return this.datosCarta[indice];
}


  /**
  * Función par añadir una carta a la base de datos
  * @param nuevo Nueva carta
  */
  addNuevoCarta(nueva: Carta){
    this.datosCarta.push(nueva);
    this.storeNuevaCarta();
  }


  /**
  * Función para actualizar la base de datos
  * @param nuevo Nuevo Carta
  */
  storeNuevaCarta(){
    this.database.set('carta', [...this.datosCarta.values()]).write();
  }


 /**
  * Función para quitar una carta de un restaurante de la base de datos a través del
  * nombre del restaurante.
  * @param nombreRestaurante Nombre del restaurante al que se eliminará la carta.
  */
  removeCarta(nombreRestaurante: string){
    let i: number = 0;
    let indice: number = 0;

    this.datosCarta.forEach((menu) => {
      if (menu.getNombre() == nombreRestaurante) {
        indice = i;
      }
      i++;
    });

    this.datosCarta.splice(indice, 1);
    this.storeNuevaCarta();
  }
}

export const coleccionCarta = new CartaBD(pruebaCartas);