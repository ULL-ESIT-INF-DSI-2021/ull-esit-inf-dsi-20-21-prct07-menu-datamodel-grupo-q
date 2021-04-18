import 'mocha';
import {expect} from 'chai';
import {baseDeDatosMenus} from '../src/baseDeDatos/menus/bdMenus'


describe('Pruebas clase Base de datos platos', ()=> {

    it('baseDeDatosPlatos.getDatosPlatos().length return 7', ()=>{
        expect(baseDeDatosMenus).to.be.equal(7);
    });
});