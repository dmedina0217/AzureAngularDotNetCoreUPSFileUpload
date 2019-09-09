import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent implements OnInit {

  public upsTypes = [
    {
      'name':'Address Verification API',
      'description':'Using UPS Address Verification api. More description details to follow'
    },
    {
      'name':'Ship API',
      'description':'Ships using UPS ship api. More description details to follow'
    },
    {
      'name':'Pickup API',
      'description':'Uses UPS pickup api. More description details to follow'
    },
    {
      'name':'Rate API',
      'description':'Rates file using UPS ship api. More description details to follow'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
