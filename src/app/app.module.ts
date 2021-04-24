import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsByGroupComponent } from './items-by-group/items-by-group.component';
import { TimersComponent } from './timers/timers.component';
import { DevelopComponent } from './develop/develop.component';
import { NavbarComponent } from './navbar/navbar.component';
// import {moneyPipe, mPipe} from './pipes/mony.pipe';
import { MPipePipe } from './pipes/m-pipe.pipe';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TreeviewComponent} from './treeview/treeview.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsByGroupComponent,
    TimersComponent,
    DevelopComponent,
    NavbarComponent,
    TreeviewComponent,
    MPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
