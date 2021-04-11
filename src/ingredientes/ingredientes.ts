import { GrupoAlimenticio, KcalPorCienGramos, Localizacion } from "./tiposDefinidos"
import { GruposAlimentos } from "./gruposAlimentos"
import { IngredientesI } from "./interfazIngredientes"


/**
 * Clase Ingrediente. Permite instanciar objetos de tipo ingredientes. Se extiende la clase
 * Grupos de Alimentos (GruposAlimentos) y se implementa la interfaz Ingredientes (IngredientesI),
 * con los tipos definidos GrupoAlimenticio, KcalPorCienGramos, Localizacion. Las propiedades que
 * tiene un ingrediente son: Nombre, grupo alimenticio al que pertenece, su composición nutricional,
 * la ciudad y el país de origen y el precio.
 */
export class Ingrediente extends GruposAlimentos implements IngredientesI<GrupoAlimenticio, KcalPorCienGramos, Localizacion>{

    private nombre: string;
    private grupoAlimenticio: GrupoAlimenticio; 
    private composionNutricional: KcalPorCienGramos;
    private localizacion: Localizacion;
    private precio: number


    /**
     * Constructor de la clase Ingrediente.
     * @param nombre Nombre del ingrediente.
     * @param grupo Grupo alimenticio del ingrediente.
     * @param composionNutricional Composición nutricional del ingrediente [Proteínas, Lípidos, Hidratos de Carbono].
     * @param localizacion Origen del ingrediente [Ciudad, País].
     * @param precio Precio del ingrediente.
     */
    constructor(nombre: string, grupo: string, composionNutricional: [number, number, number],
    localizacion: [string, string], precio: number){
        super(grupo)
        this.nombre = nombre;
        this.grupoAlimenticio = this.getGrupo();
        this.composionNutricional = {composionCienGramos: composionNutricional};
        this.localizacion = {localizacionOrigen: localizacion};
        this.precio = precio;
    }


    /**
     * Método getter para obtener el nombre del ingrediente.
     * @returns Se retorna el nombre del ingrediente en forma de string.
     */
    getNombre(){

        return this.nombre;
    }


    /**
     * Método getter para obtener el grupo alimenticio del ingrediente.
     * @returns Se retorna el grupo alimenticio del ingrediente en forma del tipo de dato GrupoAlimenticio.
     */
    getGrupoAlimenticio(){
        
        return this.grupoAlimenticio;
    }


    /**
     * Método getter para obtener la composición nutricional del ingrediente.
     * @returns Se retorna la composición nutricional del ingrediente en forma del tipo de dato KcalPorCienGramos.
     */
    getComposionNutricional(){
        
        return this.composionNutricional;
    }


    /**
     * Método getter para obtener la localización del ingrediente.
     * @returns Se retorna la localización del ingrediente en forma del tipo de dato Localización.
     */
    getLocalizacion(){
        
        return this.localizacion;
    }


    /**
     * Método getter para obtener el precio del ingrediente.
     * @returns Se retorna el precio del ingrediente en forma del tipo de dato Localización.
     */
    getPrecio(){
        
        return this.precio;
    }


    /**
     * Método setter para definir el nombre del ingrediente.
     * @param nombre Nombre del ingrediente.
     */
    setNombre(nombre: string){

        this.nombre = nombre;
    }


    /**
     * Método setter para definir el grupo alimenticio al que pertenece el ingrediente.
     * @param grupoAlimenticio Grupo alimenticio del ingrediente.
     */
    setGrupoAlimenticio(grupoAlimenticio: string){
        
        this.grupoAlimenticio = this.getGrupo();
    }


    /**
     * Método setter para definir la composición nutricional del ingrediente.
     * @param composionNutricional Composición nutricional del ingrediente [Proteínas, Lípidos, Hidratos de Carbono].
     */
    setComposionNutricional(composionNutricional: [number, number, number]){
        
        this.composionNutricional = {composionCienGramos: composionNutricional};
    }


    /**
     * Método setter para definir la localización de origen del ingrediente.
     * @param localizacion Origen del ingrediente [Ciudad, País].
     */
    setLocalizacion(localizacion: [string, string]){
        
        this.localizacion = {localizacionOrigen: localizacion};
    }


    /**
     * Método setter para definir el precio del ingrediente.
     * @param precio Precio del ingrediente.
     */
    setPrecio(precio: number){
        
        this.precio = precio;
    }
}


export const ingrediente1 = new Ingrediente("Clara de huevo", "grupo1", [11, 0.2, 0.5], ["Candelaria", "España"], 0.12)