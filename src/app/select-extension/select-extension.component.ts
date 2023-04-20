import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-extension',
  templateUrl: './select-extension.component.html',
  styleUrls: ['./select-extension.component.css']
})
export class SelectExtensionComponent implements OnInit {

  dtOptions: any = {};

  ngOnInit(): void {

    this.dtOptions= {
      ajax:'https://xtlncifojk.eu07.qoddiapp.com/',
      columns:[
        {title:'ID', data:'id'},
        {title:'First name', data:'firstName'},
        {title:'Last name', data:'lastName'}
      ],
      dom: 'Bfrtip',
      buttons:[
        'selectAll',
        'selectNone',
        // 'selectedSingle',
        {
          extend: 'selectedSingle',
          text: 'Log selected data',
          action: function ( e, dt, button, config ) {
              console.log( dt.row( { selected: true } ).data() );
          }
      }
      ],
      // use this attribute to enable the select extension.
      select: true
    }
    
  }

}
