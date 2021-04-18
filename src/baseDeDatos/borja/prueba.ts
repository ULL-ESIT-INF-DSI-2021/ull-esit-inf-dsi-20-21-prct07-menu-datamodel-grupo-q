import { Platos } from "../../platos/platos";
import { coleccionIngredientes } from '../ingredientes/ingredientesBD';
import { Menu } from "../../menus/menus";
import { coleccionPlatos } from '../platos/platosBD';
import { Carta } from "../../carta/carta";


export let pruebaPlatos: Platos[] = [
  new Platos("Pan con ajo", [[coleccionIngredientes.getDatosIngredientes()[9], 100], [coleccionIngredientes.getDatosIngredientes()[23], 2], [coleccionIngredientes.getDatosIngredientes()[24], 60], [coleccionIngredientes.getDatosIngredientes()[25], 20]], "Entrante"),
  new Platos("Huevos rotos", [[coleccionIngredientes.getDatosIngredientes()[19], 250] ,[coleccionIngredientes.getDatosIngredientes()[20], 100], [coleccionIngredientes.getDatosIngredientes()[21], 85]], "Entrante"),
  new Platos("Champiñones al ajillo", [[coleccionIngredientes.getDatosIngredientes()[10], 125], [coleccionIngredientes.getDatosIngredientes()[23],10], [coleccionIngredientes.getDatosIngredientes()[3], 25], [coleccionIngredientes.getDatosIngredientes()[25], 30]], "Entrante"),
  new Platos("Pizza de Jamon cocido y champiñones", [[coleccionIngredientes.getDatosIngredientes()[5], 100], [coleccionIngredientes.getDatosIngredientes()[8], 40], [coleccionIngredientes.getDatosIngredientes()[7], 50], [coleccionIngredientes.getDatosIngredientes()[6], 20], [coleccionIngredientes.getDatosIngredientes()[10], 35]], "Segundo plato"),
  new Platos("Solomillo Wellington", [[coleccionIngredientes.getDatosIngredientes()[26], 125], [coleccionIngredientes.getDatosIngredientes()[10], 45], [coleccionIngredientes.getDatosIngredientes()[27], 32], [coleccionIngredientes.getDatosIngredientes()[28], 100], [coleccionIngredientes.getDatosIngredientes()[29],85]], "Segundo plato"),
  new Platos("Salmon con arroz", [[coleccionIngredientes.getDatosIngredientes()[31], 125], [coleccionIngredientes.getDatosIngredientes()[3], 25], [coleccionIngredientes.getDatosIngredientes()[32], 100], [coleccionIngredientes.getDatosIngredientes()[23], 5]], "Segundo plato"),
  new Platos("Pollo a la brasa", [[coleccionIngredientes.getDatosIngredientes()[30], 150]], "Segundo plato"),
  new Platos("Teriyaki de atun rojo", [[coleccionIngredientes.getDatosIngredientes()[33], 100], [coleccionIngredientes.getDatosIngredientes()[3], 25],[ coleccionIngredientes.getDatosIngredientes()[34], 10], [coleccionIngredientes.getDatosIngredientes()[35], 25], [coleccionIngredientes.getDatosIngredientes()[36], 10]], "Segundo plato"),
  new Platos("Polo", [[coleccionIngredientes.getDatosIngredientes()[11], 125]], "Postre"),
  new Platos("Donut", [[coleccionIngredientes.getDatosIngredientes()[12], 80]], "Postre"),
  new Platos("Natillas", [[coleccionIngredientes.getDatosIngredientes()[17], 120], [coleccionIngredientes.getDatosIngredientes()[16], 20]], "Postre"),
  new Platos("Yogurt desnatado con fruta", [[coleccionIngredientes.getDatosIngredientes()[17], 120]], "Postre"),
  new Platos("Tarta de queso", [[coleccionIngredientes.getDatosIngredientes()[15], 125], [coleccionIngredientes.getDatosIngredientes()[16], 20], [coleccionIngredientes.getDatosIngredientes()[17], 100],[coleccionIngredientes.getDatosIngredientes()[18], 10]], "Postre"),
  new Platos("Aguacate Relleno", [[coleccionIngredientes.getDatosIngredientes()[46], 80], [coleccionIngredientes.getDatosIngredientes()[47], 12], [coleccionIngredientes.getDatosIngredientes()[49], 40], [coleccionIngredientes.getDatosIngredientes()[48], 4]], "Entrante"),
  new Platos("Potaje", [[coleccionIngredientes.getDatosIngredientes()[37], 140], [coleccionIngredientes.getDatosIngredientes()[38], 500],[coleccionIngredientes.getDatosIngredientes()[23], 20]], "Primer plato"),
  new Platos("Ensalada", [[coleccionIngredientes.getDatosIngredientes()[39], 300], [coleccionIngredientes.getDatosIngredientes()[38], 50], [coleccionIngredientes.getDatosIngredientes()[3], 110]], "Primer plato"),
  new Platos("Costillar con miel y mostaza", [[coleccionIngredientes.getDatosIngredientes()[42], 500], [coleccionIngredientes.getDatosIngredientes()[43], 20], [coleccionIngredientes.getDatosIngredientes()[38], 100], [coleccionIngredientes.getDatosIngredientes()[44], 25], [coleccionIngredientes.getDatosIngredientes()[45], 5], [coleccionIngredientes.getDatosIngredientes()[23], 15], [coleccionIngredientes.getDatosIngredientes()[3], 10]], "Segundo plato"),
]

