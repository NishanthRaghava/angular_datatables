import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive-extension',
  templateUrl: './responsive-extension.component.html',
  styleUrls: ['./responsive-extension.component.css']
})
export class ResponsiveExtensionComponent implements OnInit {

dtOptions: any={};

  ngOnInit(): void {
    this.dtOptions={
      ajax:'https://xtlncifojk.eu07.qoddiapp.com/',
      columns:[
        {title:'ID', data:'id'},
        {title:'First name', data:'firstName'},
        {title:'Last name', data:'lastName', class:'none'}
      ],
      //  use this attribute to enable the responsive extension
      responsive: true
    }
    
  }

}
