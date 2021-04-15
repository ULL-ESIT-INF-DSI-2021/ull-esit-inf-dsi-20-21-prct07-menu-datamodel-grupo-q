/**
 * Interfaz Ingredientes. Permite definir los métodos que tendrá la clase Ingrediente, que serán getters y setters.
 */
export interface IngredientesI<G, K, L>{

    getNombre(): string;
    getGrupoAlimenticio(): G;
    getComposionNutricional(): K;
    getLocalizacion(): L;
    getPrecio(): number;

    setNombre(nombre: string): void;
    setGrupoAlimenticio(grupoAlimenticio: number): void;
    setComposionNutricional(composionNutricional: [number, number, number, number]): void;
    setLocalizacion(localizacion: [string, string]): void;
    setPrecio(precio: number): void;
}