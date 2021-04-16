import 'mocha';
import {expect} from 'chai';
import {baseDeDatosPlatos, nuevoPlato} from '../src/baseDeDatos/platos/bdPlatos'


describe('Pruebas clase Base de datos ingrediente', ()=> {

    it('baseDeDatosPlatos.getDatosPlatos().length return 13', ()=>{
        expect(baseDeDatosPlatos.getDatosPlatos().length).to.be.equal(13);
    });


    it('baseDeDatosPlatos.getInfoPlato("Teriyaki de atún rojo") return ', ()=>{
        expect(baseDeDatosPlatos.getInfoPlato("Teriyaki de atún rojo")).to.deep.equal(
            {
                "name": "Teriyaki de atún rojo",
                "ingredientes": [
                  [
                    {
                      "grupo": {
                        "numGrupo": 1,
                        "grupo": [
                          "Carnes",
                          "Pescados",
                          "Huevos",
                          "Tofu",
                          "Frutos Secos",
                          "Legumbres"
                        ]
                      },
                      "nombre": "Atun rojo",
                      "composicionNutricional": {
                        "lipidos": 12,
                        "hCarbono": 0,
                        "proteinas": 23,
                        "kCal": 200
                      },
                      "localizacion": {
                        "ciudad": "Oslo",
                        "pais": "Noruega"
                      },
                      "precio": 17.32
                    },
                    100
                  ],
                  [
                    {
                      "grupo": {
                        "numGrupo": 1,
                        "grupo": [
                          "Carnes",
                          "Pescados",
                          "Huevos",
                          "Tofu",
                          "Frutos Secos",
                          "Legumbres"
                        ]
                      },
                      "nombre": "Aceite de oliva",
                      "composicionNutricional": {
                        "lipidos": 0,
                        "hCarbono": 99,
                        "proteinas": 0,
                        "kCal": 899
                      },
                      "localizacion": {
                        "ciudad": "Jerez",
                        "pais": "España"
                      },
                      "precio": 25.5
                    },
                    25
                  ],
                  [
                    {
                      "grupo": {
                        "numGrupo": 2,
                        "grupo": [
                          "Verduras",
                          "Hortalizas"
                        ]
                      },
                      "nombre": "Salsa de soja",
                      "composicionNutricional": {
                        "lipidos": 0.1,
                        "hCarbono": 6.7,
                        "proteinas": 8.7,
                        "kCal": 66
                      },
                      "localizacion": {
                        "ciudad": "Pekin",
                        "pais": "China"
                      },
                      "precio": 5.2
                    },
                    10
                  ],
                  [
                    {
                      "grupo": {
                        "numGrupo": 2,
                        "grupo": [
                          "Verduras",
                          "Hortalizas"
                        ]
                      },
                      "nombre": "Jengibre",
                      "composicionNutricional": {
                        "lipidos": 0.7,
                        "hCarbono": 9.5,
                        "proteinas": 1.7,
                        "kCal": 55
                      },
                      "localizacion": {
                        "ciudad": "Pekin",
                        "pais": "China"
                      },
                      "precio": 7.2
                    },
                    25
                  ],
                  [
                    {
                      "grupo": {
                        "numGrupo": 5,
                        "grupo": [
                          "Frutas"
                        ]
                      },
                      "nombre": "Sesamo blanco",
                      "composicionNutricional": {
                        "lipidos": 58,
                        "hCarbono": 0.9,
                        "proteinas": 18.2,
                        "kCal": 614
                      },
                      "localizacion": {
                        "ciudad": "Ciudad del cabo",
                        "pais": "Sudafrica"
                      },
                      "precio": 2.2
                    },
                    10
                  ]
                ],
                "categoria": "Segundo plato",
                "composicionNutricional": {
                  "lipidos": 17.985,
                  "hCarbono": 27.885,
                  "proteinas": 26.115000000000002,
                  "kCal": 506.5
                },
                "grupoPredominante": {
                  "numGrupo": 1,
                  "grupo": [
                    "Carnes",
                    "Pescados",
                    "Huevos",
                    "Tofu",
                    "Frutos Secos",
                    "Legumbres"
                  ]
                },
                "precio": 2.6235
              } );
    });


    it('baseDeDatosPlatos.addNuevoIngrediente(nuevoPlato) return 14', ()=>{
        baseDeDatosPlatos.addNuevoIngrediente(nuevoPlato);
        expect(baseDeDatosPlatos.getDatosPlatos().length).to.be.equal(14);
    });


    it('baseDeDatosPlatos.removeIngrediente("Pizza de champiñones y queso") return 13', ()=>{
        baseDeDatosPlatos.removeIngrediente("Pizza de champiñones y queso")
        expect(baseDeDatosPlatos.getDatosPlatos().length).to.be.equal(13);
    });
});