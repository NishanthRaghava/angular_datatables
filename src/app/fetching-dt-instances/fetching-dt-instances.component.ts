import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-fetching-dt-instances',
  templateUrl: './fetching-dt-instances.component.html',
  styleUrls: ['./fetching-dt-instances.component.css']
})
export class FetchingDtInstancesComponent implements OnInit {
  @ViewChildren(DataTableDirective)
  dtElements: QueryList<any>;

  dtOptions: DataTables.Settings[] = [];

  displayToConsole(){
    this.dtElements.forEach((dtElement: DataTableDirective, index: number)=>{
      dtElement.dtInstance.then((dtInstance: any)=>{
        console.log(`The Datatable ${index} instance id is: ${dtInstance.table().node().id}`);
      })
    });
  }

  ngOnInit(): void {
    this.dtOptions[0] = this.buildDtOptions('https://xtlncifojk.eu07.qoddiapp.com/');
    this.dtOptions[1] = this.buildDtOptions('https://xtlncifojk.eu07.qoddiapp.com/');
  }

  private buildDtOptions(url:string):DataTables.Settings {
    return {
      ajax: url,
      columns: [
        {title: 'ID', data: 'id'},
        {title: 'First name', data:'firstName'},
        {title: 'Last name', data:'lastName'}
      ]
    }
  }

}
