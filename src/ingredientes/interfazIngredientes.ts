export interface IngredientesI<G, K, L>{

    getNombre(): string;
    getGrupoAlimenticio(): G;
    getComposionNutricional(): K;
    getLocalizacion(): L;
    getPrecio(): number;

    setNombre(nombre: string): void;
    setGrupoAlimenticio(grupoAlimenticio: string): void;
    setComposionNutricional(composionNutricional: [number, number, number]): void;
    setLocalizacion(localizacion: [string, string]): void;
    setPrecio(precio: number): void;
}