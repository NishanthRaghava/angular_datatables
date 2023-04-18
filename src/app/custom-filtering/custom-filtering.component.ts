import { Component, OnDestroy, OnInit, ViewChild, NgModule } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-custom-filtering',
  templateUrl: './custom-filtering.component.html',
  styleUrls: ['./custom-filtering.component.css']
})
export class CustomFilteringComponent implements OnInit, OnDestroy{

  @ViewChild(DataTableDirective, {static: false})
  DataTableElement: DataTableDirective;
  min: number;
  max: number;

  dtOptions: DataTables.Settings = {}

  ngOnInit(): void {
     // We need to call the $.fn.dataTable like this because DataTables typings do not have the "ext" property
     $.fn['dataTable'].ext.search.push((settings, data, dataIndex) => {
      const id = parseFloat(data[0]) || 0; // use data for the id column
      // parseFloat is a javascript function that parses a string and returns as a
      // floating-point number.
      if ((isNaN(this.min) && isNaN(this.max)) || // not a number
        (isNaN(this.min) && id <= this.max) ||
        (this.min <= id && isNaN(this.max)) ||
        (this.min <= id && id <= this.max)) {
        return true;
      }
      return false;
    });

    this.dtOptions = {
      ajax:'https://xtlncifojk.eu07.qoddiapp.com/',
      columns: [
        {title:'ID', data:'id'},
        {title:'First name', data:'firstName'},
        {title:'Last name', data:'lastName'}
      ]
    }
    
  }
  FilterById() {
    this.DataTableElement.dtInstance.then((dtInstance: DataTables.Api)=>{
      console.log('clicked');
      
      dtInstance.draw();
    })
  }
  ngOnDestroy(): void {
    $.fn['dataTable'].ext.search.pop();
  }
}
