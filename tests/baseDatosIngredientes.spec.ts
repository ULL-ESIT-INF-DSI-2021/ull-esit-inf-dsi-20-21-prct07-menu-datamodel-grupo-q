import 'mocha';
import {expect} from 'chai';
import {baseDeDatosIngredientes} from '../src/baseDeDatos/ingredientes/bdIngredientes'


describe('Pruebas clase Base de datos ingrediente', ()=> {

    it('baseDeDatosIngredientes.getDatosIngredientes() return 37', ()=>{
        expect(baseDeDatosIngredientes.getDatosIngredientes().length).to.be.equal(37);
    });


    it('baseDeDatosIngredientes.getInfoIngrediente("Pasta") return {"grupo": {"numGrupo": 4,"grupo": ["Cereales"]},"nombre": "Pasta","composicionNutricional": {"lipidos": 6.7,"hCarbono": 7.4,"proteinas": 43.9,"kCal": 273},"localizacion": {"ciudad": "Roma","pais": "Italia"},"precio": 2.5}', ()=>{
        expect(baseDeDatosIngredientes.getInfoIngrediente("Pasta")).to.deep.equal(
            {
                "grupo": {"numGrupo": 4,"grupo": ["Cereales"]},
                "nombre": "Pasta",
                "composicionNutricional": {"lipidos": 6.7,"hCarbono": 7.4,"proteinas": 43.9,"kCal": 273},
                "localizacion": {"ciudad": "Roma","pais": "Italia"},
                "precio": 2.5
            });
    });
});