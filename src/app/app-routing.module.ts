

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './user/admin/users-list/users-list.component';
import { AddUserComponent } from './user/admin/add-user/add-user.component';
import { UserByIdComponent } from './user/admin/user-by-id/user-by-id.component';
import { EditUserComponent } from './user/admin/edit-user/edit-user.component';
import { OperationsComponent } from './user/admin/operations/operations.component';
//import { AuthGuard} from './auth-guard'
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './user/admin/admin.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: 'user', 
  component: UserComponent, 

  children:[
  {path: 'admin', component: AdminComponent,   
  
  children:[

    { path: 'add', component: AddUserComponent },
    { path: ':id', component: UserByIdComponent}, 
    { path: 'edit/:id', component: EditUserComponent},
    { path: 'op/:id', component: OperationsComponent},
    { path: 'users', component: UsersListComponent},
  

  ],

},

 
], 

 }, 

 { path:'login', component: LoginComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
