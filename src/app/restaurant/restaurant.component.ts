import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  alert:boolean = false;

  public collection:any= [];

  addRestaurent= new FormGroup({
    name: new FormControl('')
  })
  constructor(private resto:DataService) { }

  createResto(){
    this.resto.addResto(this.addRestaurent.value).subscribe((result)=>{
      this.alert = true;
      this.addRestaurent.reset({});
      
      console.log("Get Data From Service", result)
      window.location.reload();
    })
  }
  ngOnInit(): void {
    this.resto.getRestoList().subscribe((result)=>{
      this.collection=result;
      console.log(this.collection)
    })
  }
  deleteResto(resto){
    this.collection.splice(resto.id,1)
    this.resto.deleteResto(resto).subscribe((result)=>{
      console.log("Data is Deleted Successfull !", result)
      this.alert= true;
    })
  }
  
  editField: string;
  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  closeAlert(){
    this.alert = false;
  }
}
