/**
 * Tipo KcalPorCienGramos. Permite definir las kcal/100gr que tendrá un ingrediente de acuerdo a los macronutrientes 
 * del mismo en formato tupla [Proteínas, Lípidos, Hidratos de carbono)]
 */
export type KcalPorCienGramos = {

    composionCienGramos: [number, number, number]; // kcal/100gr Proteínas, Lípidos e Hidratos de carbono
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