
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-row-click',
  templateUrl: './row-click.component.html',
  styleUrls: ['./row-click.component.css']
})
export class RowClickComponent implements OnInit {
  message = '';
  dtOptions : DataTables.Settings = {};

  constructor() {}
  
  someClickHandler(info: any): void{
    this.message = info.id + '-' + info.firstName;
  }

  ngOnInit(): void {
    this.dtOptions ={
      ajax:'https://xtlncifojk.eu07.qoddiapp.com/',
      columns: [
        {title: 'ID', data: 'id'},
        {title: 'First name', data:'firstName'},
        {title: 'Last name', data:'lastName'}
      ],
      rowCallback: (row: Node, data:any[] | Object, index:number) => {
        //using jQuery syntax
        $('td', row).off('click');
        $('td',row).on('click', ()=>{
          this.someClickHandler(data);
        });
        return row;
        }
      }
    }
  }


