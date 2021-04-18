import 'mocha';
import {expect} from 'chai';
import {Carta} from '../src/carta/carta';
import {Platos} from '../src/platos/platos';
import {Ingrediente} from '../src/ingredientes/ingredientes';
import {CartaPrinter} from '../src/carta/printCarta';
import {Menu} from '../src/menus/menus';
import {Comanda} from '../src/comanda/comanda';
import { coleccionMenus } from '../src/baseDeDatos/menus/menusBD';
import { coleccionPlatos } from '../src/baseDeDatos/platos/platosBD';

const cartaR = new Carta([coleccionMenus.getMenuConcreto("Italiano"), coleccionMenus.getMenuConcreto("Ingles")], [coleccionPlatos.getPlatoConcreto("Pan de ajo"), coleccionPlatos.getPlatoConcreto("Sopa de pescado"),  coleccionPlatos.getPlatoConcreto("Solomillo Wellington")]);

describe('Pruebas clase Comanda', ()=> {
  const comanda = new Comanda(cartaR);
});