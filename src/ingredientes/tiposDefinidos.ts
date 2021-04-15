/**
 * Tipo ComposicionPorCienGramos. Permite definir los lipidos, hidratos de carbono, proteínas 
 * y kcal/100gr que tendrá un ingrediente. 
 */
export type ComposicionPorCienGramos = {
    proteinas: number; // Proteinas
    lipidos: number; // Lipidos
    hCarbono: number; // Hidratos de carbono
    kCal: number; // kcal/100gr
}


/**
 * Tipo GrupoAlimenticio. Permite definir el grupo al que pertenece un ingrediente y los tipos de alimentos que engloba
 * ese grupo alimenticio en formato tupla [grupo, tipos de alimentos].
 */
export type GrupoAlimenticio = {

    grupo: [string, string[]]; // grupo alimenticio al que pertenece, tipos de alimentos de ese grupo
}


/**
 * Tipo Localización. Permite definir el origen del ingrdiente en formato tupla [Ciudad, País].
 */
export type Localizacion = {

    localizacionOrigen: [string, string]; // Ciudad y país
}