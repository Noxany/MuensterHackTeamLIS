import { Component } from '@angular/core';
import { SpecificCardComponent } from '../specific-card/specific-card.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  public cardData : Array<SpecificCardComponent> = [{eventName: "Münsterhack" , eventHolder : "items GmbH", eventLocation : "Münster", eventContent: "This is some content", eventActions : "Nothing"},
  {eventName: "Münsterhack" , eventHolder : "items GmbH", eventLocation : "Münster", eventContent: "This is some content", eventActions : "Nothing"},
  {eventName: "Münsterhack" , eventHolder : "items GmbH", eventLocation : "Münster", eventContent: "This is some content", eventActions : "Nothing"},
  {eventName: "Münsterhack" , eventHolder : "items GmbH", eventLocation : "Münster", eventContent: "This is some content", eventActions : "Nothing"}];
}
