import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CONTAINERS } from './core/shared/index.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { SERVICES } from './core/shared/service.component';

@NgModule({
  declarations: [
    AppComponent,
    [...CONTAINERS]
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
  ],
  providers: [
    [...SERVICES]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
