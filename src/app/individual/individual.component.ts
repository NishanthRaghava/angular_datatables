import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective, {static:false})
  dataTableElements: DataTableDirective;

  dtOptions: DataTables.Settings={};

  ngOnInit(): void {
    this.dtOptions = {
      ajax:'https://xtlncifojk.eu07.qoddiapp.com/',
      columns: [
        {title: 'ID', data: 'id'},
        {title: 'First name', data: 'firstName'},
        {title: 'Last name', data:'lastName'}
      ]
    }
  }

  ngAfterViewInit(): void {
    this.dataTableElements.dtInstance.then((dtInstance: DataTables.Api)=>{
      dtInstance.columns().every(function (){
        const that = this;
        $('input', this.footer()).on('keyup change', function(){
          if(that.search() !== this['value']){
             that.search(this['value']).draw();
          }
        })
      })
    })
    
  }

}
