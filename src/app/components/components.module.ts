// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

// components
import { SweetMessageComponent } from './sweet-message/sweet-message.component';
import { SweetQuestionComponent } from './sweet-question/sweet-question.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
  ],
  declarations: [
    SweetMessageComponent,
    SweetQuestionComponent,
    ChatbotComponent,
  ],
  providers: [],
  exports: [
    SweetMessageComponent,
    SweetQuestionComponent,
    ChatbotComponent,
  ],
})
export class ComponentsModule { }
