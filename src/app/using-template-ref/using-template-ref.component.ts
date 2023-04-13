import { Component, Input, OnInit, Output } from '@angular/core';
import { ADTSettings } from 'angular-datatables/src/models/settings';
import { Subject } from 'rxjs'

@Component({
  selector: 'app-using-template-ref',
  templateUrl: './using-template-ref.component.html',
  styleUrls: ['./using-template-ref.component.css']
})

export class UsingTemplateRefComponent implements OnInit{

  dtOptions: ADTSettings={};
  constructor(){}

  @Output()
  emitter = new Subject<IDemoNgComponentEventType>();

  @Input()
  data = {};
  
  ngOnInit(): void {}

  onAction1(){
    this.emitter.next({
      cmd: "action1",
      data: this.data,
    });
  }  

  ngOnDestroy(){
    this.emitter.unsubscribe();
  }
}

export interface IDemoNgComponentEventType {
  cmd: string;
  data: any;
}


// ng-template-ref.component.ts




