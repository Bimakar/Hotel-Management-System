import { Component, OnInit } from '@angular/core';
import {DatepickerModule} from "ngx-bootstrap";
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.css']
})
export class SearchHotelComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;

  constructor() { 
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        minDate : new Date()
      });
  }
  
  ngOnInit() {    
  }
onSubmit(data){

   if(data.check_in_date>data.check_out_date){
       alert("start date should be less than end date");
       this.ngOnInit();
     }
}
//npm i rxjs-compat
}
