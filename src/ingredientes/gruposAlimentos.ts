import {GrupoAlimenticio} from "./tiposDefinidos"


/**
 * Clase abstracta para definir los grupos de alimentos. Se utilizará como recurso para completar el grupo
 * alimenticio al que pertenece un ingrediente. Se trata de una clase abstracta, por lo que no se podrán 
 * realizar instancias de la clase.
 */
export abstract class GruposAlimentos {

    /**
     * Propiedad grupo de tipo GrupoAlimenticio.
     */
    private grupo: GrupoAlimenticio = {grupo: ["", [""]]};


    /**
     * Constructor de la clase GruposAlimentos.
     * @param grupo Grupo alimenticio del ingrediente.
     */
    constructor(grupo: string){

        this.setGrupo(grupo);
    }


    /**
     * Método getter para obtener el grupo al que pertenece el ingrediente.
     * @returns Retorna el grupo del ingrdiente de tipo GrupoAlimenticio.
     */
    protected getGrupo(){

        return this.grupo;
    }


    /**
     * Método setter para establecer el grupo al que pertence el ingrediente, así como para indicar los ingredientes
     * del grupo.
     * @param grupo Grupo al que pertence el ingrediente.
     */
    protected setGrupo(grupo: string){

        switch (grupo) {

            case "grupo1":

                this.grupo = {grupo: [grupo, ["Carnes", "Pescados", "Huevos", "Tofu", "Frutos Secos", "Legumbres"]]};

            break;

            case "grupo2":

                this.grupo = {grupo: [grupo, ["Verduras", "Hortalizas"]]};

            break;

            case "grupo3":

                this.grupo = {grupo: [grupo, ["Leche", "Derivados Lacteos"]]};

            break;

            case "grupo4":

                this.grupo = {grupo: [grupo, ["Cereales"]]};

            break;

            case "grupo5":

                this.grupo = {grupo: [grupo, ["Frutas"]]};

            break;
        }
    }
}