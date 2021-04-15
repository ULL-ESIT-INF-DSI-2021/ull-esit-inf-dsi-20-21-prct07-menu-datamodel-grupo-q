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

    it('ingrediente1.getComposicionNutricional() return {"composicionCienGramos": [11, 0.2, 0.5, 48]} ', ()=>{
        expect(ingrediente1.getComposicionNutricional()).to.deep.equal({
            "lipidos": 0.2,
            "hCarbono": 0.5,
            "proteinas": 11,
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

    it('ingrediente1.setComposicionNutricional([13.1, 11.2, 0.41, 155])', ()=>{
        ingrediente1.setComposicionNutricional([11.2, 0.41, 13.1, 155]);
        expect(ingrediente1.getComposicionNutricional()).to.deep.equal({
          "lipidos": 11.2,
          "hCarbono": 0.41,
          "proteinas": 13.1,
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