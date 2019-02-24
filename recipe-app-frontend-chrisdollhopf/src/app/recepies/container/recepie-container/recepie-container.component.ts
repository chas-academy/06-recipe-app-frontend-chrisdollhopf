import { Component, OnInit } from '@angular/core';
import { RecepiesService } from '../../recepies.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IEvent } from '../../components/recipes-list/recipes-list.component';

@Component({
  selector: 'app-recepie-container',
  templateUrl: './recepie-container.component.html',
  styleUrls: ['./recepie-container.component.css']
})
export class RecepieContainerComponent implements OnInit {

  recepies$: Observable<any>;
  
  // constructor where we inject our RecipeService
  constructor(private service: RecepiesService) { }

  // preload data here if needed
  ngOnInit() {
    // this.recepies$ = this.service.getRecepies('dinner', 45, 55);
  }

  listenToEvents(event: IEvent) {
    console.log(event.type)
    this.recepies$ = this.service.getRecepies(event.type, 45, 55);
  }
}
