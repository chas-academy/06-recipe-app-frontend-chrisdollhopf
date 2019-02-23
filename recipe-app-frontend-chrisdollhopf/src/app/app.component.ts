import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Recipe App';
  fontColor = 'coral'; // 2/2 Property binding to componenten till dom
  // https://api.edamam.com/search?q=dessert&app_id=7b45bed9&app_key=0f38b71cd97a7ac6b0b59e9e1d9005fc&from=0&to=10
}
