import { Ingrediente } from "../../ingredientes/ingredientes";
import { Platos } from "../../platos/platos";
import { baseDeDatosIngredientes } from "../ingredientes/bdIngredientes";
import { PlatosJson } from "../tiposDefinidos";
import { platos } from "./platos";

/**
 * Clase que simula el comportamiento de una base de datos para los platos
 */
export class BaseDatosPlatos {

    /**
     * Array que almacena todos los objetos Platos
     */
    private datosPlatos: Platos[] = [];

    /**
     * Constructor de la clase BaseDatosPlatos, lo que hace es que se le introduce un array de tipo de datos definido con las características que va a necesitar el contructor de la clase Plato
     * @param ingredientes Array de tipo PlatosJson, esto último es un tipo de dato definido que representa las características de los platos
     */
    constructor(platos: PlatosJson[]){
        let i: number = 0;

        platos.forEach(plato => {
            let listaIngredientes: [Ingrediente, number][] = [];
            let j: number = 0;

            for(let i: number = 0; i<= baseDeDatosIngredientes.getDatosIngredientes().length; i++){
                if (j == plato.ingredientes.length){
                    break
                }
                if(plato.ingredientes[j] == baseDeDatosIngredientes.getDatosIngredientes()[i].getNombre()){
                    listaIngredientes.push([baseDeDatosIngredientes.getDatosIngredientes()[i], plato.cantidades[j]])
                    i = 0
                    j++;
                }    
            }
            this.datosPlatos.push(new Platos(plato.nombre, listaIngredientes, plato.categoria));
        });
    }

    /**
     * Función para acceder al atributo privado datosPlatos
     * @returns El atributo privado datosPlatos
     */
    getDatosPlatos(){
        return this.datosPlatos;
    }

    /**
     * Función para obtener un plato en función de su nombre
     * @param nombrePlato Nombre del plato
     * @returns El plato
     */
    getInfoPlato(nombrePlato: string){
        let plato = new Platos("", [[new Ingrediente("", 0, [0,0,0,0], ["", ""], 0), 0]], "Entrante");

        let i: number = 0;
        if (this.datosPlatos[i].getNombre() == nombrePlato){
                return this.datosPlatos[i];
        }
        while (this.datosPlatos[i].getNombre() != nombrePlato){
            i++;
            if (this.datosPlatos[i].getNombre() == nombrePlato){
                return this.datosPlatos[i];
            }
        }

        return plato;
    }

    /**
     * Función par añadir un plato a la base de datos
     * @param nuevo Nuevo plato
     */
    addNuevoIngrediente(nuevo: PlatosJson){
        let listaIngradientes: [Ingrediente, number][] = [];
        let j: number = 0;

        for(let i: number = 0; i<= baseDeDatosIngredientes.getDatosIngredientes().length; i++){
            if (j == nuevo.ingredientes.length){
                break
            }
            if(nuevo.ingredientes[j] == baseDeDatosIngredientes.getDatosIngredientes()[i].getNombre()){
                listaIngradientes.push([baseDeDatosIngredientes.getDatosIngredientes()[i], nuevo.cantidades[j]])
                i = 0
                j++;
            }    
        }

        this.datosPlatos.push(new Platos(nuevo.nombre, listaIngradientes, nuevo.categoria))
    }

    /**
     * Función para quitar un plato a la base de datos a través de su nombre
     * @param nuevo Nuevo plato
     */
    removeIngrediente(nombrePlato: string){
        
        let i: number = 0;
        let indice: number = 0;

        this.datosPlatos.forEach((item) => {

            if (item.getNombre() == nombrePlato) {

                indice = i;
            }
            i++;

        });
        this.datosPlatos.splice(indice, 1);
    }
}

export const baseDeDatosPlatos = new BaseDatosPlatos(platos);

export let nuevoPlato: PlatosJson = {
    nombre: "Pizza de champiñones y queso",
    ingredientes: ["Base de pizza", "Queso mozzarella", "Salsa de tomate", "Champiñon"],
    cantidades: [100, 40, 50, 50],
    categoria: "Segundo plato"
}