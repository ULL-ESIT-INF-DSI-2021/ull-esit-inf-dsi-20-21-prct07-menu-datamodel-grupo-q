import inquirer from 'inquirer';
import { IngredientePrinter } from '../ingredientes/printIngredientes';
import { IngredientesBD } from '../baseDeDatos/ingredientes/ingredientesBD';
import { Ingrediente } from '../ingredientes/ingredientes';
import { coleccionIngredientes } from '../baseDeDatos/ingredientes/ingredientesBD';
import { coleccionPlatos } from '../baseDeDatos/platos/platosBD';
import { PlatoPrinter } from '../platos/printPlato';
import { pruebaPlatos } from '../baseDeDatos/borja/prueba';
import { PlatosBD } from '../baseDeDatos/platos/platosBD';
import { Platos } from '../platos/platos';
import { coleccionMenus } from '../baseDeDatos/menus/menusBD';
import { Menu } from '../menus/menus';
import { MenuPrinter } from '../menus/printMenu';
import { coleccionCarta } from '../baseDeDatos/carta/cartasBD';
import { CartaPrinter } from '../carta/printCarta';

async function promptUser() {
  console.clear();

  const respuesta = await inquirer.prompt({
    type: 'list',
    name: 'command',
    message: '¿En qué te quieres centrar?',
    choices: [
      "Ingredientes",
      "Platos",
      "Menús",
      "Carta",
      "Volver"
    ]
  })
  
  switch(respuesta["command"]) {
    case "Ingredientes":
      promptIngrediente();
    break;
    case "Platos":
      promptPlato();
    break;
    case "Menús":
      promptMenu();
    break;
    case "Carta":
      promptCarta();
    break;
    case "Salir":
    break;
    default:
      break;
  }
}

async function promptIngrediente(): Promise<void> {
  console.clear();

  const respuesta = await inquirer.prompt({
    type: 'list',
    name: 'command',
    message: '¿Qué quiere hacer?',
    choices: [
      "Mostrar ingredientes",
      "Añadir ingredientes",
      "Borrar ingredientes",
      "Volver"
    ]
  })

  switch(respuesta["command"]) {
    case "Mostrar ingredientes":
      coleccionIngredientes.getDatosIngredientes().forEach(ingrediente => {
        let ingredientePrinter = new IngredientePrinter(ingrediente);
        console.log()
        ingredientePrinter.print();
      });

      const a = await inquirer.prompt({
        type: 'list',
        name: 'command',
        message: 'Si ya ha terminado de ver los ingredientes, pulse ENTER',
        choices: ["Volver"]
      })

      console.clear();
      promptIngrediente();
    break;

    case "Añadir ingredientes":
      const ingredienteEntrada = await inquirer.prompt([{
        type: 'input',
        name: 'Nombre',
        message: 'Introduzca el nombre del ingrediente: '
      },
      {
        type: 'rawlist',
        name: 'Grupo',
        message: '¿A que grupo pertenece el ingrediente?',
        choices: [
          "Carnes, pescados, huevos, tofu, frutos secos, semillas y legumbres",
          "Verduras y hortalizas",
          "Leche y derivados",
          "Cereales",
          "Frutas",
        ]
      },
      {
        type: 'input',
        name: 'Lipidos',
        message: 'Rellene la composición nutricional:\n      Lípidos: ',
      },
      {
        type: 'input',
        name: 'Hidratos de carbono',
        message: '    Hidratos de carbono: ',
      },
      {
        type: 'input',
        name: 'Proteinas',
        message: '    Proteínas: ',
      },
      {
        type: 'input',
        name: 'Kcal',
        message: '    Kcal: ',
      },
      {
        type: 'inout',
        name: 'Ciudad',
        message: 'Rellene la localización del origen del ingrediente:\n      Ciudad: ',
      },
      {
        type: 'input',
        name: 'Pais',
        message: '    País: ',
      },
      {
        type: 'input',
        name: 'Precio',
        message: 'Rellene el precio del ingrediente:\n      Precio: ',
      }]);

      let grupo: number = 0;
      if (ingredienteEntrada["Grupo"] == "Carnes, pescados, huevos, tofu, frutos secos, semillas y legumbres") grupo = 1;
      if (ingredienteEntrada["Grupo"] == "Verduras y hortalizas") grupo = 2;
      if (ingredienteEntrada["Grupo"] == "Leche y derivados") grupo = 3;
      if (ingredienteEntrada["Grupo"] == "Cereales") grupo = 4;
      if (ingredienteEntrada["Grupo"] == "Frutas") grupo = 5;



      const ingrediente = new Ingrediente(ingredienteEntrada["Nombre"], grupo, [parseInt(ingredienteEntrada["Lipidos"]), parseInt(ingredienteEntrada["Hidratos de carbono"]), parseInt(ingredienteEntrada["Proteinas"]), parseInt(ingredienteEntrada["Kcal"])], [ingredienteEntrada["Ciudad"], ingredienteEntrada["Pais"]], parseInt(ingredienteEntrada["Precio"]))
      coleccionIngredientes.addNuevoIngrediente(ingrediente);
      
      console.log("\n\n¡INGREDIENTE AÑADIDO CON ÉXITO!\n")

      await inquirer.prompt({
        type: 'list',
        name: 'salir',
        message: 'Pulse ENTER para volver al menú',
        choices: ["Volver"]
      })

      promptIngrediente();
    break;
    case "Borrar ingredientes":
      const ingredienteAQuitar = await inquirer.prompt({
        type: 'input',
        name: 'Nombre',
        message: 'Introduzca el nombre del ingrediente que quiere quitar de la base de datos: '
      })

      coleccionIngredientes.removeIngrediente(ingredienteAQuitar['Nombre']);
      
      console.log("\n\n¡INGREDIENTE Eliminado CON ÉXITO!\n")

      await inquirer.prompt({
        type: 'list',
        name: 'salir',
        message: 'Pulse ENTER para volver al menú',
        choices: ["Volver"]
      })

      promptIngrediente();
    break;
    case "Volver":
      promptUser();
    break;
    default:
      break;
  }
}

