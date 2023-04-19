import { FormsModule } from '@angular/forms';
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
import { RouterLinkComponent } from './router-link/router-link.component';
import { CustomFilteringComponent } from './custom-filtering/custom-filtering.component';
import { IndividualComponent } from './individual/individual.component';
import { ButtonExtensionComponent } from './button-extension/button-extension.component';
import { ColReorderComponent } from './col-reorder/col-reorder.component';

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
    RerenderTableComponent,
    RouterLinkComponent,
    CustomFilteringComponent,
    IndividualComponent,
    ButtonExtensionComponent,
    ColReorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UpperCasePipe,CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
