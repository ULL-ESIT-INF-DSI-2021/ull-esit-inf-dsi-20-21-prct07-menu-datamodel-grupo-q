import { Menu } from "../../menus/menus";
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { Ingrediente } from "../../ingredientes/ingredientes";
import { pruebaMenus } from "../borja/prueba";
import { ComposicionNutricional, GrupoAlimenticio } from "../../ingredientes/tiposDefinidos";
import { Platos } from "../../platos/platos";
import { coleccionPlatos } from "../platos/platosBD";

/**
 * Esquema de la base de datos de menus.
 */
type schemaTypeMenus= {
  menus: {
    nombre: string,
    platos: {
      name: string,
      ingredientes: [Ingrediente, number][],
      categoria: "Entrante" | "Primer menu" | "Segundo menu" | "Postre",
      composicionNutricional: ComposicionNutricional,
      grupoPredominante: GrupoAlimenticio,
      precio: number
    }[]
  }[]
}

export class MenusBD {
  private database: lowdb.LowdbSync<schemaTypeMenus>;
  /**
   * Constructor de la clase.
   */
  constructor(private datosMenus: Menu[] = []) {
    this.database = lowdb(new FileSync("./src/baseDeDatos/menus/menus.json"))
    
    if (this.database.has('menus').value()) {
      let dbtItems = this.database.get('menus').value();
      let platosAux: Platos[] = [];
      dbtItems.forEach(menu => {
        menu.platos.forEach((plato) => {
          platosAux.push(coleccionPlatos.getPlatoConcreto(plato.name));
        })
        datosMenus.push(new Menu(menu.nombre, platosAux));
        platosAux = [];
      });
    }
    else {
      this.database.set('menus', datosMenus).write();
    }
}


  /**
  * Función para acceder al atributo privado datosMenus
  * @returns El atributo privado datosMenus
  */
  getDatosMenus(){
    return this.datosMenus;
  }


  /**
  * Función para obtener un menu en función de su nombre
  * @param nombreMenus Nombre del menu
  * @returns El menu
  */
   getMenuConcreto(nombreMenu: string){
    let i: number = 0;
    let indice: number = 0;

    this.datosMenus.forEach((item) => {
        if (item.getNombre() == nombreMenu) {
            indice = i;
        }
        i++;
    });
    
    return this.datosMenus[indice];
}


  /**
  * Función par añadir un menu a la base de datos
  * @param nuevo Nuevo menu
  */
  addNuevoMenus(nuevo: Menu){
    this.datosMenus.push(nuevo);
    this.storeNuevoMenus();
  }


  /**
  * Función par añadir un menu a la base de datos
  * @param nuevo Nuevo menus
  */
  storeNuevoMenus(){
    this.database.set('menus', [...this.datosMenus.values()]).write();
  }


 /**
  * Función para quitar un menu a la base de datos a través de su nombre
  * @param nuevo Nuevo menus
  */
  removeMenus(nombreMenus: string){
    let i: number = 0;
    let indice: number = 0;

    this.datosMenus.forEach((menu) => {
      if (menu.getNombre() == nombreMenus) {
        indice = i;
      }
      i++;
    });

    this.datosMenus.splice(indice, 1);
    this.storeNuevoMenus();
  }
}

export const coleccionMenus = new MenusBD();