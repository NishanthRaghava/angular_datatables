import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-multiple-tables',
  templateUrl: './multiple-tables.component.html',
  styleUrls: ['./multiple-tables.component.css']
})
export class MultipleTablesComponent implements OnInit {
  @ViewChildren(DataTableDirective)
  dtElements: QueryList<any>;

  dtOptions: DataTables.Settings[] = [];
  
  displayToConsole(){
    this.dtElements.forEach((dtElements: DataTableDirective, index: number)=>{
      dtElements.dtInstance.then((dtInstance: any)=>{
        console.log(`The datatable ${index} instance ID is: ${dtInstance.table().node().id}`);
      })
    });
  }
  
  ngOnInit(): void {
    this.dtOptions[0] = this.buildDtOptions('https://xtlncifojk.eu07.qoddiapp.com/');
    this.dtOptions[1] = this.buildDtOptions('https://xtlncifojk.eu07.qoddiapp.com/');
  }

  private buildDtOptions(url: string) : DataTables.Settings{
     return {
      ajax: url,
      columns:[
        {title: 'ID', data:'id'},
        {title: 'First name', data:'firstName'},
        {title: 'Lastname', data:'lastName'}
      ] 
     }
  }
}
