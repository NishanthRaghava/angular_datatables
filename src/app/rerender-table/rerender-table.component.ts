import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { data } from 'jquery';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-rerender-table',
  templateUrl: './rerender-table.component.html',
  styleUrls: ['./rerender-table.component.css']
})
export class RerenderTableComponent implements OnInit, OnDestroy {
  //used to get a reference to the 'DataTableDirective' cmponent from the template.
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {}; //used to configure the datatables
  dtTrigger: Subject<any> = new Subject();
  //The 'Subject' class is used here because it provides a simple and 
  //flexible way to trigger events when new data arrives.

  constructor(private Http: HttpClient){}

  ngOnInit(): void {
    
    this.dtOptions = {
      ajax: (dataTablesParameters:any, callback)=>{
        this.Http.get
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
      // ajax:
      // // 'https://jsonplaceholder.typicode.com/posts',
      // 'https://xtlncifojk.eu07.qoddiapp.com/',
      // columns: [
      //   {title:'ID', data:'id'},
      //   {title:'First name', data:'firstName'},
      //   {title:'Last name', data:'lastName'}
      // ]
    };
  }

  ngAfterViewInit(): void{
    //.next() to trigger the rendering of the data table.
    this.dtTrigger.next(null);
  }

  ngOnDestroy(): void {
    //method is called to unsubscribe form the dtTrigger event.
    this.dtTrigger.unsubscribe();
  }

  // render method that destroys and re-render the datatables
  rerender(): void{
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api)=>{
      dtInstance.destroy();

      this.dtTrigger.next(null);
    })
  }
}
