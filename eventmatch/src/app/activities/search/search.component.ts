import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import addDays from 'date-fns/addDays'



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  today = new Date();
  tagsList: string[] = ['Tag1', 'Tag2', 'Tag3']; // Replace this with your actual tags

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      activityName: new FormControl("Fußball"),
      dateFrom: new FormControl(this.today),
      dateUntil: new FormControl(addDays(this.today, 7)),
      tags: new FormControl([])
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(
      this.searchForm.value.activityName,
      this.searchForm.value.dateFrom,
      this.searchForm.value.dateUntil,
      this.searchForm.value.tags
    );
  }

}
