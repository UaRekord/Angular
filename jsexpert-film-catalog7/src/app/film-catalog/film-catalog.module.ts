import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FilmsComponent } from './film-list/film-list.component';
import { FormsModule } from '@angular/forms';
import { FilmItemComponent } from './film-item/film-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TopComponent } from './top/top.component';
import { ActorsListComponent } from './actors-list/actors-list.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ActorsItemComponent } from './actors-item/actors-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatTabsModule,
    MatSelectModule,
    MatToolbarModule
  ],
  declarations: [
    MainComponent,
    FilmsComponent,
    FilmItemComponent,
    TopComponent,
    ActorsListComponent,
    ButtonsComponent,
    ActorsItemComponent
  ]
})
export class FilmCatalogModule { }
