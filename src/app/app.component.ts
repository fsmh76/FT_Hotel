import { Component, OnInit } from '@angular/core';
import { Hotel } from './hotel';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hotel11-angular';
  hotel: Hotel [] = [];
  constructor(public ap: AppService){

  }
  ngOnInit(): void {
    this.ap.getHotel().subscribe((response) =>{
      this.hotel=response;
    })
  }
}
