import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from "primeng/button";
import { SidebarModule } from "primeng/sidebar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DividerModule} from "primeng/divider";
import {MenuModule} from "primeng/menu";
import { AgendaTableComponent } from './components/agenda-table/agenda-table.component';
import { RouterModule, Routes } from '@angular/router';
import {TreeTableModule} from 'primeng/treetable';
import { AgendaViewerPageComponent } from './pages/agenda-viewer-page/agenda-viewer-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    AgendaTableComponent,
    HomeComponent,
    AgendaViewerPageComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    ButtonModule,
    DividerModule,
    MenuModule,
    TreeTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
