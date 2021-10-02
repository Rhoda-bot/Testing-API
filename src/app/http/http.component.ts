import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(public service:UsersService,public router:Router) { }
  public getUser:any =[];
  ngOnInit(): void {
    this.service.getUsers().subscribe(data=>{
      // let saveData = JSON.parse(localStorage.getItem("Data")) || [];
   localStorage.setItem("Data",JSON.stringify(data))
    
     this.getUser= JSON.parse(localStorage.getItem("Data")) || [];
     console.log(this.getUser);
    })
  }
  view(param){
    this.router.navigate([`view-profile/${param}`])
   
    
    // let v = JSON.parse(localStorage.getItem("Data")) || []
    //   let mp = v.map(val=>val);
    //   console.log(mp);
    //   this.getUser =mp
            
  }

}
