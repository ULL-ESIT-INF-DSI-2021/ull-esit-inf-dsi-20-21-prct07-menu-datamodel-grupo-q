import 'mocha';
import {expect} from 'chai';
import {Carta} from '../src/carta/carta';
import {Platos} from '../src/platos/platos';
import {Ingrediente} from '../src/ingredientes/ingredientes';
import {CartaPrinter} from '../src/carta/printCarta';
import {Menu} from '../src/menus/menus';
import {ComandaPedido} from '../src/comanda/comandaPedido';
import {ComandaFinal} from '../src/comanda/comandaFinal';

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

const cartaR = new Carta([MenuItaliano], [PanConAjo, Pizza, Natillas]);

const Pedido1 = new ComandaPedido(MenuItaliano, 1);
const Pedido2 = new ComandaPedido(Pizza, 2);

const PedidoCompleto = new ComandaFinal([Pedido1, Pedido2]);

describe('Pruebas clase Comanda Pedido', ()=> {
  it('expect(Pedido1.getPedido()).to.deep.equal(MenuItaliano)', ()=>{
    expect(Pedido1.getPedido()).to.deep.equal(MenuItaliano);
  });

  it('expect(Pedido1.getCantidad()).to.be.equal(1)', ()=>{
    expect(Pedido1.getCantidad()).to.be.equal(1);
  });

  it('Pedido1.setPedido(PanConAJo);', ()=>{
    Pedido1.setPedido(PanConAjo);
    expect(Pedido1.getPedido()).to.deep.equal(PanConAjo);
  });

  it('Pedido1.setCantidad(3);', ()=>{
    Pedido1.setCantidad(3);
    expect(Pedido1.getCantidad()).to.be.equal(3);
  });

});

describe('Pruebas clase Comanda Final', ()=> {
  it('expect(PedidoCompleto.getComanda()).to.deep.equal([Pedido1, Pedido2])', ()=>{
    expect(PedidoCompleto.getComanda()).to.deep.equal([Pedido1, Pedido2]);
  });

  it('PedidoCompleto.setComanda(Pedido2);', ()=>{
    PedidoCompleto.setComanda([Pedido2]);
    expect(PedidoCompleto.getComanda()).to.deep.equal([Pedido2]);
  });

  it('PedidoCompleto.addPedido(Pedido2);', ()=>{
    PedidoCompleto.addPedido(Pedido1);
    expect(PedidoCompleto.getComanda()).to.deep.equal([Pedido2, Pedido1]);
  });

  it('PedidoCompleto.removePedido(Pedido2);', ()=>{
    PedidoCompleto.removePedido(Pedido2);
    expect(PedidoCompleto.getComanda()).to.deep.equal([Pedido1]);
  });

});