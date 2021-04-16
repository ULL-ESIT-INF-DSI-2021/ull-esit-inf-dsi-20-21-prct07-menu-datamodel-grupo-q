import 'mocha';
import {expect} from 'chai';
import {BaseDatosIngredientes} from '../src/baseDeDatos/bdIngredientes';
import {ingredientes} from '../src/baseDeDatos/ingredientes'


describe('Pruebas clase Base de datos ingrediente', ()=> {

    const baseDeDatos = new BaseDatosIngredientes(ingredientes);

    it('baseDeDatos.getDatosIngredientes() return [{"grupo": {"numGrupo": 2,"grupo": ["Verduras","Hortalizas"]},"nombre": "Albahaca fresca","composicionNutricional": {"lipidos": 25,"hCarbono": 0.61,"proteinas": 0.44,"kCal": 0.3},"localizacion": {"ciudad": "Milan","pais": "Italia"},"precio": 4.5}, {"grupo": {"numGrupo": 3,"grupo": ["Leche","Derivados Lacteos"]},"nombre": "Queso parmesano","composicionNutricional": {"lipidos": 40,"hCarbono": 28.9,"proteinas": 0,"kCal": 420},"localizacion": {"ciudad": "Parma","pais": "Italia"},precio": 14.75}, {"grupo": {"numGrupo": 1,"grupo": ["Carnes","Pescados","Huevos","Tofu","Frutos Secos","Legumbres"]},"nombre": "Piñones sin cascara","composicionNutricional": {"lipidos": 14,"hCarbono": 68.6,"proteinas": 4,"kCal": 693},"localizacion": {"ciudad": "Pamplona","pais": "España"},"precio": 30.5}, {"grupo": {"numGrupo": 1,"grupo": ["Carnes","Pescados","Huevos","Tofu","Frutos Secos","Legumbres"]},"nombre": "Aceite de oliva","composicionNutricional": {"lipidos": 0,"hCarbono": 99,"proteinas": 0,"kCal": 899},"localizacion": {"ciudad": "Jerez","pais": "España"},"precio": 25.5}, {"grupo": {"numGrupo": 4,"grupo": ["Cereales"]},"nombre": "Pasta","composicionNutricional": {"lipidos": 6.7,"hCarbono": 7.4,"proteinas": 43.9,"kCal": 273},"localizacion": {"ciudad": "Roma","pais": "Italia"},"precio": 2.5}]', ()=>{
        expect(baseDeDatos.getDatosIngredientes()).to.deep.equal([
            {
            "grupo": {"numGrupo": 2,"grupo": ["Verduras","Hortalizas"]},
            "nombre": "Albahaca fresca",
            "composicionNutricional": {"lipidos": 25,"hCarbono": 0.61,"proteinas": 0.44,"kCal": 0.3},
            "localizacion": {"ciudad": "Milan","pais": "Italia"},
            "precio": 4.5
            }, 

            {
            "grupo": {"numGrupo": 3,"grupo": ["Leche","Derivados Lacteos"]},
            "nombre": "Queso parmesano",
            "composicionNutricional": {"lipidos": 40,"hCarbono": 28.9,"proteinas": 0,"kCal": 420},
            "localizacion": {"ciudad": "Parma","pais": "Italia"},
            "precio": 14.75
            }, 
          
            {
            "grupo": {"numGrupo": 1,"grupo": ["Carnes","Pescados","Huevos","Tofu","Frutos Secos","Legumbres"]},
            "nombre": "Piñones sin cascara",
            "composicionNutricional": {"lipidos": 14,"hCarbono": 68.6,"proteinas": 4,"kCal": 693},
            "localizacion": {"ciudad": "Pamplona","pais": "España"},
            "precio": 30.5}, 
            
            {
            "grupo": {"numGrupo": 1,"grupo": ["Carnes","Pescados","Huevos","Tofu","Frutos Secos","Legumbres"]},
            "nombre": "Aceite de oliva",
            "composicionNutricional": {"lipidos": 0,"hCarbono": 99,"proteinas": 0,"kCal": 899},
            "localizacion": {"ciudad": "Jerez","pais": "España"},
            "precio": 25.5
            }, 
          
            {
            "grupo": {"numGrupo": 4,"grupo": ["Cereales"]},
            "nombre": "Pasta",
            "composicionNutricional": {"lipidos": 6.7,"hCarbono": 7.4,"proteinas": 43.9,"kCal": 273},
            "localizacion": {"ciudad": "Roma","pais": "Italia"},
            "precio": 2.5
            }
        ]);
    });
});