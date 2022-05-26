import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatAccountComponent } from './creat-account/creat-account.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Users_Service } from '../app/app-info/typescript-angular-client-generated/typescript-angular-client/api/users_.service';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatAccountComponent,
    LoginComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Users_Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