async function promptPlato(): Promise<void> {
  console.clear();

  const respuesta = await inquirer.prompt({
    type: 'list',
    name: 'command',
    message: '¿Qué quiere hacer?',
    choices: [
      "Mostrar platos",
      "Añadir platos",
      "Borrar platos",
      "Volver"
    ]
  })

  switch(respuesta["command"]) {
    case "Mostrar platos":
      coleccionPlatos.getDatosPlatos().forEach(plato => {
        let platoPrinter = new PlatoPrinter(plato);
        console.log()
        platoPrinter.print();
      });

      const a = await inquirer.prompt({
        type: 'list',
        name: 'command',
        message: 'Si ya ha terminado de ver los platos, pulse ENTER',
        choices: ["Volver"]
      })

      promptPlato();
    break;

    case "Añadir platos":
      const nombreYNumero = await inquirer.prompt([{
          type: 'input',
          name: 'Nombre',
          message: 'Introduzca el nombre del plato: '
        },
        {
          type: 'input',
          name: 'Numero de ingredientes',
          message: '¿Cuántos ingredientes tiene su plato?',
      }]);

      let ingredienteCantidad: [Ingrediente, number][] = [];
      for(let i: number = 0; i < parseInt(nombreYNumero['Numero de ingredientes']); i++) {
        const datosIngrediente = await inquirer.prompt([{
          type: 'list',
          name: 'Nombre',
          message: `Seleccione el ingrediente: `,
          choices: coleccionIngredientes.getDatosIngredientes().map(item => ({
            name: item.getNombre()
          }))
          },
          {
            type: 'input',
            name: 'Cantidad',
            message: 'Introduzca la cantidad de ingrediente a introducir: '
        }]);
        
        ingredienteCantidad.push([coleccionIngredientes.getIngredienteConcreto(datosIngrediente['Nombre']), datosIngrediente['Cantidad']]);
      }
      
      const categoria = await inquirer.prompt({
        type: 'list',
        name: 'Categoria',
        message: 'Seleccione que tipo de plato es: ',
        choices: [
          "Entrante",
          "Primer plato",
          "Segundo plato",
          "Postre"
        ]
      });

      const plato = new Platos(nombreYNumero['Nombre'], ingredienteCantidad, categoria['Categoria']);
      coleccionPlatos.addNuevoPlatos(plato);
      
      console.log("\n\n¡PLATO AÑADIDO CON ÉXITO!\n")

      await inquirer.prompt({
        type: 'list',
        name: 'salir',
        message: 'Pulse ENTER para volver al menú',
        choices: ["Volver"]
      })

      promptPlato();
    break;
    case "Borrar platos":
      const platoAQuitar = await inquirer.prompt({
        type: 'input',
        name: 'Nombre',
        message: 'Introduzca el nombre del plato que quiere quitar de la base de datos: '
      })

      coleccionPlatos.removePlatos(platoAQuitar['Nombre']);
      
      console.log("\n\n¡PLATO Eliminado CON ÉXITO!\n")

      await inquirer.prompt({
        type: 'list',
        name: 'salir',
        message: 'Pulse ENTER para volver al menú',
        choices: ["Volver"]
      })

      promptPlato();
    break;
    case "Volver":
      promptUser();
    break;
    default:
      break;
  }
}

