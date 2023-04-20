// import { Component, OnInit } from '@angular/core';
 
// // import 'datatables.net-buttons';

// @Component({
//   selector: 'app-button-extension',
//   templateUrl: './button-extension.component.html',
//   styleUrls: ['./button-extension.component.css']
// })
// export class ButtonExtensionComponent implements OnInit {

//   dtOptions: any ={};

//   ngOnInit(): void {
//     this.dtOptions= {
//       ajax:'https://xtlncifojk.eu07.qoddiapp.com/',
//       columns: [
//         {title:'ID', data:'id'},
//         {title:'First name', data:'firstName'},
//         {title:'Last name', data:'lastName'}
//       ],
//       //Declare the use of extension in the Dom parameter

//       dom: 'Bfrtip',
//       //configure the buttons
//       buttons:
//       [
//         'columnsToggle',
//         'colvis',
//         'copy',
//         'print',
//         'excel',
//         {
//           text: 'some button',
//           key: '1',
//           action: function(e, dt, node, config){
//             alert('Button Activated')
//           }
//         }
//       ]
//     }    
//   }
// }


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-extension',
  templateUrl: './button-extension.component.html',
  styleUrls: ['./button-extension.component.css']
})
export class ButtonExtensionComponent implements OnInit {
  // Must be declared as "any", not as "DataTables.Settings"
  dtOptions: any = {};

  ngOnInit(): void {
    this.dtOptions = {
      ajax: 'https://xtlncifojk.eu07.qoddiapp.com/',
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }],
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons
      // buttons: [
      //   'columnsToggle',
      //   'colvis',
      //   'copy',
      //   'print',
      //   'excel',
      //   {
      //     text: 'Some button',
      //     key: '1',
      //     action: function (e, dt, node, config) {
      //       alert('Button activated');
      //     }
      //   }
      // ]
      buttons: [
        'print',
        'spacer',
        'copy',
        'excel',
        // {
        //   extend: 'pdfHtml5',
        //   download: 'open'
        // },
        'pdf',
        'csv',
        {
          extend: 'spacer',
          style: 'bar'
        },
        'copy',
        'colvis',
        'searchBuilder',
        'selectRows',
        'selectColumns',
        'selectCells'
      ]
    };
  }
}
