import {GrupoAlimenticio} from "./tiposDefinidos"


export abstract class GruposAlimentos {

    private grupo: GrupoAlimenticio = {grupo: ["", [""]]};

    constructor(grupo: string){

        this.setGrupo(grupo);
    }


    protected getGrupo(){

        return this.grupo;
    }


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