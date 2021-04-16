import { Platos } from "../platos/platos"
import { ComposicionNutricional, GrupoAlimenticio } from "../ingredientes/tiposDefinidos"
import { MenuI } from "./interfazMenu";

/**
 * Clase Menu. Permite instanciar objetos de tipo menu. Las propiedades que
 * tiene un menu son: Nombre, platos , su composición nutricional,
 * listado de grupos alimenticio que lo componen y el precio.
 */
export class Menu implements MenuI<ComposicionNutricional>{

  private precio: number = 0;
  private composicionNutricional: ComposicionNutricional = { lipidos: 0, hCarbono: 0, proteinas: 0, kCal: 0};  

  /**
   * Constructor de la clase Menú.
   * @param name Nombre del menú
   * @param platos Array con los platos
   */
  constructor(private name: string, private platos: Platos[]) {   
    this.name = name;
    this.platos = platos;

    let cantporGrupo: [number, number, number, number, number] = [0,0,0,0,0];
    this.platos.forEach((item) => {
      this.composicionNutricional.lipidos = this.composicionNutricional.lipidos + item.getComposicionNutricional().lipidos;
      this.composicionNutricional.hCarbono = this.composicionNutricional.hCarbono + item.getComposicionNutricional().hCarbono;
      this.composicionNutricional.proteinas = this.composicionNutricional.proteinas + item.getComposicionNutricional().proteinas;
      this.composicionNutricional.kCal = this.composicionNutricional.kCal + item.getComposicionNutricional().kCal;

      this.precio = this.precio + item.getPrecio();
    });
  }

  /**
   * Método getter para acceder al atributo name
   * @returns Se retorna la el nombre del menu
   */
  public getNombre() {
    return this.name
  }
  
  /**
   * Método setter para cambiar al atributo name
   * @param name El nuevo nombre que tendrá el menú
   */
  public setNombre(name: string) {
    this.name = name;
  }

  /**
   * Método getter para obtener el precio del menu.
   * @returns Se retorna el precio total del menu en función de los platos
   */
  public getPrecio() {
    return this.precio;
  }

  /**
   * Método setter para establecer el precio del menú
   */
  public setPrecio() {
    this.platos.forEach((item) => {
      this.precio = this.precio + item.getPrecio();
    }); 
  }

  /**
   * Método getter para obtener la composición nutricional.
   * @returns Se retorna composición nutricional en forma del tipo de dato composición nutricional
   */
  public getComposicionNutricional() {
    return this.composicionNutricional;
  }

  /**
   * Método setter para recalcular la composición nutricional.
   */
  public setComposicionNutricional() {
    this.composicionNutricional.lipidos = 0;
    this.composicionNutricional.hCarbono = 0;
    this.composicionNutricional.proteinas = 0;
    this.composicionNutricional.kCal = 0;

    this.platos.forEach((item) => {
      this.composicionNutricional.lipidos = this.composicionNutricional.lipidos + item.getComposicionNutricional().lipidos;
      this.composicionNutricional.hCarbono = this.composicionNutricional.hCarbono + item.getComposicionNutricional().hCarbono;
      this.composicionNutricional.proteinas = this.composicionNutricional.proteinas + item.getComposicionNutricional().proteinas;
      this.composicionNutricional.kCal = this.composicionNutricional.kCal + item.getComposicionNutricional().kCal;

    }); 
  }

  /**
   * Método getter para obtener los platos.
   * @returns Se retorna los platos del menu
   */
    public getPlatos() {
    return this.platos;
  }

  /**
   * Método para añadir un plato nuevo.
   * @param ingrediente Plato que queremos añadir.
   */
  public addPlato(plato: Platos) {
    this.platos.push(plato);
    this.setComposicionNutricional();
    this.setPrecio();
  }

  /**
   * Método para eliminar un plato de nuestro menú
   * @param plato Plato que queremos eliminar.
   */
  public removePlato(plato: Platos) {
    let i: number = 0;
    let indice: number = 0;
    this.platos.forEach((item) => {
      if (item == plato) {
        indice = i;
      }
      i++;
    });

    this.platos.splice(indice, 1);
  }
  
  /**
   * Método para obtener el listado de los grupos alimenticios que tiene el menu
   * @return El listado de grupo alimenticios.
   */
  public listadoGrupos() {
    let listaGrupos: number[] = [];
    this.platos.forEach((item) => {
      listaGrupos.push(item.getGrupoPredominante().numGrupo);
    });

    return listaGrupos;
  }
}