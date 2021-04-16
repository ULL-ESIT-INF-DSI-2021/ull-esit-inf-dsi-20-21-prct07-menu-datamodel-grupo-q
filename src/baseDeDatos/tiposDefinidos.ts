import { Ingrediente } from "../ingredientes/ingredientes"

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


export type PlatosJson = {
    nombre: string,
    ingredientes: string[],
    cantidades: number[],
    categoria: "Entrante" | "Primer plato" | "Segundo plato" | "Postre"
}