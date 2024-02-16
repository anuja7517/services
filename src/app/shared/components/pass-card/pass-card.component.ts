import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../../services/passenger.serices';
import { Ipassenger } from '../../model/passenger';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss']
})
export class PassCardComponent implements OnInit {
  

  constructor(private _passService : PassengerService) { }

  ngOnInit(): void {
   console.log(this._passService.fetchPassengerData());
   
    

  }

}
