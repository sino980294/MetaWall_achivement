import { IndexComponent } from './home/index/index.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatAccountComponent } from './creat-account/creat-account.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Users_Service } from '../app/app-info/typescript-angular-client-generated/typescript-angular-client/api/users_.service';

import { LoginComponent } from './login/login.component';
import { Posts_Service } from './app-info/typescript-angular-client-generated/typescript-angular-client/api/posts_.service';
import { InterceptorService } from './interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    CreatAccountComponent,
    LoginComponent,
    IndexComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Users_Service,Posts_Service,{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
