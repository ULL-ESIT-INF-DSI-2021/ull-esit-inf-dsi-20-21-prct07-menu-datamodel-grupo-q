import 'mocha';
import {expect} from 'chai';
import {Platos} from '../src/platos/platos';
import {Ingrediente} from '../src/ingredientes/ingredientes';
import {MenuPrinter} from '../src/menus/printmenus';
import {Menu} from '../src/menus/menus';


describe('Pruebas clase Menu', ()=> {

  const ingredienteBasePizza = new Ingrediente("Base de pizza", 4, [273, 7.4, 6.7, 43.9], ["Roma", "Italia"], 2.10);
  const ingredienteSalsaTomate = new Ingrediente("Salsa de tomate", 2, [81, 5.3, 1.5, 5.8], ["Milan", "Italia"], 3.80);
  const ingredienteQuesoMozzarella = new Ingrediente("Queso mozzarella", 3, [223, 16.1, 19.5, 0.0], ["Venecia", "Italia"], 4.30);
  const ingredienteJamonCocido = new Ingrediente("Jamon cocido", 1, [175, 10.8, 18.4, 1.0], ["La Rioja", "España"], 7.25);
  const ingredienteChampiñon = new Ingrediente("Champiñon", 2, [31, 0.3, 1.8, 4.0], ["La Rioja", "España"], 7.25);
  const ingredienteNatillas = new Ingrediente("Natillas", 2, [120, 4.2, 3.8, 16.8], ["Berlin", "Alemania"], 5.05);
  const ingredientePan = new Ingrediente("Pan de barra", 2, [243, 1.0, 6.7, 49.0], ["Paris", "Francia"], 2.10);
  const ingredienteAjo = new Ingrediente("Ajo", 2, [118, 0.3, 5.3, 23.0], ["Yakutsk", "Siberia"], 3.40);
  const ingredienteMantequilla = new Ingrediente("Mantequilla", 2, [749, 83.0, 0.6, 0.0], ["Lyon", "Francia"], 5.50);
  const ingredientePerejil = new Ingrediente("Perejil", 2, [45, 1.3, 3.0, 2.7], ["Cerdeña", "italia"], 5.50);
 
  const ingredientesPanConAjo: [Ingrediente, number][] = [[ingredientePan, 300], [ingredienteAjo, 50], [ingredienteMantequilla, 110], [ingredientePerejil, 25]];
  const PanConAjo = new Platos("Pan con Ajo", ingredientesPanConAjo, "Entrante");
  
  const ingredientesPizza: [Ingrediente, number][] = [[ingredienteBasePizza, 140], [ingredienteJamonCocido, 500], [ingredienteQuesoMozzarella, 20], [ingredienteSalsaTomate, 20], [ingredienteChampiñon, 20]];
  const Pizza = new Platos("Pizza", ingredientesPizza, "Segundo plato");

  const ingredientesNatillas: [Ingrediente, number][] = [[ingredienteNatillas, 300]];
  const Natillas = new Platos("Natillas", ingredientesNatillas, "Postre");

  const PlatosMenu: Platos[] =  [PanConAjo, Pizza, Natillas];
  const MenuItaliano = new Menu("Italiano", PlatosMenu);

  const PrintMenuItaliano = new MenuPrinter(MenuItaliano);

  it('MenuItaliano.getNombre() return Italiano', ()=>{
    expect(MenuItaliano.getNombre()).to.be.equal("Italiano");
  });

  it('MenuItaliano.getPrecio() return 7.28', ()=>{
    expect(MenuItaliano.getPrecio()).to.be.equal(7.283499999999999);
  });

  it('MenuItaliano.getPrecio() return [PanConAjo, Pizza, Natillas]', ()=>{
    expect(MenuItaliano.getPlatos()).to.be.equal(PlatosMenu);
  });

  it('MenuItaliano.getComposicionNutricional().Kcal return 277.995', ()=>{
    expect(MenuItaliano.getComposicionNutricional().kCal).to.be.equal(277.995);
  });

  it('MenuItaliano.getComposicionNutricional().proteinas return 141.5', ()=>{
    expect(MenuItaliano.getComposicionNutricional().proteinas).to.be.equal(141.5);
  });

  it('MenuItaliano.getComposicionNutricional().lipidos return 3307.3500000000004', ()=>{
    expect(MenuItaliano.getComposicionNutricional().lipidos).to.be.equal(3307.3500000000004);
  });

  it('MenuItaliano.getComposicionNutricional().hCarbono return 176.075', ()=>{
    expect(MenuItaliano.getComposicionNutricional().hCarbono).to.be.equal(176.07500000000002);
  });

  it('MenuItaliano.listadoGrupos() return [ 2, 1, 2 ]', ()=>{
    expect(MenuItaliano.listadoGrupos()).to.be.deep.equal([ 2, 1, 2 ]);
  });

  it('Imprimir menú', ()=>{
    PrintMenuItaliano.print();
  });
});