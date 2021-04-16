import 'mocha';
import {expect} from 'chai';
import {Platos} from '../src/platos/platos';
import {Ingrediente} from '../src/ingredientes/ingredientes';
import {PlatoPrinter} from '../src/platos/printPlato';

const ingrediente1 = new Ingrediente("Clara de huevo", 1, [0.2, 0.5, 11, 48], ["Candelaria", "España"], 0.12);
const ingrediente2 = new Ingrediente("Albahaca fresca", 2, [25, 0.61, 0.44, 0.3], ["Milan", "Italia"], 4.50);
const ingrediente3 = new Ingrediente("Queso parmesano", 3, [40, 28.9, 0, 420], ["Parma", "Italia"], 14.75);
const ingrediente4 = new Ingrediente("Piñones sin cascara", 1, [14, 68.6, 4, 693], ["Pamplona", "España"], 14.75);
const ingrediente5 = new Ingrediente("Aceite de oliva", 1, [0, 99, 0, 899], ["Jerez", "España"], 14.75);
const ingrediente6 = new Ingrediente("Pasta", 4, [6.7, 7.4, 43.9, 273], ["Roma", "Italia"], 2.50);
const ingredientes: [Ingrediente, number][] = [[ingrediente2, 200], [ingrediente3, 10], [ingrediente4, 20], [ingrediente5, 30], [ingrediente6, 125]];
const pastaConPesto = new Platos("Pasta al pesto", ingredientes, "Segundo plato");
const printPastaConPesto = new PlatoPrinter(pastaConPesto);

describe('Pruebas clase Plato', ()=> {
  it('expect(pastaConPesto.getNombre()).to.be.equal("Pasta al pesto");', ()=>{
    expect(pastaConPesto.getNombre()).to.be.equal("Pasta al pesto");
  });

  it('pastaConPesto.setNombre("Pasta")', ()=>{
    pastaConPesto.setNombre("Pasta")
    expect(pastaConPesto.getNombre()).to.be.equal("Pasta");
    pastaConPesto.setNombre("Pasta al pesto")
  });

  it('pastaConPesto.getIngredientes() return objecto ingredientes', ()=>{
    expect(pastaConPesto.getIngredientes()).to.be.equal(ingredientes);
  });

  it('pastaConPesto.removeIngrediente(ingrediente2);', ()=>{
    pastaConPesto.removeIngrediente(ingrediente2);
    expect(pastaConPesto.getIngredientes()).to.deep.equal([[ingrediente3, 10], [ingrediente4, 20], [ingrediente5, 30], [ingrediente6, 125]]);
    expect(pastaConPesto.getComposicionNutricional().kCal).to.be.equal(791.55);
    expect(pastaConPesto.getGrupoPredominante()).to.deep.equal({ 
      "grupo": ["Cereales"],
      "numGrupo": 4
    });
    expect(Math.round(pastaConPesto.getPrecio())).to.be.equal(1);
  });

  it('pastaConPesto.addIngrediente(ingrediente2);', ()=>{
    pastaConPesto.addIngrediente(ingrediente2, 200);
    expect(pastaConPesto.getIngredientes()).to.deep.equal([[ingrediente3, 10], [ingrediente4, 20], [ingrediente5, 30], [ingrediente6, 125], [ingrediente2, 200]]);
    expect(pastaConPesto.getComposicionNutricional().kCal).to.be.equal(792.15);
    expect(pastaConPesto.getGrupoPredominante()).to.deep.equal({ 
      "grupo": ["Verduras", "Hortalizas"],
      "numGrupo": 2
    });
    expect(Math.round(pastaConPesto.getPrecio())).to.be.equal(2);
  });

  it('expect(Math.round(pastaConPesto.getComposicionNutricional().kCal)).to.be.equal(792);', ()=>{
    expect(Math.round(pastaConPesto.getComposicionNutricional().kCal)).to.be.equal(792);
  });

  it('expect(Math.round(pastaConPesto.getComposicionNutricional().proteinas)).to.be.equal(57);', ()=>{
    expect(Math.round(pastaConPesto.getComposicionNutricional().proteinas)).to.be.equal(57);
  });

  it('expect(Math.round(pastaConPesto.getComposicionNutricional().lipidos)).to.be.equal(65);', ()=>{
    expect(Math.round(pastaConPesto.getComposicionNutricional().lipidos)).to.be.equal(65);
  });

  it('expect(Math.round(pastaConPesto.getComposicionNutricional().hCarbono)).to.be.equal(57);', ()=>{
    expect(Math.round(pastaConPesto.getComposicionNutricional().hCarbono)).to.be.equal(57);
  });

  it('pastaConPesto.getGrupoPredominante() return grupo: "grupo": [2,["Verduras","Hortalizas"]]', ()=>{
    expect(pastaConPesto.getGrupoPredominante()).to.deep.equal({ 
      "grupo": ["Verduras", "Hortalizas"],
      "numGrupo": 2
    });
  });

  it('expect(Math.round(pastaConPesto.getPrecio())).to.be.equal(2);', ()=>{
    expect(Math.round(pastaConPesto.getPrecio())).to.be.equal(2);
  });

  it('pastaConPesto.getCategoria() return Segundo Plato', ()=>{
    expect(pastaConPesto.getCategoria()).to.be.equal("Segundo plato");
  });

  it('pastaConPesto.setCategoria("Primer plato")', ()=>{
    pastaConPesto.setCategoria("Primer plato")
    expect(pastaConPesto.getCategoria()).to.be.equal("Primer plato");
  });
});

describe('Pruebas clase PlatoPrinter', ()=> {
  it('printPastaconqueso()', ()=>{
    printPastaConPesto.print();
  });
});