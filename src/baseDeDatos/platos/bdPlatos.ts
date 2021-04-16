import { Ingrediente } from "../../ingredientes/ingredientes";
import { Platos } from "../../platos/platos";
import { baseDeDatosIngredientes } from "../ingredientes/bdIngredientes";
import { PlatosJson } from "../tiposDefinidos";
import { platos } from "./platos";

export class BaseDatosPlatos {

    private datosPlatos: Platos[] = [];

    constructor(platos: PlatosJson[]){

        let i: number = 0;

        platos.forEach(plato => {

            let listaIngradientes: [Ingrediente, number][] = [];
            let j: number = 0;

            for(let i: number = 0; i<= baseDeDatosIngredientes.getDatosIngredientes().length; i++){
                if (j == plato.ingredientes.length){
                    break
                }
                if(plato.ingredientes[j] == baseDeDatosIngredientes.getDatosIngredientes()[i].getNombre()){
                    listaIngradientes.push([baseDeDatosIngredientes.getDatosIngredientes()[i], plato.cantidades[j]])
                    i = 0
                    j++;
                }    
            }
            this.datosPlatos.push(new Platos(plato.nombre, listaIngradientes, plato.categoria));
        });
    }


    getDatosPlatos(){

        return this.datosPlatos;
    }


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


    addNuevoIngrediente(nuevo: PlatosJson){

        let listaIngradientes: [Ingrediente, number][] = [];
        let j: number = 0;

        for(let i: number = 0; i<= baseDeDatosIngredientes.getDatosIngredientes().length; i++){
            if (j == nuevo.ingredientes.length){
                break
            }
            console.log(baseDeDatosIngredientes.getDatosIngredientes()[i].getNombre())
            if(nuevo.ingredientes[j] == baseDeDatosIngredientes.getDatosIngredientes()[i].getNombre()){
                listaIngradientes.push([baseDeDatosIngredientes.getDatosIngredientes()[i], nuevo.cantidades[j]])
                i = 0
                j++;
            }    
        }

        this.datosPlatos.push(new Platos(nuevo.nombre, listaIngradientes, nuevo.categoria))
    }


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