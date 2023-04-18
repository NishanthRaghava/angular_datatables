//not completed 

import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-router-link',
  templateUrl: './router-link.component.html',
  styleUrls: ['./router-link.component.css']
})
export class RouterLinkComponent implements AfterViewInit, OnInit {

  dtOptions: DataTables.Settings = {};
  constructor(private renderer: Renderer2, private router: Router){}

  ngOnInit(): void {
    this.dtOptions = {
      ajax: 'https://xtlncifojk.eu07.qoddiapp.com/',
      columns: [
        {title:'ID', data: 'id'},
        {title:'First name', data:'firstName'},
        {title:'Lastname', data:'lastName'},
        {title: 'Action',  
         render: function(data: any, type: any, full: any){
          return 'view';
         }
        }
      ]
    }
    
  }

  ngAfterViewInit(): void {
    this.renderer.listen('document', 'click', (event)=>{
      if(event.target.hasAttribute("view-person-id")){
        this.router.navigate(["/person/"+event.target.getAttribute("view-person-id")])
        console.log("clicked");
        
      }
    })
    
  }

}
