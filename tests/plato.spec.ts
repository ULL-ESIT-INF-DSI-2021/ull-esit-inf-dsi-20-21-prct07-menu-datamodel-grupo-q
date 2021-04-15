import 'mocha';
import {expect} from 'chai';
import {Platos} from '../src/platos/platos';
import {Ingrediente} from '../src/ingredientes/ingredientes';


describe('Pruebas clase Plato', ()=> {

const ingrediente2 = new Ingrediente("Albahaca fresca", 2, [25, 0.61, 0.44, 0.3], ["Milan", "Italia"], 4.50);
const ingrediente3 = new Ingrediente("Queso parmesano", 3, [40, 28.9, 0, 420], ["Parma", "Italia"], 14.75);
const ingrediente4 = new Ingrediente("Piñones sin cascara", 1, [14, 68.6, 4, 693], ["Pamplona", "España"], 14.75);
const ingrediente5 = new Ingrediente("Aceite de oliva", 1, [0, 99, 0, 899], ["Jerez", "España"], 14.75);
const ingrediente6 = new Ingrediente("Pasta", 4, [6.7, 7.4, 43.9, 273], ["Roma", "Italia"], 2.50);
const ingredientes: [Ingrediente, number][] = [[ingrediente2, 200], [ingrediente3, 10], [ingrediente4, 20], [ingrediente5, 30], [ingrediente6, 125]];
const pastaConPesto = new Platos("Pasta al pesto", ingredientes, "Segundo plato");

  it('pastaConPesto.getName() return Pasta al pesto', ()=>{
    expect(pastaConPesto.getName()).to.be.equal("Pasta al pesto");
  });

  it('pastaConPesto.getIngredientes() return objecto ingredientes', ()=>{
    expect(pastaConPesto.getIngredientes()).to.be.equal(ingredientes);
  });

  it('pastaConPesto.getIngredientes() return objecto ingredientes', ()=>{
    expect(pastaConPesto.getIngredientes()).to.be.equal(ingredientes);
  });

  it('pastaConPesto.getIngredientes() return objecto ingredientes', ()=>{
    expect(pastaConPesto.getIngredientes()).to.be.equal(ingredientes);
  });

  it('pastaConPesto.getComposicionNutricional().kCal return 792.15', ()=>{
    expect(pastaConPesto.getComposicionNutricional().kCal).to.be.equal(792.15);
  });

  it('pastaConPesto.getComposicionNutricional().proteinas return 56.555', ()=>{
    expect(pastaConPesto.getComposicionNutricional().proteinas).to.be.equal(56.555);
  });

  it('pastaConPesto.getComposicionNutricional().lipidos return 65.175', ()=>{
    expect(pastaConPesto.getComposicionNutricional().lipidos).to.be.equal(65.175);
  });

  it('pastaConPesto.getComposicionNutricional().hCarbono return 56.78', ()=>{
    expect(pastaConPesto.getComposicionNutricional().hCarbono).to.be.equal(56.78);
  });

  /* it('pastaConPesto.getGrupoPredominante() return grupo: [ 2, [ "" ] ]', ()=>{
    expect(pastaConPesto.getGrupoPredominante()).to.be.equal({ grupo: [ 2, [ "" ] ] });
  });*/

  it('pastaConPesto.getPrecio() return 2.0975', ()=>{
    expect(pastaConPesto.getPrecio()).to.be.equal(2.0975);
  });

  it('pastaConPesto.getCategoria() return Segundo Plato', ()=>{
    expect(pastaConPesto.getCategoria()).to.be.equal("Segundo plato");
  });
});