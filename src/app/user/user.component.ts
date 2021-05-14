import { Component,Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  alert:boolean= false;
  public collection:any= [];
  constructor(private commonService:DataService) { }

  ngOnInit(): void {
    this.commonService.getRestoList().subscribe((result)=>{
      this.collection= result;
      console.log(this.collection)
    });
  }
  handleClick(event: any) {
    if (event.view.getSelection().type !== 'Range') {
      alert('You have booked succesfully');
    }
  }
  closeAlert(){
    this.alert= false;
  }

}
