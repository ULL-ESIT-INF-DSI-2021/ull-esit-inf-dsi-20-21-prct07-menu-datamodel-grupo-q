# Práctica 7: Modelo de datos de un sistema que permite el diseño de menús. Informe.
## Desarrollo de Sistemas Informáticos 
## Grupo Q

### Introducción

En este informe se resumen las actividades realizadas en la **práctica 7** para poner en práctica nuestros conocimientos de TypeScript. Será la primera práctica grupal y deberemos usar todas las herramientas aprendidas con anterioridad, seguir los principios SOLID y usar los patrones de diseño adecuados.

### Objetivos

Al finalizar la práctica, habremos completado los siguientes objetivos:

* Crear una estructura que nos permita el diseño y manipulación de menús
* Saber analizar que patron de diseño se debe utilizar según el caso
* Dominar el correcto uso conjunto de todas las distintas estructuras y tipos de datos
* Aprender a usar el módulo Inquirer.js para la gestión de una línea de comandos interactiva

### 1. Creación y configuración del driectorio del proyecto.

#### 1.1. Estructura inicial

Para la creación de la estructura inicial, utilizaremos el mismo diseño que hemos implementado en practicas anteriores ([práctica 4 (*****)](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-alu0101203003/blob/gh-pages/index.md)).

La estructura debería quedar similar a las siguientes fotos:

<img src="img/Captura1a.PNG" alt="" height="250"/> <img src="img/Captura1b.PNG" alt="" /> <img src="img/Captura1c.PNG" alt="" />

#### 1.2. Organización de los ejercicios

Será necesario implementar las clases del ejercicio en ficheros diferentes. Los ficheros que dependan de otros requeriran de un `import` del fichero que necesiten:

<img src="img/Captura1d.PNG" alt="" /> <img src="img/Captura1e.PNG" alt="" />

Se creará una subcarpeta para el ejercicio en la carpeta src y, su correspondiente espectativa se crearán en la carpeta test con un fichero para realizar las pruebas del ejercicio.

### 2. Ejercicio

