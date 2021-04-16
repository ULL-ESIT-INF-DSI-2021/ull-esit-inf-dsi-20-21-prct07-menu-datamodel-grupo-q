import { Ingrediente } from '../../ingredientes/ingredientes';
import { IngredientesJson } from '../tiposDefinidos';

export class BaseDatosIngredientes {

    private datosIngredientes: Ingrediente[] = [];

    constructor(ingredientes: IngredientesJson[]){

        ingredientes.forEach(item => {

            this.datosIngredientes.push(new Ingrediente(item.nombre, item.grupo, [item.lipidos, item.hCarbono, item.proteinas, item.kCal], [item.ciudad, item.pais], item.precio));
        });

    }


    getDatosIngredientes(){
        
        return this.datosIngredientes;
    }


    getInfoIngrediente(nombreIngrediente: string){

        let ingrediente = new Ingrediente("", 0, [0,0,0,0], ["",""], 0);
        
        this.datosIngredientes.forEach((item) => {

            if (item.getNombre() == nombreIngrediente) {
                ingrediente = item;
            }
        });

        return ingrediente;
    }


    addNuevoIngrediente(nuevo: IngredientesJson){

        this.datosIngredientes.push(new Ingrediente(nuevo.nombre, nuevo.grupo, [nuevo.lipidos, nuevo.hCarbono, nuevo.proteinas, nuevo.kCal], [nuevo.ciudad, nuevo.pais], nuevo.precio));
    }


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