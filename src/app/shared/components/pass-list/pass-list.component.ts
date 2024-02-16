import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../../services/passenger.serices';
import { Ipassenger } from '../../model/passenger';

@Component({
  selector: 'app-pass-list',
  templateUrl: './pass-list.component.html',
  styleUrls: ['./pass-list.component.scss']
})
export class PassListComponent implements OnInit {

  constructor(private _passengerService :PassengerService) { }

  ngOnInit(): void {
   
    console.log(this._passengerService.fetchPassengerData());
    
    
  }

}
