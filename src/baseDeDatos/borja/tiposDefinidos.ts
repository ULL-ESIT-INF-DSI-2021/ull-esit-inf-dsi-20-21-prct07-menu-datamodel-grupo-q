import { Ingrediente } from "../../ingredientes/ingredientes"
import { Platos } from "../../platos/platos"

/**
 * Tipo de parametros que contiene in ingrediente.
 */
export type IngredientesJson = {
    nombre: string,
    grupo: number,
    lipidos: number,
    hCarbono: number,
    proteinas: number,
    kCal: number,
    ciudad: string,
    pais: string,
    precio: number
}

/**
 * Tipo de parámetros que contiene un plato.
 */
export type PlatosJson = {
    nombre: string,
    ingredientes: string[],
    cantidades: number[],
    categoria: "Entrante" | "Primer plato" | "Segundo plato" | "Postre"
}


/**
 * Tipo de parametros que contiene un menu.
 */
export type MenusJson = {
    nombre: string,
    platos: string[],
}