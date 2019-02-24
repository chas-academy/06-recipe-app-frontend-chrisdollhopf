import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

export interface IEvent {
  type: string;
}

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Input() recepieList: Observable<any>;
  @Output() foodEvent = new EventEmitter<IEvent>()

  constructor() {}

    // can i put the get request here or is a service better?
    // need to be an array outputted
    // 

  ngOnInit() {
    
  }

  getDinner() {
    console.log('getDinner')
    this.foodEvent.emit(<IEvent>({
      type: 'dinner'
    }))
  }

  getDessert() {
    console.log('getDessert')
    this.foodEvent.emit(<IEvent>({
      type: 'dessert'
    }))
  }

}
