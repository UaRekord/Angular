import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from 'src/app/angular-bot/chat.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MainComponent, ChatComponent],
  providers: [ChatService]
})
export class AngularBotModule { }
