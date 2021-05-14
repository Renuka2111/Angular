import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  show = false;
  routes = [
    { linkName: 'Menu', url: 'admin/menu' },
    { linkName: 'Restaurent', url: 'admin/restaurent' },
  ];

  constructor() {}

  ngOnInit(): void {}
  displayRoute() {
    this.show = !this.show;
  }
}
