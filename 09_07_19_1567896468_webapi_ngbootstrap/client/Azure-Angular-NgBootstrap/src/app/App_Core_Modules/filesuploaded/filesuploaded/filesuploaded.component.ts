import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filesuploaded',
  templateUrl: './filesuploaded.component.html',
  styleUrls: ['./filesuploaded.component.css']
})
export class FilesuploadedComponent implements OnInit {

  public filesuploaded = [
    {
      'filename':'filetest.csv',
      'uploaded':'2019-08-01',
      'upsType':'Ship'
    },
    {
      'filename':'filetest.csv',
      'uploaded':'2019-08-01',
      'upsType':'Pickup'
    },{
      'filename':'filetest.csv',
      'uploaded':'2019-08-01',
      'upsType':'Address Validation'
    },{
      'filename':'filetest.csv',
      'uploaded':'2019-08-01',
      'upsType':'Ship'
    },{
      'filename':'filetest.csv',
      'uploaded':'2019-08-01',
      'upsType':'Rating'
    }
  ]

  constructor(private router:Router) { }

  ngOnInit() {
  }


  uploadFile()
  {
    this.router.navigate(['/uploadfile']);
  }

}
