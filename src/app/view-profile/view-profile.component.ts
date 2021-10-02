import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  constructor(public _actRoute:ActivatedRoute,public service:UsersService) { }
  public name:any;
  public arr:any=[];
  public getData:any;
  public filterGetData:any=[];
    // public getUser:any =[];
  ngOnInit(): void {
    this._actRoute.paramMap.subscribe(param=>{
      this.name = param.get('name');
    })
    this.service.getFollowers(this.name).subscribe(data=>{
      localStorage.setItem("Followers",JSON.stringify(data))
      console.log(data);
      this.arr=data
      
    })
      this.getData = JSON.parse(localStorage.getItem("Data"));
     let fil:any=this.getData.find(val=>val.login==this.name);
     this.filterGetData =fil;
      console.log(this.filterGetData);
      
  }

}
