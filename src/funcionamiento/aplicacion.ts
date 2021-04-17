import { BaseDatosIngredientes } from '../baseDeDatos/ingredientes/bdIngredientes';
import { baseDeDatosIngredientes } from '../baseDeDatos/ingredientes/bdIngredientes';
var inquirer = require("inquirer");

/**
 * Clase App, que representa al programa principal, y el que 
 * se ejecuta en relación al usuario
 */
export class App {
  
  constructor(baseDeDatosIngredientes: BaseDatosIngredientes) {}

  /**
   * Método que se usa de intermediario con
   * otro método
   */
  run() {
    this.promptMainMenu();
  }

  /**
   * Método que sirve para el promt del usuario
   * se basa en una serie de opciones, y al final
   * hace uso de StockEditor
   */
  async promptMainMenu() {
    const prompt = [
      {
        type: 'list',
        name: 'ingredientes',
        message: 'Ingredientes',
        choices: [
          "Eliminar",
          "Añadir",
          "Nada"
        ]
      },
      { when: function (response: { ingredientes: any; }) {
        console.log(response.ingredientes);
      },
      }
    ];
    
    await inquirer.prompt(prompt);
  }
};

const app = new App(baseDeDatosIngredientes);
app.run();