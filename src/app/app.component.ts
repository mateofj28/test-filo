import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // this is a code
  title = 'test';
  presentation = {
    "width": "100%",
    "height": "100%",
    "background-color": "#000",
  }


  // funtion in Angular TS
  onChangeValueTitle() {
    this.title = "Filo what the fuck? :), it's serious? "
  }


}
