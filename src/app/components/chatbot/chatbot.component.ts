import { ChatbotService } from '../../services/chatbot.service';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

export interface Message {
  remetente?: string;
  mensagem: string;
  data?: Date;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
})
export class ChatbotComponent implements OnInit {
  @ViewChild('inputMessage', { static: false }) public inputMessage: ElementRef;

  msg: string;
  resultados: Message[];
  userScrolled = false;

  constructor(private chatbot: ChatbotService) {
    this.initChatbot();
  }

  ngOnInit() {
  }

  initChatbot() {
    setTimeout(() => {
      this.inputMessage.nativeElement.focus();
    }, 200);

    this.resultados = [];

    this.chatbot.getResponse('oi')
      .subscribe((lista: any) => {
        lista.result.fulfillment.messages.forEach((element) => {
          this.resultados.push({ remetente: 'chatbot', mensagem: element.speech, data: lista.timestamp });
        });
      });
  }

  sendMessage() {
    this.resultados.push({ remetente: 'eu', mensagem: this.msg, data: new Date() });
    this.chatbot.getResponse(this.removerAcentos(this.msg))
      .subscribe((lista: any) => {
        lista.result.fulfillment.messages.forEach((element) => {
          this.resultados.push({ remetente: 'chatbot', mensagem: element.speech, data: lista.timestamp });
        });
      });

    this.msg = '';
  }

  private removerAcentos(s) {
    return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}
