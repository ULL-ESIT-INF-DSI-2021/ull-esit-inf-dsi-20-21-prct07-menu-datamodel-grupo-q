import 'mocha';
import {expect} from 'chai';
import {Platos} from '../src/platos/platos';
import {Ingrediente} from '../src/ingredientes/ingredientes';
import {PlatoPrinter} from '../src/platos/printplatos';


describe('Pruebas clase Plato', ()=> {

const ingrediente1 = new Ingrediente("Clara de huevo", 1, [0.2, 0.5, 11, 48], ["Candelaria", "España"], 0.12);
const ingrediente2 = new Ingrediente("Albahaca fresca", 2, [25, 0.61, 0.44, 0.3], ["Milan", "Italia"], 4.50);
const ingrediente3 = new Ingrediente("Queso parmesano", 3, [40, 28.9, 0, 420], ["Parma", "Italia"], 14.75);
const ingrediente4 = new Ingrediente("Piñones sin cascara", 1, [14, 68.6, 4, 693], ["Pamplona", "España"], 14.75);
const ingrediente5 = new Ingrediente("Aceite de oliva", 1, [0, 99, 0, 899], ["Jerez", "España"], 14.75);
const ingrediente6 = new Ingrediente("Pasta", 4, [6.7, 7.4, 43.9, 273], ["Roma", "Italia"], 2.50);
const ingredientes: [Ingrediente, number][] = [[ingrediente2, 200], [ingrediente3, 10], [ingrediente4, 20], [ingrediente5, 30], [ingrediente6, 125]];
const pastaConPesto = new Platos("Pasta al pesto", ingredientes, "Segundo plato");
const printPastaConPesto = new PlatoPrinter(pastaConPesto);

  it('pastaConPesto.getNombre() return Pasta al pesto', ()=>{
    expect(pastaConPesto.getNombre()).to.be.equal("Pasta al pesto");
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

  it('pastaConPesto.getGrupoPredominante() return grupo: "grupo": [2,["Verduras","Hortalizas"]]', ()=>{
    expect(pastaConPesto.getGrupoPredominante()).to.deep.equal({ 
      "grupo": [
        "Verduras",
        "Hortalizas"
    ],
    "numGrupo": 2
      });
  });

  it('pastaConPesto.getPrecio() return 2.0975', ()=>{
    expect(pastaConPesto.getPrecio()).to.be.equal(2.0975);
  });

  it('pastaConPesto.getCategoria() return Segundo Plato', ()=>{
    expect(pastaConPesto.getCategoria()).to.be.equal("Segundo plato");
  });

  it('pastaConPesto.setCategoria() return Primer Plato', ()=>{
    pastaConPesto.setCategoria("Primer plato")
    expect(pastaConPesto.getCategoria()).to.be.equal("Primer plato");
  });
  
  it('pastaConPesto.setNombre() return PastaRuculenta', ()=>{
    pastaConPesto.setNombre("PastaRuculenta")
    expect(pastaConPesto.getNombre()).to.be.equal("PastaRuculenta");
  });

  it('pastaConPesto.addIngrediente()', ()=>{
    pastaConPesto.addIngrediente(ingrediente1, 30)
    expect(pastaConPesto.getIngredientes()).not.to.be.equal(null);
  });

  it('pastaConPesto.removeIngrediente()', ()=>{
    pastaConPesto.removeIngrediente(ingrediente1)
    expect(pastaConPesto.getIngredientes()).to.be.equal(ingredientes);
  });

  it('printPastaconqueso()', ()=>{
    printPastaConPesto.print();
  });
});