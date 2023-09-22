import { Component } from '@angular/core';

@Component({
  selector: 'app-specific-card',
  templateUrl: './specific-card.component.html',
  styleUrls: ['./specific-card.component.css']
})
export class SpecificCardComponent {
    public eventName : any;
    public eventHolder : any;
    public eventLocation : any;
    public eventActions : any;
    public eventContent : any;
}
