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
import { MultipleTablesComponent } from './multiple-tables/multiple-tables.component'

@NgModule({
  declarations: [
    AppComponent,
    ZeroConfigurationComponent,
    WithOptionsComponent,
    AjaxDtComponent,
    ServerSideComponent,
    RowClickComponent,
    MultipleTablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
