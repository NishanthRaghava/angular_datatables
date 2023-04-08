import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
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
        this.http.post<DataTablesResponse>(
          'https://xtlncifojk.eu07.qoddiapp.com/',
          dataTablesParameters,{}
        ).subscribe(resp => {
          callback({
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered,
            data: resp.data
          });
        });
      },
      columns: [
        {title: 'ID',data:'id'},
        {title:'FirstName',data:'firstName'},
        {title:'LastName', data:'lastName'}
      ]
    }
    
  }
}
