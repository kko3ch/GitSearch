import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserServiceService } from './services/user-service.service';
import { SearchFormComponent } from './search-form/search-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HighlightDirective } from './highlight/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SearchFormComponent,
    NotFoundComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
    FormsModule
  ],
  providers: [
    UserServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