export let pruebaMenus: Menu[] = [
  new Menu("Italiano", [coleccionPlatos.getPlatoConcreto("Pan con ajo"), coleccionPlatos.getPlatoConcreto("Pizza de Jamon cocido y champiñones"), coleccionPlatos.getPlatoConcreto("Natillas")]),
  new Menu("Ingles", [coleccionPlatos.getPlatoConcreto("Huevos rotos"), coleccionPlatos.getPlatoConcreto("Salmon con arroz"), coleccionPlatos.getPlatoConcreto("Tarta de queso")]),
  new Menu("Canario", [coleccionPlatos.getPlatoConcreto("Huevos rotos"), coleccionPlatos.getPlatoConcreto("Puchero"), coleccionPlatos.getPlatoConcreto("Pollo a la brasa"), coleccionPlatos.getPlatoConcreto("Polo")]),
  new Menu("Japones", [coleccionPlatos.getPlatoConcreto("Sushi"), coleccionPlatos.getPlatoConcreto("Sopa"), coleccionPlatos.getPlatoConcreto("Teriyaki de atun rojo"), coleccionPlatos.getPlatoConcreto("Yogurt desnatado con fruta")]),
  new Menu("Tradicional 1", [coleccionPlatos.getPlatoConcreto("Champiñones al Ajillo"), coleccionPlatos.getPlatoConcreto("Potaje"), coleccionPlatos.getPlatoConcreto("Solomillo Wellington"), coleccionPlatos.getPlatoConcreto("Natillas")]),
  new Menu("Tradicional 2", [coleccionPlatos.getPlatoConcreto("Ensalada"), coleccionPlatos.getPlatoConcreto("Sopa"), coleccionPlatos.getPlatoConcreto("Salmon con arroz"), coleccionPlatos.getPlatoConcreto("Donuts")]),
  new Menu("Tradicional 3", [coleccionPlatos.getPlatoConcreto("Pan con ajo"), coleccionPlatos.getPlatoConcreto("Pollo a la brasa"), coleccionPlatos.getPlatoConcreto("Yogurt desnatado con fruta")])
];


