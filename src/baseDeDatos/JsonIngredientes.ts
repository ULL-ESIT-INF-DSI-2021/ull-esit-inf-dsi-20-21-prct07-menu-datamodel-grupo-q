import { Ingrediente } from "../ingredientes/ingredientes";
import { IngredientesJson } from "./tiposDefinidos";
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

type schemaType = {
  ingredientes:     {
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
  }[]
}

export class JsonIngredientes {
  private database: lowdb.LowdbSync<schemaType>;
  constructor(private datosIngredientes: Ingrediente[] = []) {
    this.database = lowdb(new FileSync("./src/baseDeDatos/ingredientes/ingredientes.json"))
    
    if (this.database.has('ingredientes').value()) {
      let dbtItems = this.database.get('ingredientes').value();
      dbtItems.forEach(item => {
        this.datosIngredientes.push(new Ingrediente(item.nombre, item.grupo.numGrupo, [item.composicionNutricional.lipidos, item.composicionNutricional.hCarbono, item.composicionNutricional.proteinas, item.composicionNutricional.kCal], [item.localizacion.ciudad, item.localizacion.pais], item.precio));
      });
    } else {
        this.database.set('ingredientes', datosIngredientes).write();
    }
  }

      /**
     * Función para acceder al atributo privado datosIngredientes
     * @returns El atributo privado datosIngredientes
     */
       getDatosIngredientes(){
        return this.datosIngredientes;
    }

    /**
     * Función para obtener un ingrediente en función de su nombre
     * @param nombreIngrediente Nombre del ingrediente
     * @returns El ingredente
     */
    getInfoIngrediente(nombreIngrediente: string){
        let ingrediente = new Ingrediente("", 0, [0,0,0,0], ["",""], 0);
        
        this.datosIngredientes.forEach((item) => {
            if (item.getNombre() == nombreIngrediente) {
                ingrediente = item;
            }
        });

        return ingrediente;
    }

    /**
     * Función par añadir un ingrediente a la base de datos
     * @param nuevo Nuevo ingrediente
     */
    addNuevoIngrediente(nuevo: Ingrediente){
        this.datosIngredientes.push(nuevo);
        this.storeNuevoIngrediente();
    }

    /**
     * Función par añadir un ingrediente a la base de datos
     * @param nuevo Nuevo ingrediente
     */
    storeNuevoIngrediente(){
          this.database.set('ingredientes', [...this.datosIngredientes.values()]).write();
      }

    /**
     * Función para quitar un ingrediente a la base de datos a través de su nombre
     * @param nuevo Nuevo ingrediente
     */
    removeIngrediente(nombreIngrediente: string){
        let i: number = 0;
        let indice: number = 0;

        this.datosIngredientes.forEach((item) => {

            if (item.getNombre() == nombreIngrediente) {
                indice = i;
            }

            i++;
        });

        this.datosIngredientes.splice(indice, 1);
        this.storeNuevoIngrediente();
    }
}