import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VigilanteDobleGuard implements CanActivate {

  constructor(private router: Router){

  }

  redirect(credential: string){
    if (credential === '' || credential === null){
      this.router.navigate(['/','home'])
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var user = localStorage.getItem('user')
      console.log(user)
      this.redirect(user!)

    return true;
  }
  
}
