import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './shared/main-menu/main-menu.component';
import { HeaderComponent } from './header/header.component';
import { VoteCardComponent } from './vote-board/vote-card/vote-card.component';
import { AddRowComponent } from './shared/add-row/add-row.component';
import { VoteBoardComponent } from './vote-board/vote-board.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './shared/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HeaderComponent,
    VoteCardComponent,
    AddRowComponent,
    VoteBoardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
