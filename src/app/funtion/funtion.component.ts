
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Message } from 'primeng/api';


@Component({
  selector: 'app-funtion',
  templateUrl: './funtion.component.html',
  styleUrls: ['./funtion.component.css'],
  providers: [MessageService]
})
export class FuntionComponent {

  hours: number = 0
  category: string = '';
  salary: number = 0;

  messages: Message[] = [];

  // necesito todas las horas
  // debo considerar las los pagos por hora.


  showMessage() {
    this.messages = [{ severity: 'warn', summary: 'Warning', detail: 'Ingresa Datos validos' }];
  }

  findSalary() {

    if (this.hours > 0 && typeof this.hours === "number") {
      
      switch (this.hours) {
        case 1: {
          this.salary = 8000;
          break;
        }

        case 2: {
          this.salary = 12000
          break;
        }

        case 3: {
          this.salary = 18000
          break;
        }

        case 4: {
          this.salary = 25000
          break
        }

        case 5: {
          this.salary = 32000
          break
        }

        default: {

          this.salary = 32000


          break
        }

      }

      if (this.hours > 40) {
        let plus = this.salary * 0.25;
        this.salary = (this.salary + plus)
      }
    } else {
      this.showMessage()
      this.setState();
    }


  }

  setState() {
    this.hours = 0
    this.salary = 0
  }




}
