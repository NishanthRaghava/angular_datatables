import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-col-reorder',
  templateUrl: './col-reorder.component.html',
  styleUrls: ['./col-reorder.component.css']
})
export class ColReorderComponent implements OnInit {
  // Must be declared as "any", not as "DataTables.Settings"
  dtOptions: any = {};

  ngOnInit(): void {
    this.dtOptions = {
      ajax: 'https://xtlncifojk.eu07.qoddiapp.com/',
      columns: [{
        title: 'No move me!',
        data: 'id'
      }, {
        title: 'Try to move me!',
        data: 'firstName'
      }, {
        title: 'You cannot move me! *evil laugh*',
        data: 'lastName'
      }],
      dom: 'Rt',
      //dom options sets the table layout to include the colrecorder control.
      // Use this attribute to enable colreorder
      colReorder: {
        order: [1, 0, 2],
        fixedColumnsRight: 2
        //The colReorder option enables the colreorder extension and sets the initial 
        //order of the columns and the number of fixed columns on the right.
      }
    };
  }
}
