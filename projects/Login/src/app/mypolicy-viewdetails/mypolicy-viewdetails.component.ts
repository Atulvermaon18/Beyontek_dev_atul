import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mypolicy-viewdetails',
  templateUrl: './mypolicy-viewdetails.component.html',
  styleUrls: ['./mypolicy-viewdetails.component.css']
})
export class MypolicyViewdetailsComponent implements OnInit {

  isChecked: boolean;

  vehicleDetailPreview: any = [
    {
      "label": "Chasis#",
      "key": "chassis",
      "value": "JT152EEA100302159"
    },
    {
      "label": "Make",
      "key": "make",
      "value": "BMW"
    },
    {
      "label": "Model",
      "key": "model",
      "value": "X1"
    }, {
      "label": "Year",
      "key": "year",
      "value": "2004"
    }, {
      "label": "Vehicle Type",
      "key": "VehicleType",
      "value": "Sedan"
    },
    {
      "label": "Vehicle Value",
      "key": "VehicleVal",
      "value": "AED 8,55,00"
    }, {
      "label": "Engine Number",
      "key": "EngineNo",
      "value": "1774098601"
    }, {
      "label": "Vehicle Color",
      "key": "vehiclecolor",
      "value": "gray"
    }, {
      "label": "Registration#",
      "key": "reg",
      "value": "P DUBAI 190"
    },
    {
      "label": "Vehicle Registered In",
      "key": "VehicleReg",
      "value": "Dubai"
    },
    {
      "label": "Mortaged",
      "key": "mortaged",
      "value": "No"
    },
  ];

  coverageDetailPreview: any = [
    {
      "label":"Third Party Bodily Injury",
      "isChecked":"true",
    },
    {
      "label":"Third Party Property Damage",
      "isChecked":"true",
    },
    {
      "label":"AED 500,000",
      "isChecked":"true",
    },
    {
      "label":"Loss or Damage to Your Vehicle",
      "isChecked":"true",
    },
    {
      "label":"Repair",
      "isChecked":"true",
    },
    {
      "label":"Agency",
      "isChecked":"true",
    },
    {
      "label":"Personal Accident Cover for Driver",
      "isChecked":"true",
    },
    {
      "label":"Personal Accident Cover for Passengers",
      "isChecked":"true",
    },
    {
      "isChecked":"true",
    },
    {
      "label":"Breakdown Recovery - Silver",
      "isChecked":"true",
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
