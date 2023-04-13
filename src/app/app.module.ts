import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZeroConfigurationComponent } from './zero-configuration/zero-configuration.component';
import { WithOptionsComponent } from './with-options/with-options.component';
import { AjaxDtComponent } from './ajax-dt/ajax-dt.component';
import {HttpClientModule} from '@angular/common/http';
import { ServerSideComponent } from './server-side/server-side.component';
import { RowClickComponent } from './row-click/row-click.component';
import { MultipleTablesComponent } from './multiple-tables/multiple-tables.component';
import { FetchingDtInstancesComponent } from './fetching-dt-instances/fetching-dt-instances.component';
import { LoadDtOptionsPromiseComponent } from './load-dt-options-promise/load-dt-options-promise.component';
import { UsingPipesComponent } from './using-pipes/using-pipes.component'
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { UsingTemplateRefComponent } from './using-template-ref/using-template-ref.component';
import { RerenderTableComponent } from './rerender-table/rerender-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ZeroConfigurationComponent,
    WithOptionsComponent,
    AjaxDtComponent,
    ServerSideComponent,
    RowClickComponent,
    MultipleTablesComponent,
    FetchingDtInstancesComponent,
    LoadDtOptionsPromiseComponent,
    UsingPipesComponent,
    UsingTemplateRefComponent,
    RerenderTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [UpperCasePipe,CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
