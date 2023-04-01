import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }

  username: string = ''
  messages: Message[] = [];
  validUsername: string = '-1';
  message: string = 'Información invalidad, por favor ingresa un usuario correcto'
  title: string = 'Inicia sesión'

  validUserAccount() {
    if (this.username === 'mateofj28') {
      localStorage.setItem('user', this.username)
      this.router.navigate(['/funtion'])
    }else{
      this.validUsername = '1'
    } 
  }

}
