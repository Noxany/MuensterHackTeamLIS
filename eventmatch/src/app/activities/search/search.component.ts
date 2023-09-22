import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  tagsList: string[] = ['Tag1', 'Tag2', 'Tag3']; // Replace this with your actual tags

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      activityName: '',
      dateFrom: '',
      dateUntil: '',
      tags: new FormControl([])
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.searchForm.value);
  }

}
