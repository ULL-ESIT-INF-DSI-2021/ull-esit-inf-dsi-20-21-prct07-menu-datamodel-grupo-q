export type KcalPorCienGramos = {

    composionCienGramos: [number, number, number]; // kcal/100gr hidratos de carbono, proteínas, lípidos
}


export type GrupoAlimenticio = {

    grupo: [string, string[]]; // grupo alimenticio al que pertenece, tipos de alimentos de ese grupo
}


export type Localizacion = {

    localizacionOrigen: [string, string]; // Ciudad y país
}