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

  validUserAccount() {
    if (this.username === 'mateofj28') {
      this.router.navigate(['/funtion'])
    } else {
      this.messages = [{ severity: 'warn', summary: 'Warning', detail: 'Usuario no encontrado' }];
    }
  }

}