async function promptMenu(): Promise<void> {
  console.clear();

  const respuesta = await inquirer.prompt({
    type: 'list',
    name: 'command',
    message: '¿Qué quiere hacer?',
    choices: [
      "Mostrar menús",
      "Añadir menús",
      "Borrar menús",
      "Volver"
    ]
  })

  switch(respuesta["command"]) {
    case "Mostrar menús":
      coleccionMenus.getDatosMenus().forEach(menu => {
        let menuPrinter = new MenuPrinter(menu);
        console.log()
        menuPrinter.print();
      });

      const a = await inquirer.prompt({
        type: 'list',
        name: 'command',
        message: 'Si ya ha terminado de ver los menus, pulse ENTER',
        choices: ["Volver"]
      })

      promptMenu();
    break;

    case "Añadir menús":
      const datosNuevoMenu = await inquirer.prompt([{
          type: 'input',
          name: 'Nombre',
          message: 'Introduzca el nombre del menu: '
        },
        {
          type: 'list',
          name: 'Entrante',
          message: '¿Seleccione su entrante?',
          choices: coleccionPlatos.getPlatosPorCategoria("Entrante").map(item => ({
            name: item.getNombre()
          }))
        },
        {
          type: 'list',
          name: 'Primer plato',
          message: '¿Seleccione su primer plato?',
          choices: coleccionPlatos.getPlatosPorCategoria("Primer plato").map(item => ({
            name: item.getNombre()
          }))
        },
        {
          type: 'list',
          name: 'Segundo plato',
          message: '¿Seleccione su segundo plato?',
          choices: coleccionPlatos.getPlatosPorCategoria("Segundo plato").map(item => ({
            name: item.getNombre()
          }))
        },
        {
          type: 'list',
          name: 'Postre',
          message: '¿Seleccione su postre?',
          choices: coleccionPlatos.getPlatosPorCategoria("Postre").map(item => ({
            name: item.getNombre()
          }))
        }
      ]);

      const menu = new Menu(datosNuevoMenu['Nombre'], [coleccionPlatos.getPlatoConcreto(datosNuevoMenu['Entrante']), coleccionPlatos.getPlatoConcreto(datosNuevoMenu['Primer plato']), coleccionPlatos.getPlatoConcreto(datosNuevoMenu['Segundo plato']), coleccionPlatos.getPlatoConcreto(datosNuevoMenu['Postre'])]);
      coleccionMenus.addNuevoMenus(menu);
      
      console.log("\n\n¡MENÚ AÑADIDO CON ÉXITO!\n")

      await inquirer.prompt({
        type: 'list',
        name: 'salir',
        message: 'Pulse ENTER para volver al menú',
        choices: ["Volver"]
      })

      promptMenu();
    break;
    case "Borrar menús":
      const menuAQuitar = await inquirer.prompt({
        type: 'input',
        name: 'Nombre',
        message: 'Introduzca el nombre del menu que quiere quitar de la base de datos: '
      })

      coleccionMenus.removeMenus(menuAQuitar['Nombre']);
      
      console.log("\n\n¡MENU ELIMINADO CON ÉXITO!\n")

      await inquirer.prompt({
        type: 'list',
        name: 'salir',
        message: 'Pulse ENTER para volver al menú',
        choices: ["Volver"]
      })

      promptMenu();
    break;
    case "Volver":
      promptUser();
    break;
    default:
      break;
  }
}

async function promptCarta(): Promise<void> {
  console.clear();

  const respuesta = await inquirer.prompt({
    type: 'list',
    name: 'command',
    message: '¿Qué quiere hacer?',
    choices: [
      "Mostrar cartas",
      "Añadir carta",
      "Borrar carta",
      "Volver"
    ]
  })

  switch(respuesta["command"]) {
    case "Mostrar cartas":
      coleccionCarta.getDatoscarta().forEach(carta => {
        let cartaPrinter = new CartaPrinter(carta);
        console.log()
        cartaPrinter.print();
      });

      const a = await inquirer.prompt({
        type: 'list',
        name: 'command',
        message: 'Si ya ha terminado de ver las cartas, pulse ENTER',
        choices: ["Volver"]
      })

      promptCarta();
    break;
    case "Borrar carta":
      const cartaAQuitar = await inquirer.prompt({
        type: 'input',
        name: 'NombreRestaurante',
        message: 'Introduzca el nombre de la carta del restaurante que quiere quitar de la base de datos: '
      })

      coleccionCarta.removeCarta(cartaAQuitar['NombreRestaurante']);
      console.log("borro")
      console.log(`\n\n¡CARTA DEL ${cartaAQuitar['NombreRestaurante']} ELIMINADA CON ÉXITO!\n`)

      await inquirer.prompt({
        type: 'list',
        name: 'salir',
        message: 'Pulse ENTER para volver al menú',
        choices: ["Volver"]
      })

      promptCarta();
    break;
    case "Volver":
      promptUser();
    break;
    default:
    break;
  }
}



promptUser();