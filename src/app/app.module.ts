import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './user/admin/users-list/users-list.component';
import { UserByIdComponent } from './user/admin/user-by-id/user-by-id.component';
import { AddUserComponent } from './user/admin/add-user/add-user.component';
import { EditUserComponent } from './user/admin/edit-user/edit-user.component';
import { OperationsComponent } from './user/admin/operations/operations.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './user/admin/admin.component';
import { ClientPotentielComponent } from './client-potentiel/client-potentiel.component';
import { ComptesComponent } from './comptes/comptes.component';
import { DemandeOuvertureComponent } from './demande-ouverture/demande-ouverture.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RequetesComponent } from './requetes/requetes.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserByIdComponent,
    AddUserComponent,
    EditUserComponent,
    OperationsComponent,
    LoginComponent,
    AdminComponent,
    ClientPotentielComponent,
    ComptesComponent,
    DemandeOuvertureComponent,
    FooterComponent,
    HeaderComponent,
    NotificationsComponent,
    RequetesComponent,
    TransactionsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
