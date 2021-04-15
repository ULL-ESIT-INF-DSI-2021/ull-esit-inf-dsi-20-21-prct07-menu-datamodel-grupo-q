import 'mocha';
import {expect} from 'chai';
import {ingrediente1} from '../src/ingredientes/ingredientes';


describe('Pruebas clase Ingrediente', ()=> {


    it('ingrediente1.getNombre() return "Clara de huevo"', ()=>{
        expect(ingrediente1.getNombre()).to.be.equal("Clara de huevo");
    });

    it('Ingrediente1.getGrupoAlimenticio() return { "grupo": [ 1, [ "Carnes", "Pescados", "Huevos", "Tofu", "Frutos Secos", "Legumbres"]]} ', ()=>{
        expect(ingrediente1.getGrupoAlimenticio()).to.deep.equal({
            "grupo": [
              1,
              [
                "Carnes",
                "Pescados",
                "Huevos",
                "Tofu",
                "Frutos Secos",
                "Legumbres"
              ]
            ]
          });
    });

    it('ingrediente1.getComposionNutricional() return {"composionCienGramos": [11, 0.2, 0.5, 48]} ', ()=>{
        expect(ingrediente1.getComposionNutricional()).to.deep.equal({
            "proteinas": 11,
            "lipidos": 0.2,
            "hCarbono": 0.5,
            "kCal": 48
          });
    });

    it('ingrediente1.getLocalizacion() return {"localizacionOrigen": ["Candelaria", "España"]}', ()=>{
        expect(ingrediente1.getLocalizacion()).to.deep.equal({
            "localizacionOrigen": [
              "Candelaria",
              "España"
            ]
          });
    });

    it('ingrediente1.getPrecio() return 0.12', ()=>{
        expect(ingrediente1.getPrecio()).to.be.equal(0.12);
    });

    it('ingrediente1.setNombre("Huevo de codorniz")', ()=>{
        ingrediente1.setNombre("Huevo de codorniz");
        expect(ingrediente1.getNombre()).to.be.equal("Huevo de codorniz");
    });

    it('ingrediente1.setGrupoAlimenticio(1)', ()=>{
        ingrediente1.setGrupoAlimenticio(1);
        expect(ingrediente1.getGrupoAlimenticio()).to.deep.equal({
            "grupo": [
              1,
              [
                "Carnes",
                "Pescados",
                "Huevos",
                "Tofu",
                "Frutos Secos",
                "Legumbres"
              ]
            ]
          });
    });

    it('ingrediente1.setComposionNutricional([13.1, 11.2, 0.41, 155])', ()=>{
        ingrediente1.setComposionNutricional([13.1, 11.2, 0.41, 155]);
        expect(ingrediente1.getComposionNutricional()).to.deep.equal({
          "proteinas": 13.1,
          "lipidos": 11.2,
          "hCarbono": 0.41,
          "kCal": 155
      });
    });

    it('ingrediente1.setLocalizacion(["Arafo", "España"])', ()=>{
        ingrediente1.setLocalizacion(["Arafo", "España"]);
        expect(ingrediente1.getLocalizacion()).to.deep.equal({
            "localizacionOrigen": [
              "Arafo",
              "España"
            ]
          });
    });

    it('ingrediente1.setPrecio(0.25)', ()=>{
        ingrediente1.setPrecio(0.25);
        expect(ingrediente1.getPrecio()).to.be.equal(0.25);
    });
});