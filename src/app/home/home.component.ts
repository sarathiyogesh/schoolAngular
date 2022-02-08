import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public nodeWorking:boolean = false;
  public users:any = [];
  constructor(
  	private _homeservice: HomeService
  ) { }

  ngOnInit(): void {
   this._homeservice.checknode().subscribe((data) => {
            this.nodeWorking = true;
        });

  }

}
