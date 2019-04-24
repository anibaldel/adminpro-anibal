import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor( public _usuarioService: UsuarioService,
              public router: Router
  ) {}

  canActivate() {

    if ( this._usuarioService.estaLogueado() ) {
      console.log(' paso por le login guard');
      return true;
    } else {
      console.log(' Bloqueado por guard');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
