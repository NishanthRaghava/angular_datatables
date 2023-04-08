// here I need to set serverSide: true and overrde the ajax option & connect to your API.
//When using server-side processing, the DataTables component sends requests to the server 
//asking for specific data, such as how many records to show, what page to display, 
//and what data to sort and filter. The server then processes these requests 
//and returns the requested data to the DataTables component.


import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class DataTablesResponse {
  recordsTotal: number;
  recordsFiltered: number;
  data: any[];
}

@Component({
  selector: 'app-server-side',
  templateUrl: './server-side.component.html',
  styleUrls: ['./server-side.component.css']
})
export class ServerSideComponent {
  dtOptions: DataTables.Settings = {};

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.dtOptions={
      serverSide: true,
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
