import { Ingrediente } from '../../ingredientes/ingredientes';
import { IngredientesJson } from '../tiposDefinidos';
import { ingredientes } from './ingredientes';

/**
 * Clase que simula el comportamiento de una base de datos para los ingredientes
 */
export class BaseDatosIngredientes {

    /**
     * Array que almacena todos los objetos Ingrediente
     */
    private datosIngredientes: Ingrediente[] = [];

    /**
     * Constructor de la clase BaseDatosIngredientes, lo que hace es que se le introduce un array de tipo de datos definido con las características que va a necesitar el contructor de la clase Ingrediente
     * @param ingredientes Array de tipo IngredientesJson, esto último es un tipo de dato definido que representa las características de los ingredientes
     */
    constructor(ingredientes: IngredientesJson[]){
        ingredientes.forEach(item => {
            this.datosIngredientes.push(new Ingrediente(item.nombre, item.grupo, [item.lipidos, item.hCarbono, item.proteinas, item.kCal], [item.ciudad, item.pais], item.precio));
        });
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
    addNuevoIngrediente(nuevo: IngredientesJson){
        this.datosIngredientes.push(new Ingrediente(nuevo.nombre, nuevo.grupo, [nuevo.lipidos, nuevo.hCarbono, nuevo.proteinas, nuevo.kCal], [nuevo.ciudad, nuevo.pais], nuevo.precio));
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
    }
}


export const baseDeDatosIngredientes = new BaseDatosIngredientes(ingredientes);