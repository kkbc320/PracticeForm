import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaukariFormComponent } from './naukari-form/naukari-form.component';
import { SquarePipe } from './naukari-form/naukari.pipe';
import { TempletFormComponent } from './templet-form/templet-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NaukariFormComponent,
    SquarePipe,
    TempletFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
