import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
class DataTablesResponse {
  recordsTotal: number;
  recordsFiltered: number;
  data: any[];
}

@Component({
  selector: 'app-ajax-dt',
  templateUrl: './ajax-dt.component.html',
  styleUrls: ['./ajax-dt.component.css']
})
export class AjaxDtComponent implements OnInit{
  dtOptions: DataTables.Settings = {};

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.dtOptions={
      ajax: (dataTablesParameters:any, callback)=>{
        this.http.get<DataTablesResponse>
        (
          // 'https://elsupermarkets.com/wp-json/elsuper/v1/stores',
          'https://jsonplaceholder.typicode.com/posts',
          // 'https://http-ec890-default-rtdb.firebaseio.com/',
          //'https://xtlncifojk.eu07.qoddiapp.com/'
          dataTablesParameters
        ).subscribe(resp => {
          callback({
            // recordsTotal: resp.recordsTotal,
            // recordsFiltered: resp.recordsFiltered,
            data: resp
          });
        });
      },
      columns: [
        {title: 'ID',data:'id'},
        {title:'FirstName',data:'title'},
        {title:'LastName', data:'userId'}
      ]
    }
    
  }
}
