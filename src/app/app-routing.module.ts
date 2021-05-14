import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  {path:'admin',
  component:AdminComponent,
  children:[
    {path:'menu' , component:MenuComponent},
    {path:'restaurent', component:RestaurantComponent}]
},
  
  {path:'user' , component:UserComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[AdminComponent,MenuComponent,RestaurantComponent,UserComponent]
