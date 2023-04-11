
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  ADTSettings } from 'angular-datatables/src/models/settings';


@Component({
  selector: 'app-using-pipes',
  templateUrl: './using-pipes.component.html',
  styleUrls: ['./using-pipes.component.css']
})
export class UsingPipesComponent implements OnInit {
 
  constructor(
    private pipeInstance : UpperCasePipe,
    private currencypipeInstance : CurrencyPipe
  ){}

  dtOptions: ADTSettings = {};

 ngOnInit(): void {
  this.dtOptions = {
    ajax:'https://xtlncifojk.eu07.qoddiapp.com/',
    columns: [
      {
        title:'ID (Money)', 
        data: 'id' , 
        ngPipeInstance:this.currencypipeInstance,
        ngPipeArgs: ['INR','symbol']
      },
      {
        title:'First name',
        data: 'firstName',
        ngPipeInstance: this.pipeInstance
      },
      {
        title:'Last name',
        data: 'lastName',
        ngPipeInstance: this.pipeInstance
      }
    ]
  }
   
 }
}
