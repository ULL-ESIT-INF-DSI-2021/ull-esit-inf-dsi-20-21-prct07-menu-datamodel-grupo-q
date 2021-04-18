import { IngredientesJson } from "../tiposDefinidos";

/**
 * Base de datos de los ingredientes.
 */
export let ingredientes:IngredientesJson[] = [

    {
        nombre: "Albahaca fresca",
        grupo: 2,
        lipidos: 25,
        hCarbono: 0.61,
        proteinas: 0.44,
        kCal: 0.3,
        ciudad: "Milan",
        pais: "Italia",
        precio: 4.50
    },


    {
        nombre: "Queso parmesano",
        grupo: 3,
        lipidos: 40,
        hCarbono: 28.9,
        proteinas: 0,
        kCal: 420,
        ciudad: "Parma",
        pais: "Italia",
        precio: 14.75
    },


    {
        nombre: "Piñones sin cascara",
        grupo: 1,
        lipidos: 14,
        hCarbono: 68.6,
        proteinas: 4,
        kCal: 693,
        ciudad: "Pamplona",
        pais: "España",
        precio: 30.50
    },


    {
        nombre: "Aceite de oliva",
        grupo: 1,
        lipidos: 0,
        hCarbono: 99,
        proteinas: 0,
        kCal: 899,
        ciudad: "Jerez",
        pais: "España",
        precio: 25.50

    },


    {
        nombre: "Pasta",
        grupo: 4,
        lipidos: 6.7,
        hCarbono: 7.4,
        proteinas: 43.9,
        kCal: 273,
        ciudad: "Roma",
        pais: "Italia",
        precio: 2.50
    }, 
    

    {
        nombre: "Base de pizza",
        grupo: 4,
        kCal: 273,
        lipidos: 7.4,
        proteinas: 6.7,
        hCarbono: 43.9,
        ciudad: "Roma",
        pais: "Italia",
        precio: 2.10
    },


    {
        nombre: "Salsa de tomate",
        grupo: 2,
        kCal: 81,
        lipidos: 5.3,
        proteinas: 1.5,
        hCarbono: 5.8,
        ciudad: "Milan",
        pais: "Italia",
        precio: 3.80
    },


    {
        nombre: "Queso mozzarella",
        grupo: 3,
        kCal: 223,
        lipidos: 16.1,
        proteinas: 19.5,
        hCarbono: 0.0,
        ciudad: "Venecia",
        pais: "Italia",
        precio: 4.30
    },


    {
        nombre: "Jamon cocido",
        grupo: 1,
        kCal: 175,
        lipidos: 10.8,
        proteinas: 18.4,
        hCarbono: 1.0,
        ciudad: "La Rioja",
        pais: "España",
        precio: 7.25
    },


    {
        nombre: "Pan",
        grupo: 4,
        kCal: 277,
        lipidos: 1,
        proteinas: 7.8,
        hCarbono: 58,
        ciudad: "Candelaria",
        pais: "España",
        precio: 2.50
    },


    {
        nombre: "Champiñon",
        grupo: 2,
        kCal: 31,
        lipidos: 0.3,
        proteinas: 1.8,
        hCarbono: 4.0,
        ciudad: "La Rioja",
        pais: "España",
        precio: 7.25
    },


    {
        nombre: "Polo",
        grupo: 3,
        kCal: 134,
        lipidos: 1.3,
        proteinas: 1.0,
        hCarbono: 29.5,
        ciudad: "Tolouse",
        pais: "Francia",
        precio: 1.90
    },


    {
        nombre: "Donut",
        grupo: 4,
        kCal: 426,
        lipidos: 23,
        proteinas: 6.1,
        hCarbono: 47.2,
        ciudad: "Brooklyn",
        pais: "EEUU",
        precio: 3.25
    },


    {
        nombre: "Natillas",
        grupo: 3,
        kCal: 120,
        lipidos: 4.2,
        proteinas: 3.8,
        hCarbono: 16.8,
        ciudad: "Berlin",
        pais: "Alemania",
        precio: 5.05
    },


    {
        nombre: "Yogurt con fruta",
        grupo: 3,
        kCal: 95,
        lipidos: 2.3,
        proteinas: 3.8,
        hCarbono: 14.3,
        ciudad: "Atenas",
        pais: "Grecia",
        precio: 6.24
    },


    {
        nombre: "Queso ricotta",
        grupo: 3,
        kCal: 161,
        lipidos: 10.5,
        proteinas: 11.5,
        hCarbono: 3.75,
        ciudad: "Venecia",
        pais: "Italia",
        precio: 11.23
    },


    {
        nombre: "Galleta",
        grupo: 4,
        kCal: 450,
        lipidos: 14,
        proteinas: 7,
        hCarbono: 71.5,
        ciudad: "Doorn",
        pais: "Holanda",
        precio: 7.21
    },


    {
        nombre: "Leche",
        grupo: 3,
        kCal: 63,
        lipidos: 3.5,
        proteinas: 3.1,
        hCarbono: 4.7,
        ciudad: "Asturias",
        pais: "España",
        precio: 10.42
    },


    {
        nombre: "Mermelada de arandanos",
        grupo: 5,
        kCal: 282,
        lipidos: 0.0,
        proteinas: 0.2,
        hCarbono: 70.0,
        ciudad: "Atenas",
        pais: "Grecia",
        precio: 3.24
    },


    {
        nombre: "Huevos",
        grupo: 1,
        kCal: 153,
        lipidos: 11.1,
        proteinas: 12.5,
        hCarbono: 0.7,
        ciudad: "Londres",
        pais: "Inglaterra",
        precio: 13.80
    },


    {
        nombre: "Papas",
        grupo: 2,
        kCal: 282,
        lipidos: 0.0,
        proteinas: 0.2,
        hCarbono: 70.0,
        ciudad: "Castilla y León",
        pais: "España",
        precio: 3.20
    },


    {
        nombre: "Chorizo",
        grupo: 1,
        kCal: 385,
        lipidos: 31.1,
        proteinas: 22.0,
        hCarbono: 1.0,
        ciudad: "Teror",
        pais: "España",
        precio: 3.24
    },


    {
        nombre: "Pan de barra",
        grupo: 4,
        kCal: 243,
        lipidos: 1.0,
        proteinas: 6.7,
        hCarbono: 49.0,
        ciudad: "Paris",
        pais: "Francia",
        precio: 2.10
    },


    {
        nombre: "Ajo",
        grupo: 2,
        kCal: 118,
        lipidos: 0.3,
        proteinas: 5.3,
        hCarbono: 23.0,
        ciudad: "Yakutsk",
        pais: "Siberia",
        precio: 3.40
    },


    {
        nombre: "Mantequilla",
        grupo: 3,
        kCal: 749,
        lipidos: 83.0,
        proteinas: 0.6,
        hCarbono: 0.0,
        ciudad: "Lyon",
        pais: "Francia",
        precio: 5.50
    },


    {
        nombre: "Perejil",
        grupo: 2,
        kCal: 45,
        lipidos: 1.3,
        proteinas: 3.0,
        hCarbono: 2.7,
        ciudad: "Cerdeña",
        pais: "italia",
        precio: 5.50
    },


    {
        nombre: "Solomillo de cerdo",
        grupo: 1,
        kCal: 130,
        lipidos: 5.1,
        proteinas: 21.0,
        hCarbono: 0.0,
        ciudad: "Lugo",
        pais: "España",
        precio: 16.30
    },


    {
        nombre: "Pate",
        grupo: 1,
        kCal: 454,
        lipidos: 42.0,
        proteinas: 14.0,
        hCarbono: 5.0,
        ciudad: "Paris",
        pais: "Francia",
        precio: 14.52
    },


    {
        nombre: "Hojaldre",
        grupo: 4,
        kCal: 391,
        lipidos: 24.0,
        proteinas: 5.7,
        hCarbono: 37.0,
        ciudad: "Paris",
        pais: "Francia",
        precio: 8.32
    },



    {

        nombre: "Panceta",
        grupo: 1,
        kCal: 469,
        lipidos: 46.6,
        proteinas: 12.5,
        hCarbono: 0.0,
        ciudad: "Girona",
        pais: "España",
        precio: 8.23
    },


    {
        nombre: "Pollo",
        grupo: 1,
        kCal: 167,
        lipidos: 9.7,
        proteinas: 20.0,
        hCarbono: 0.0,
        ciudad: "Amsterdam",
        pais: "Holanda",
        precio: 10.43
    },


    {
        nombre: "Salmon",
        grupo: 1,
        kCal: 182,
        lipidos: 12.0,
        proteinas: 18.4,
        hCarbono: 0.0,
        ciudad: "Rotherdam",
        pais: "Holanda",
        precio: 12.3
    },



    {
        nombre: "Arroz",
        grupo: 4,
        kCal: 381,
        lipidos: 18.1,
        proteinas: 7.0,
        hCarbono: 86.0,
        ciudad: "Pekin",
        pais: "China",
        precio: 3.80
    },



    {
        nombre: "Atun rojo",
        grupo: 1,
        kCal: 200,
        lipidos: 12.0,
        proteinas: 23.0,
        hCarbono: 0.0,
        ciudad: "Oslo",
        pais: "Noruega",
        precio: 17.32
    },


    {
        nombre: "Salsa de soja",
        grupo: 2,
        kCal: 66,
        lipidos: 0.1,
        proteinas: 8.7,
        hCarbono: 6.7,
        ciudad: "Pekin",
        pais: "China",
        precio: 5.20
    },


    {
        nombre: "Jengibre",
        grupo: 2,
        kCal: 55,
        lipidos: 0.7,
        proteinas: 1.7,
        hCarbono: 9.5,
        ciudad: "Pekin",
        pais: "China",
        precio: 7.20
    },


    {
        nombre: "Sesamo blanco",
        grupo: 5,
        kCal: 614,
        lipidos: 58.0,
        proteinas: 18.2,
        hCarbono: 0.9,
        ciudad: "Ciudad del cabo",
        pais: "Sudafrica",
        precio: 2.20
    },


    {
        nombre: "Calabaza",
        grupo: 2,
        kCal: 250,
        lipidos: 89.0,
        proteinas: 2.1,
        hCarbono: 28.0,
        ciudad: "Moscow",
        pais: "Rusia",
        precio: 4.35
    },


    {
        nombre: "Cebolla",
        grupo: 2,
        kCal: 163,
        lipidos: 77.3,
        proteinas: 1.3,
        hCarbono: 19.4,
        ciudad: "Yunnan",
        pais: "China",
        precio: 2.15
    },


    {
        nombre: "Lechuga",
        grupo: 2,
        kCal: 154,
        lipidos: 36.7,
        proteinas: 0.6,
        hCarbono: 11.5,
        ciudad: "Palermo",
        pais: "Italia",
        precio: 3.43
    },


    {
        nombre: "Pimiento",
        grupo: 2,
        kCal: 231,
        lipidos: 28.3,
        proteinas: 2.2,
        hCarbono: 17.3,
        ciudad: "Paris",
        pais: "Francia",
        precio: 2.93
    },


    {
        nombre: "Carne Molida",
        grupo: 1,
        kCal: 231,
        lipidos: 28.3,
        proteinas: 2.2,
        hCarbono: 17.3,
        ciudad: "Missouri",
        pais: "EEUU",
        precio: 5.93
    },


    {
        nombre: "Costilla de Cerdo",
        grupo: 1,
        kCal: 349,
        lipidos: 29.2,
        proteinas: 21.5,
        hCarbono: 0.0,
        ciudad: "Leon",
        pais: "España",
        precio: 12.93
    },


    {
        nombre: "Miel",
        grupo: 2,
        kCal: 314,
        lipidos: 0.0,
        proteinas: 0.5,
        hCarbono: 78.0,
        ciudad: "Tolouse",
        pais: "Francia",
        precio: 7.43
    },


    {
        nombre: "Mostaza",
        grupo: 1,
        kCal: 84,
        lipidos: 4.4,
        proteinas: 4.7,
        hCarbono: 6.4,
        ciudad: "Berlin",
        pais: "Alemania",
        precio: 3.73
    },


    {
        nombre: "Sal",
        grupo: 1,
        kCal: 0,
        lipidos: 0.0,
        proteinas: 0.0,
        hCarbono: 0.0,
        ciudad: "Oslo",
        pais: "Noruega",
        precio: 1.50
    },

    
    {
        nombre: "Aguacate",
        grupo: 2,
        lipidos: 32.5,
        hCarbono: 11.2,
        proteinas: 0.2,
        kCal: 35.4,
        ciudad: "California",
        pais: "EEUU",
        precio: 5.21
    },
    
    {
        nombre: "Gambas",
        grupo: 1,
        lipidos: 13.1,
        hCarbono: 1.32,
        proteinas: 40.3,
        kCal: 50.1,
        ciudad: "Oviedo",
        pais: "España",
        precio: 7.50
    },
    
    {
        nombre: "Mayonesa",
        grupo: 1,
        lipidos: 40.23,
        hCarbono: 0.4,
        proteinas: 19.14,
        kCal: 25.2,
        ciudad: "Cordoba",
        pais: "Argentina",
        precio: 2.02
    },
    
    {
        nombre: "Atun",
        grupo: 1,
        lipidos: 31.20,
        hCarbono: 0.4,
        proteinas: 334.18,
        kCal: 88.52,
        ciudad: "Santander",
        pais: "España",
        precio: 4.32
    }
];