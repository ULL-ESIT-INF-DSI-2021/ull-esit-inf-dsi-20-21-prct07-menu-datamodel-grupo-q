import { Menu } from "../../menus/menus";
import { Platos } from "../../platos/platos";
import { baseDeDatosPlatos } from "../platos/bdPlatos";
import { MenusJson } from "../tiposDefinidos";
import { menus } from "./menus";


export class BaseDeDatosMenus {

    private datosMenus: Menu[] = [];

    constructor(menus: MenusJson[]){


        let i: number = 0;

        menus.forEach(menu => {

            let listaPlatos: Platos[] = [];
            let j: number = 0;

            for(let i: number = 0; i<= baseDeDatosPlatos.getDatosPlatos().length; i++){
                if (j == menu.platos.length){
                    break;
                }
                //console.log(baseDeDatosPlatos.getDatosPlatos()[i].getNombre())
                if(menu.platos[j] == baseDeDatosPlatos.getDatosPlatos()[i].getNombre()){
                    //console.log(baseDeDatosPlatos.getInfoPlato(menu.platos[j]))
                    listaPlatos.push(baseDeDatosPlatos.getInfoPlato(menu.platos[j]))
                    i = 0
                    j++;
                }    
            }
            this.datosMenus.push(new Menu(menu.nombre, listaPlatos));
        });
    }


    getDatosMenus(){

        return this.datosMenus;
    }
}


export const baseDeDatosMenus = new BaseDeDatosMenus(menus);

console.log(baseDeDatosMenus.getDatosMenus())