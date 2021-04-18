import inquirer from 'inquirer';
import { IngredientePrinter } from '../ingredientes/printIngredientes';
import { IngredientesBD } from '../baseDeDatos/ingredientesBD';
import { Ingrediente } from '../ingredientes/ingredientes';


let coleccionIngredientes = new IngredientesBD();

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
      "Cartas"
    ]
  })
  
  switch(respuesta["command"]) {
    case "Ingredientes":
      promptIngrediente();
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
    default:
      break;
  }
}

async function promptAdd(): Promise<void> {
  console.clear();
  console.log("Añade una tarea")
  const respuesta = await inquirer.prompt({
    type: 'input',
    name: 'nombre',
    message: 'Introduce el nombre del ingrediente'
  });

  if(respuesta['nombre'] !== '') {
    console.log("INTRODUCIDO");
  }
  promptUser();
}



promptUser();