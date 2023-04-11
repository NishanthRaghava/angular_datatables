
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { ADTSettings } from 'angular-datatables/src/models/settings';

@Component({
  selector: 'app-load-dt-options-promise',
  templateUrl: './load-dt-options-promise.component.html',
  styleUrls: ['./load-dt-options-promise.component.css']
})
export class LoadDtOptionsPromiseComponent implements OnInit {
  
  
  // dtOptions: Promise<DataTables.Settings>;
  // dtOptions: ADTSettings = {}; 
  dtOptions:Promise<DataTables.Settings>;
  // dtOptions:Promise<DataTables.Settings>;

  constructor(@Inject(HttpClient) private httpClient: HttpClient){}

  ngOnInit(): void {
    this.dtOptions = this.httpClient.get<DataTables.Settings>('https://xtlncifojk.eu07.qoddiapp.com/')
    .toPromise()
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    console.error('An error occured', error);
    return Promise.reject(error.message || error)

  }
}
