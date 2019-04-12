import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchInput=new FormControl();
  @Output() sendRes: EventEmitter <any>= new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.searchInput.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(res =>{
      this.sendRes.emit(res);
    }
  );
  }

}
