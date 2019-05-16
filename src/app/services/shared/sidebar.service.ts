import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [];

  // menu: any = [ ----------(*se fue al backend /routes/login)
  //   {
  //     titulo: 'Principal',
  //     icono: 'mdi mdi-gauge',
  //     submenu: [
  //       { titulo: 'Dashboard', url: '/dashboard'},
  //       { titulo: 'ProgressBar', url: '/progress'},
  //       { titulo: 'Graficas', url: '/graficas1'},
  //       { titulo: 'Promesas', url: '/promesas'},
  //       { titulo: 'Rxjs', url: '/rxjs'}
  //     ]
  //   },
  //   {
  //     titulo: 'Mantenimentos',
  //     icono: 'mdi mdi-folder-lock-open',
  //     submenu: [
  //       { titulo: 'Usuarios', url: '/usuarios'},
  //       { titulo: 'Hosptitales', url: '/hospitales'},
  //       { titulo: 'Médicos', url: '/medicos'},
  //     ]
  //   }
  // ];

  constructor(
    public _usuarioService: UsuarioService
  ) {

   }

   cargarMenu() {
    this.menu = this._usuarioService.menu;
   }
}
