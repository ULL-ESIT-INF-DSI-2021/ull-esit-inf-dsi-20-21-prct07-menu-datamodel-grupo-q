import { GrupoAlimenticio, KcalPorCienGramos, Localizacion } from "./tiposDefinidos"
import { GruposAlimentos } from "./gruposAlimentos"
import { IngredientesI } from "./interfazIngredientes"


class Ingrediente extends GruposAlimentos implements IngredientesI<GrupoAlimenticio, KcalPorCienGramos, Localizacion>{

    private nombre: string;
    private grupoAlimenticio: GrupoAlimenticio; 
    private composionNutricional: KcalPorCienGramos;
    private localizacion: Localizacion;
    private precio: number

    constructor(nombre: string, grupo: string, composionNutricional: [number, number, number],
    localizacion: [string, string], precio: number){
        super(grupo)
        this.nombre = nombre;
        this.grupoAlimenticio = this.getGrupo();
        this.composionNutricional = {composionCienGramos: composionNutricional};
        this.localizacion = {localizacionOrigen: localizacion};
        this.precio = precio;
    }


    getNombre(){

        return this.nombre;
    }


    getGrupoAlimenticio(){
        
        return this.grupoAlimenticio;
    }


    getComposionNutricional(){
        
        return this.composionNutricional;
    }


    getLocalizacion(){
        
        return this.localizacion;
    }


    getPrecio(){
        
        return this.precio;
    }


    setNombre(nombre: string){

        this.nombre = nombre;
    }


    setGrupoAlimenticio(grupoAlimenticio: string){
        
        this.grupoAlimenticio = this.getGrupo();
    }


    setComposionNutricional(composionNutricional: [number, number, number]){
        
        this.composionNutricional = {composionCienGramos: composionNutricional};
    }


    setLocalizacion(localizacion: [string, string]){
        
        this.localizacion = {localizacionOrigen: localizacion};
    }


    setPrecio(precio: number){
        
        this.precio = precio;
    }
}

export const ingrediente1 = new Ingrediente("Clara de huevo", "grupo1", [11, 0.2, 0.5], ["Candelaria", "España"], 0.12)