Se pasa a explicar la resolución del ejercicio y a adjuntar su código y expectativa. Se mostrará una versión simplificada del enunciados del ejercicio (para verlo al completo con aclaraciones y pistas, consultar la [guía de la práctica](https://ull-esit-inf-dsi-2021.github.io/prct07-menu-dataModel/).

(Para poder acceder a los atributos privados que creemos en las clases usaremos funciones *set* y *get*, las cuales se pueden encontrar en el código fuente.)

#### 2.1 Alimentos y/o ingredientes

**Enunciado:**

Para cada alimento o ingrediente considerado dentro del sistema de diseño de menús se debe almacenar la información siguiente:

1. Grupo de alimentos al que pertenece que puede ser:
  * Carnes, pescados, huevos, tofu, frutos secos, semillas y legumbres.
  * Verduras y hortalizas.
  * Leche y derivados.
  * Cereales.
  * Frutas.
2. La composición nutricional del alimento con respecto a los macronutrientes y kcal por 100 gr de dicho alimento.
  * Macronutrientes: Hidratos de carbono, proteínas y lípidos.
3. Precio del alimento y/o ingrediente por kg en euros.

**Resolución:**

Crearemos una interfaz IngredientesI para ingredientes/alimentos. Toda implementación de esta interfaz deberá tener métodos que permitan obtener y modificar el nombre, grupo alimenticio, composición nutricional, localización y precio del alimento:

```ts
/**
 * Interfaz Ingredientes. Permite definir los métodos que tendrá la clase Ingrediente, que serán getters y setters.
 */
export interface IngredientesI<G, K, L>{

    getNombre(): string;
    getGrupoAlimenticio(): G;
    getcomposicionNutricional(): K;
    getLocalizacion(): L;
    getPrecio(): number;

    setNombre(nombre: string): void;
    setGrupoAlimenticio(grupoAlimenticio: number): void;
    setcomposicionNutricional(composicionNutricional: [number, number, number, number]): void;
    setLocalizacion(localizacion: [string, string]): void;
    setPrecio(precio: number): void;
}
```

Definiremos una serie de tipos que nos harán falta para desarrollar las clases:
* El tipo *composicionNutricional* Permite definir los lipidos, hidratos de carbono, proteínas y kcal/100gr que tendrá un ingrediente. 

```ts
export type composicionNutricional = {
    proteinas: number; // Proteinas
    lipidos: number; // Lipidos
    hCarbono: number; // Hidratos de carbono
    kCal: number; // kcal/100gr
}
```

* El tipo *GrupoAlimenticio* Permite definir el grupo al que pertenece un ingrediente y los tipos de alimentos que engloba ese grupo alimenticio indicando que tipos de alimentos pertenece a cada grupo.

```ts
export type GrupoAlimenticio = {

    grupo: [number, string[]]; // grupo alimenticio al que pertenece, tipos de alimentos de ese grupo
}
```

* El tipo *Localización* permite definir el origen del ingrdiente indicando la ciudad y país a los que pertenece el ingrediente.

```ts
export type Localizacion = {

    localizacionOrigen: [string, string]; // Ciudad y país
}
```

Crearemos también una clase abstracta gruposAlimentos que nos servirá como recurso para poder determinar el grupo alimenticio del alimento. [EXPLICAR***](***) Esta clase hará uso de el tipo definido anteriormente para los grupos alimenticios. El grupo cambiará en función del número que se le establezca en la función *setGrupo*

```ts

/**
 * Clase abstracta para definir los grupos de alimentos. Se utilizará como recurso para completar el grupo
 * alimenticio al que pertenece un ingrediente. Se trata de una clase abstracta, por lo que no se podrán 
 * realizar instancias de la clase.
 */
export abstract class GruposAlimentos {

    /**
     * Propiedad grupo de tipo GrupoAlimenticio.
     */
    private grupo: GrupoAlimenticio = {grupo: [0, [""]]};


    /**
     * Constructor de la clase GruposAlimentos.
     * @param grupo Grupo alimenticio del ingrediente.
     */
    constructor(grupo: number){

        this.setGrupo(grupo);
    }


    /**
     * Método getter para obtener el grupo al que pertenece el ingrediente.
     * @returns Retorna el grupo del ingrdiente de tipo GrupoAlimenticio.
     */
    protected getGrupo(){

        return this.grupo;
    }

 
    /**
     * Método setter para establecer el grupo al que pertence el ingrediente, así como para indicar los ingredientes
     * del grupo.
     * @param grupo Grupo al que pertence el ingrediente.
     */
    protected setGrupo(grupo: number){

        switch (grupo) {

            case 1:

                this.grupo = {grupo: [grupo, ["Carnes", "Pescados", "Huevos", "Tofu", "Frutos Secos", "Legumbres"]]};

            break;

            case 2:

                this.grupo = {grupo: [grupo, ["Verduras", "Hortalizas"]]};

            break;

            case 3:

                this.grupo = {grupo: [grupo, ["Leche", "Derivados Lacteos"]]};

            break;

            case 4:

                this.grupo = {grupo: [grupo, ["Cereales"]]};

            break;

            case 5:

                this.grupo = {grupo: [grupo, ["Frutas"]]};

            break;
        }
    }
}

```
#### 2.2.Platos

**Enunciado:**

Los platos de un menú estarán compuestos por alimentos y/o ingredientes como los definidos anteriormente. Además, deberá considerar que un plato puede pertener a cuatro categorías distintas: entrante, primer plato, segundo plato y postre. Asimismo, para cada plato dentro del sistema se debería poder acceder a la siguiente información:

1. Lista de alimentos y/o ingredientes que lo componen.
2. Composición nutricional del plato. Esto es, la suma de la composición nutricional de los alimentos que componen el plato. Hay que tener en cuenta que los valores nutricionales se definen por 100 gr de ingrediente, pero no siempre se usan 100 gr de cada ingrediente para elaborar un plato.
3. Grupo de alimento predominante. Este atributo deberá definir el grupo de alimento que más aparece entre los ingredientes del plato (véase la lista de en el apartado Alimentos).
4. Precio total del plato en euros en función de la suma de los precios de los ingredientes y sus cantidades que lo componen.

#### 2.3.Menús

**Enunciado:**

Un menú estará compuesto por platos, incluyendo un plato de cada categoría o, al menos, tres de ellas. Para cada menú, se debe poder consultar la siguiente información:

1. Precio total del menú en euros.
2. Platos que lo componen con sus correspodientes alimentos y/o ingredientes.
3. Composición nutricional del menú de acuerdo a lo definido en el punto 2 de la sección Alimentos.
4. Listado de grupos de alimentos por orden de aparición.

#### 2.4.Carta

**Enunciado:**

Supongamos que el sistema que estamos diseñando se empleará en un restaurante. Dicho restaurante dispone de una carta con una serie de menús prediseñados por la administración del local. Además, en la carta se incluyen platos individuales para que los comensales diseñen sus propios menús para comer. Los menús a diseñar por los clientes pueden tener todos los platos que deseen ya que, por ejemplo, un grupo de personas podría decidir pedir varios platos para compartir o pedirlos individualmente.
