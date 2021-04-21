import { Platos } from "../../platos/platos";
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { Ingrediente } from "../../ingredientes/ingredientes";
import { ComposicionNutricional, GrupoAlimenticio } from "../../ingredientes/tiposDefinidos";

/**
 * Esquema de la base de datos de platos.
 */
type schemaTypePlatos= {
    platos: {
        name: string,
        ingredientes: [
          {
            grupo: {
              numGrupo: number,
              grupo: string[]
            },
            nombre: string,
            composicionNutricional: {
              lipidos: number,
              hCarbono: number,
              proteinas: number,
              kCal: number
            }
            localizacion: {
              ciudad: string,
              pais: string
            },
            precio: number
          }, 
          number
        ][],
        categoria: "Entrante" | "Primer plato" | "Segundo plato" | "Postre",
        composicionNutricional: ComposicionNutricional,
        grupoPredominante: GrupoAlimenticio,
        precio: number
    }[]
}

export class PlatosBD {
  private database: lowdb.LowdbSync<schemaTypePlatos>;
  /**
   * Constructor de la clase.
   */
  constructor(private datosPlatos: Platos[] = []) {
    this.database = lowdb(new FileSync("./src/baseDeDatos/platos/platos.json"))
    
    if (this.database.has('platos').value()) {
      let dbtItems = this.database.get('platos').value();
      let ingredienteAux: Ingrediente;
      let cantidadAux: number;
      let ingredientesPlato: [Ingrediente, number][] = [];
      dbtItems.forEach(plato => {
        plato.ingredientes.forEach((ingrediente) => {
          ingredienteAux = new Ingrediente(ingrediente[0].nombre, ingrediente[0].grupo.numGrupo, [ingrediente[0].composicionNutricional.lipidos, ingrediente[0].composicionNutricional.hCarbono, ingrediente[0].composicionNutricional.proteinas, ingrediente[0].composicionNutricional.kCal], [ingrediente[0].localizacion.ciudad, ingrediente[0].localizacion.pais], ingrediente[0].precio)
          cantidadAux = ingrediente[1];
          ingredientesPlato.push([ingredienteAux, cantidadAux]);
        })
        this.datosPlatos.push(new Platos(plato.name, ingredientesPlato, plato.categoria));
        ingredientesPlato = [];
      });
    }
    else {
      this.database.set('platos', datosPlatos).write();
    }
}


  /**
  * Función para acceder al atributo privado datosPlatos
  * @returns El atributo privado datosPlatos
  */
  getDatosPlatos(){
    return this.datosPlatos;
  }


  getPlatosPorCategoria(categoria: string){

    let platosAux: Platos[] = []
    this.datosPlatos.forEach(plato => {
      if (plato.getCategoria() == categoria) {
        platosAux.push(plato);
      }
    });
    return platosAux;
  }


  /**
  * Función para obtener un plato en función de su nombre
  * @param nombrePlatos Nombre del plato
  * @returns El plato
  */
  getPlatoConcreto(nombrePlato: string){
    let i: number = 0;
    let indice: number = 0;

    this.datosPlatos.forEach((item) => {
        if (item.getNombre() == nombrePlato) {
            indice = i;
        }
        i++;
    });
    
    return this.datosPlatos[indice];
}


  /**
  * Función par añadir un platos a la base de datos
  * @param nuevo Nuevo plato
  */
  addNuevoPlatos(nuevo: Platos){
    this.datosPlatos.push(nuevo);
    this.storeNuevoPlatos();
  }


  /**
  * Función par añadir un platos a la base de datos
  * @param nuevo Nuevo platos
  */
  storeNuevoPlatos(){
    this.database.set('platos', [...this.datosPlatos.values()]).write();
  }


 /**
  * Función para quitar un platos a la base de datos a través de su nombre
  * @param nuevo Nuevo platos
  */
  removePlatos(nombrePlatos: string){
    let i: number = 0;
    let indice: number = 0;

    this.datosPlatos.forEach((plato) => {
      if (plato.getNombre() == nombrePlatos) {
        indice = i;
      }
      i++;
    });

    this.datosPlatos.splice(indice, 1);
    this.storeNuevoPlatos();
  }
}

export const coleccionPlatos = new PlatosBD();
