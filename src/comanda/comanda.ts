import { coleccionMenus } from "../baseDeDatos/menus/menusBD";
import { coleccionPlatos } from "../baseDeDatos/platos/platosBD";
import { Carta } from "../carta/carta";
import { CartaPrinter } from "../carta/printCarta";
import { IngredientePrinter } from "../ingredientes/printIngredientes";
import { Menu } from "../menus/menus"
import { MenuPrinter } from "../menus/printMenu";
import { Platos } from "../platos/platos"
import { PlatoPrinter } from "../platos/printPlato";
var inquirer = require('inquirer');

/**
 * Clase Platos. Permite instanciar objetos de tipo plato. Las propiedades que
 * tiene un ingrediente son: Nombre, ingredientes , su composición nutricional,
 * la ciudad y el país de origen y el precio.
 */
export class Comanda  {
  
  private pedido: ([Menu, number])[] = []
  /**
   * Constructor de la clase comanda.
   * @param carta Carta del restaurante
   */
  constructor(private carta: Carta) {
    this.promptUser();
  }

  async promptUser() {
    console.clear();
  
    const respuesta = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: '¿Que quiere hacer?',
      choices: [
        "Visualizar carta",
        "Realizar una comanda",
        "Salir",
      ]
    })
    
    switch(respuesta["command"]) {
      case "Visualizar carta":
        this.promptVisCarta();
      break;
      case "Realizar una comanda":
        this.promptRelComanda();
      break;
      case "Salir":
      break;
      default:
        break;
    }
  }

  async promptVisCarta() {
    let cartaPrinter = new CartaPrinter(this.carta);
    console.log()
    cartaPrinter.print();

    const respuesta = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: '¿Que quiere hacer?',
      choices: [
        "Ver información de un menú concreto",
        "Ver información de un plato concreto",
        "Ir a realizar una comanda",
        "Volver al menú principal",
      ]
    })

    switch(respuesta["command"]) {
      case "Ver información de un menú concreto":
        const menu = await inquirer.prompt({
          type: 'list',
          name: 'Nombre',
          message: 'Selecciona el menú',
          choices: this.carta.getMenus().map(item => ({
            name: item.getNombre()
          }))
        })

        let menuPrinter = new MenuPrinter(coleccionMenus.getMenuConcreto(menu['Nombre']));
        console.log()
        menuPrinter.print();

        await inquirer.prompt({
          type: 'list',
          name: 'salir',
          message: 'Pulse ENTER para volver',
          choices: ["Volver"]
        })
  
        this.promptVisCarta();
      break;
      case "Ver información de un plato concreto":
        const plato = await inquirer.prompt({
          type: 'list',
          name: 'Nombre',
          message: 'Selecciona el plato',
          choices: this.carta.getPlatos().map(item => ({
            name: item.getNombre()
          }))
        })

        console.log(plato['Nombre']);
        let platoPrinter = new PlatoPrinter(coleccionPlatos.getPlatoConcreto(plato['Nombre']));
        console.log()
        platoPrinter.print();

        await inquirer.prompt({
          type: 'list',
          name: 'salir',
          message: 'Pulse ENTER para volver',
          choices: ["Volver"]
        })
  
        this.promptVisCarta();
      break;
      case "Ir a realizar una comanda":
        this.promptRelComanda();
      break;
      case "Volver al menú principal":
        this.promptUser();
      break;
      default:
      break;
    }
  }


  async promptRelComanda() {
    console.clear();
    const respuesta = await inquirer.prompt({
      type: 'list',
      name: 'command',
      message: '¿Que quiere hacer?',
      choices: [
        "Visualizar carta",
        "Visualizar comanda",
        "Añadir a la comanda un menú preestablecido de la carta",
        "Añadir a la comanda un menú diseñado por el usuario",
        "Volver al menú principal"
      ]
    })

    switch(respuesta["command"]) {
      case "Visualizar carta":
        this.promptVisCarta();
      break;
      case "Visualizar comanda":
        console.clear();
        console.log("-------COMANDA--------")
        if (this.pedido != []) {
          this.pedido.forEach(item =>{
            let menuPrinter = new MenuPrinter(item[0]);
            console.log(`\nx${item[1]}`);
            menuPrinter.print();
          }); 
        }

        await inquirer.prompt({
          type: 'list',
          name: 'salir',
          message: '\nPulse ENTER para volver al menú',
          choices: ["Volver"]
        })
  
        this.promptRelComanda();
      break;
      case "Añadir a la comanda un menú preestablecido de la carta":
        const menu = await inquirer.prompt([{
          type: 'list',
          name: 'Nombre',
          message: 'Selecciona el menú que quiere',
          choices: this.carta.getMenus().map(item => ({
            name: item.getNombre()
          }))
        },
        {
          type: 'input',
          name: 'Cantidad',
          message: `¿Cuántos quiere?`,
        }]);

        this.pedido.push([coleccionMenus.getMenuConcreto(menu['Nombre']), parseInt(menu['Cantidad'])])

        console.log("\n\n¡MENÚ AÑADIDO CON ÉXITO A LA COMANDA!\n")

        await inquirer.prompt({
          type: 'list',
          name: 'salir',
          message: 'Pulse ENTER para volver al menú',
          choices: ["Volver"]
        })
  
        this.promptRelComanda();
      break;
      case "Añadir a la comanda un menú diseñado por el usuario":
        const datosNuevoMenu = await inquirer.prompt([{
            type: 'input',
            name: 'Nombre',
            message: 'Introduzca el nombre personalizado de su menú '
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
          },        
          {
            type: 'input',
            name: 'Cantidad',
            message: `¿Cuántos menús quiere?`,
          }
        ]);

        const menuPersonalizado = new Menu(datosNuevoMenu['Nombre'], [coleccionPlatos.getPlatoConcreto(datosNuevoMenu['Entrante']), coleccionPlatos.getPlatoConcreto(datosNuevoMenu['Primer plato']), coleccionPlatos.getPlatoConcreto(datosNuevoMenu['Segundo plato']), coleccionPlatos.getPlatoConcreto(datosNuevoMenu['Postre'])]);
        this.pedido.push([menuPersonalizado, parseInt(datosNuevoMenu['Cantidad'])]);
        
        console.log("\n\n¡MENÚ AÑADIDO CON ÉXITO A LA COMANDA!\n")

        await inquirer.prompt({
          type: 'list',
          name: 'salir',
          message: 'Pulse ENTER para volver al menú',
          choices: ["Volver"]
        })

        this.promptRelComanda();
      break;
      case "Volver al menú principal":
        this.promptUser();
      break;
      default:
        break;
    }
  }
}

const cartaR = new Carta([coleccionMenus.getMenuConcreto("Italiano"), coleccionMenus.getMenuConcreto("Ingles")], [coleccionPlatos.getPlatoConcreto("Pan de ajo"), coleccionPlatos.getPlatoConcreto("Sopa de pescado"),  coleccionPlatos.getPlatoConcreto("Solomillo Wellington")]);
const comanda = new Comanda(cartaR);