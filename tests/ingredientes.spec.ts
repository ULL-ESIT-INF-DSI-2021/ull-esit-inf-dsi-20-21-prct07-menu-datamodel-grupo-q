import 'mocha';
import {expect} from 'chai';
import {Ingrediente} from '../src/ingredientes/ingredientes';
import {IngredientePrinter} from '../src/ingredientes/printIngredientes';

const ingrediente1 = new Ingrediente("Clara de huevo", 1, [0.2, 0.5, 11, 48], ["Candelaria", "España"], 0.12);
const printIngrediente1 = new IngredientePrinter(ingrediente1);

describe('Pruebas clase Ingrediente', ()=> {
  it('expect(ingrediente1.getNombre()).to.be.equal("Clara de huevo");', ()=>{
    expect(ingrediente1.getNombre()).to.be.equal("Clara de huevo");
  });

  it('ingrediente1.setNombre("Huevo de codorniz")', ()=>{
    ingrediente1.setNombre("Huevo de codorniz");
    expect(ingrediente1.getNombre()).to.be.equal("Huevo de codorniz");
  });

  it('Ingrediente1.getGrupoAlimenticio() return { "grupo": [ 1, [ "Carnes", "Pescados", "Huevos", "Tofu", "Frutos Secos", "Legumbres"]]} ', ()=>{
    expect(ingrediente1.getGrupoAlimenticio()).to.deep.equal({
      "grupo": ["Carnes", "Pescados", "Huevos", "Tofu", "Frutos Secos", "Legumbres"],
      "numGrupo": 1
    });
  });

  it('ingrediente1.setGrupoAlimenticio(2)', ()=>{
    ingrediente1.setGrupoAlimenticio(2);
    expect(ingrediente1.getGrupoAlimenticio()).to.deep.equal({
      "grupo": ["Verduras", "Hortalizas"],
      "numGrupo": 2
    });
  });

  it('ingrediente1.getComposicionNutricional() return {"composicionCienGramos": [11, 0.2, 0.5, 48]} ', ()=>{
    expect(ingrediente1.getComposicionNutricional()).to.deep.equal({
      "lipidos": 0.2,
      "hCarbono": 0.5,
      "proteinas": 11,
      "kCal": 48
    });
  });

  it('ingrediente1.setComposicionNutricional([13.1, 11.2, 0.41, 155])', ()=>{
    ingrediente1.setComposicionNutricional([11.2, 0.41, 13.1, 155]);
    expect(ingrediente1.getComposicionNutricional()).to.deep.equal({
      "lipidos": 11.2,
      "hCarbono": 0.41,
      "proteinas": 13.1,
      "kCal": 155
    });
  });

  it('ingrediente1.getLocalizacion() return {"localizacionOrigen": ["Candelaria", "España"]}', ()=>{
    expect(ingrediente1.getLocalizacion()).to.deep.equal({
      "ciudad": "Candelaria",
      "pais": "España"
    });
  });

  it('ingrediente1.setLocalizacion(["Arafo", "España"])', ()=>{
    ingrediente1.setLocalizacion(["Arafo", "España"]);
    expect(ingrediente1.getLocalizacion()).to.deep.equal({
      "ciudad": "Arafo",
      "pais": "España"
    });
  });

  it('ingrediente1.getPrecio() return 0.12', ()=>{
    expect(ingrediente1.getPrecio()).to.be.equal(0.12);
  });

  it('ingrediente1.setPrecio(0.25)', ()=>{
    ingrediente1.setPrecio(0.25);
    expect(ingrediente1.getPrecio()).to.be.equal(0.25);
  });
});

describe('Pruebas clase IngredientePrinter', ()=> {
  it('printIngrediente1.print()', ()=>{
    printIngrediente1.print();
  });
});