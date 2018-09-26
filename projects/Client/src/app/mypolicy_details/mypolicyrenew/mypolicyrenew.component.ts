import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mypolicyrenew',
  templateUrl: './mypolicyrenew.component.html',
  styleUrls: ['./mypolicyrenew.component.css']
})
export class MypolicyrenewComponent implements OnInit {

  constructor() { }

  userDetailPreview:any =[
    {
      "tab":"VEHICLE DETAILS",
      "data":[
        {
          "label":"Chasis#",
          "key":"chassis",
          "value":"JT152EEA100302159"
        },
        {
          "label":"Make",
          "key":"make",
          "value":"BMW"
        },
        {
          "label":"Model",
          "key":"model",
          "value":"X1"
        },{
          "label":"Year",
          "key":"year",
          "value":"2004"
        },        {
          "label":"Vehicle Type",
          "key":"VehicleType",
          "value":"Sedan"
        },
        {
          "label":"Vehicle Value",
          "key":"VehicleVal",
          "value":"AED 8,55,00"
        },{
          "label":"Engine Number",
          "key":"EngineNo",
          "value":"1774098601"
        },{
          "label":"Vehicle Color",
          "key":"vehiclecolor",
          "value":"gray"
        },{
          "label":"Registration#",
          "key":"reg",
          "value":"P DUBAI 190"
        },
        {
          "label":"Vehicle Registered In",
          "key":"VehicleReg",
          "value":"Dubai"
        },
        {
          "label":"Mortaged",
          "key":"mortaged",
          "value":"No"
        },
      ]
    },
    {
      "tab":"COVERAGE & PREMIUM",
      "coverage":[
        {
          "label":"Third Party Bodily Injury",
          "isChecked":"true",
        },
        {
          "label":"Third Party Bodily Injury",
          "isChecked":"true",
        },
        {
          "label":"Third Party Bodily Injury",
          "isChecked":"true",
        },
        {
          "label":"Third Party Bodily Injury",
          "isChecked":"true",
        }        
      ],
      "grosspremium":'2,2200'

    }
  ]
  ngOnInit() {
  }

}
