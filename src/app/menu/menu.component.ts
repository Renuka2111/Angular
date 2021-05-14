import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  CreateMenu: string = 'Enter Menu';
  
  menuL = Array();
  constructor() {}

  ngOnInit(): void {}

  onclick(rmenu: { value: any }) {
    if (rmenu.value.length > 0) {
      this.menuL.push(rmenu.value);
      rmenu.value = '';
    }
  }

  onDelete(del: number) {
    this.menuL.splice(del, 1);
  }
  
  editField: string;
  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
}
