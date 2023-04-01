
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Message } from 'primeng/api';


@Component({
  selector: 'app-funtion',
  templateUrl: './funtion.component.html',
  styleUrls: ['./funtion.component.css'],
  providers: [MessageService]
})
export class FuntionComponent {

  constructor(private router: Router) {

  }

  hours: number = 1
  category: number = 0;
  salary: number = 0;
  ingredient: string = '';
  showError: string = '-1'
  messages: Message[] = [];
  message: string = 'Información invalidad, por favor ingresa datos validos y mayores a 0'


  // necesito todas las horas
  // debo considerar las los pagos por hora.
  toHome() {
    localStorage.setItem('user', '')
    this.router.navigate(['/', 'home'])
  }


  

  findSalary() {

    if (this.hours > 0 && typeof this.hours === "number" && this.ingredient !== "") {

      switch (this.ingredient) {
        case '1': {
          this.category = 8000;
          break;
        }

        case '2': {
          this.category = 12000
          break;
        }

        case '3': {
          this.category = 18000
          break;
        }

        case '4': {
          this.category = 25000
          break
        }

        case '5': {
          this.category = 32000
          break
        }
      }

      this.calculateSalaryBase()
      this.showError = '-1'
      

    } else {
      this.showError = '1'
      this.setState();
    }


  }

  calculateSalaryBase() {
    var base: number = 0
    if (this.hours > 40){
      base = 40
    } else {
      base = this.hours
    }

    var baseSalary = (this.category * base)

    if (this.hours > 40) {
      this.increaseSalary(baseSalary)
    } else {
      this.salary = baseSalary
    }

  }

  increaseSalary(baseSalary: number) {
    var increase = (this.category * 0.25)
    var hoursLeft = (this.hours - 40)
    var increaseSalary = (increase * hoursLeft)
    this.salary = (baseSalary + increaseSalary)
  }


  setState() {
    this.hours = 1
    this.ingredient = ''
  }




} 