export let pruebaCartas: Carta[] = [
  new Carta("Restaurante 1", [new Menu("Italiano", [coleccionPlatos.getPlatoConcreto("Pan con ajo"), coleccionPlatos.getPlatoConcreto("Pizza de Jamon cocido y champiñones"), coleccionPlatos.getPlatoConcreto("Natillas")]),
                              new Menu("Ingles", [coleccionPlatos.getPlatoConcreto("Huevos rotos"), coleccionPlatos.getPlatoConcreto("Salmon con arroz"), coleccionPlatos.getPlatoConcreto("Tarta de queso")]),
                              new Menu("Canario", [coleccionPlatos.getPlatoConcreto("Huevos rotos"), coleccionPlatos.getPlatoConcreto("Puchero"), coleccionPlatos.getPlatoConcreto("Pollo a la brasa"), coleccionPlatos.getPlatoConcreto("Polo")]),
                              new Menu("Japones", [coleccionPlatos.getPlatoConcreto("Sushi"), coleccionPlatos.getPlatoConcreto("Sopa"), coleccionPlatos.getPlatoConcreto("Teriyaki de atun rojo"), coleccionPlatos.getPlatoConcreto("Yogurt desnatado con fruta")])], 
                              [new Platos("Pizza de Jamon cocido y champiñones", [[coleccionIngredientes.getDatosIngredientes()[5], 100], [coleccionIngredientes.getDatosIngredientes()[8], 40], [coleccionIngredientes.getDatosIngredientes()[7], 50], [coleccionIngredientes.getDatosIngredientes()[6], 20], [coleccionIngredientes.getDatosIngredientes()[10], 35]], "Segundo plato"),
                              new Platos("Solomillo Wellington", [[coleccionIngredientes.getDatosIngredientes()[26], 125], [coleccionIngredientes.getDatosIngredientes()[10], 45], [coleccionIngredientes.getDatosIngredientes()[27], 32], [coleccionIngredientes.getDatosIngredientes()[28], 100], [coleccionIngredientes.getDatosIngredientes()[29],85]], "Segundo plato"),
                              new Platos("Salmon con arroz", [[coleccionIngredientes.getDatosIngredientes()[31], 125], [coleccionIngredientes.getDatosIngredientes()[3], 25], [coleccionIngredientes.getDatosIngredientes()[32], 100], [coleccionIngredientes.getDatosIngredientes()[23], 5]], "Segundo plato"),
                              new Platos("Pollo a la brasa", [[coleccionIngredientes.getDatosIngredientes()[30], 150]], "Segundo plato"),
                              new Platos("Teriyaki de atun rojo", [[coleccionIngredientes.getDatosIngredientes()[33], 100], [coleccionIngredientes.getDatosIngredientes()[3], 25],[ coleccionIngredientes.getDatosIngredientes()[34], 10], [coleccionIngredientes.getDatosIngredientes()[35], 25], [coleccionIngredientes.getDatosIngredientes()[36], 10]], "Segundo plato"),
                              new Platos("Polo", [[coleccionIngredientes.getDatosIngredientes()[11], 125]], "Postre")]),

  new Carta("Restaurante 2", [new Menu("Tradicional 1", [coleccionPlatos.getPlatoConcreto("Champiñones al Ajillo"), coleccionPlatos.getPlatoConcreto("Potaje"), coleccionPlatos.getPlatoConcreto("Solomillo Wellington"), coleccionPlatos.getPlatoConcreto("Natillas")]),
                              new Menu("Tradicional 2", [coleccionPlatos.getPlatoConcreto("Ensalada"), coleccionPlatos.getPlatoConcreto("Sopa"), coleccionPlatos.getPlatoConcreto("Salmon con arroz"), coleccionPlatos.getPlatoConcreto("Donuts")]),
                              new Menu("Tradicional 3", [coleccionPlatos.getPlatoConcreto("Pan con ajo"), coleccionPlatos.getPlatoConcreto("Pollo a la brasa"), coleccionPlatos.getPlatoConcreto("Yogurt desnatado con fruta")])], 
                              [new Platos("Tarta de queso", [[coleccionIngredientes.getDatosIngredientes()[15], 125], [coleccionIngredientes.getDatosIngredientes()[16], 20], [coleccionIngredientes.getDatosIngredientes()[17], 100],[coleccionIngredientes.getDatosIngredientes()[18], 10]], "Postre"),
                              new Platos("Aguacate Relleno", [[coleccionIngredientes.getDatosIngredientes()[46], 80], [coleccionIngredientes.getDatosIngredientes()[47], 12], [coleccionIngredientes.getDatosIngredientes()[49], 40], [coleccionIngredientes.getDatosIngredientes()[48], 4]], "Entrante"),
                              new Platos("Potaje", [[coleccionIngredientes.getDatosIngredientes()[37], 140], [coleccionIngredientes.getDatosIngredientes()[38], 500],[coleccionIngredientes.getDatosIngredientes()[23], 20]], "Primer plato"),
                              new Platos("Ensalada", [[coleccionIngredientes.getDatosIngredientes()[39], 300], [coleccionIngredientes.getDatosIngredientes()[38], 50], [coleccionIngredientes.getDatosIngredientes()[3], 110]], "Primer plato"),
                              new Platos("Costillar con miel y mostaza", [[coleccionIngredientes.getDatosIngredientes()[42], 500], [coleccionIngredientes.getDatosIngredientes()[43], 20], [coleccionIngredientes.getDatosIngredientes()[38], 100], [coleccionIngredientes.getDatosIngredientes()[44], 25], [coleccionIngredientes.getDatosIngredientes()[45], 5], [coleccionIngredientes.getDatosIngredientes()[23], 15], [coleccionIngredientes.getDatosIngredientes()[3], 10]], "Segundo plato")])
];