import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public typedStrings = [
    'Olá, meu nome é Marcio. ^1000 Sou desenvolvedor web full-stack.',
  ];

  public description = [
    'Atuo no setor desde meados de 2013. Tenho experiência no desenvolvimento de sistemas ERP, sites institucionais, sistemas de controle de criptomoedas, aplicativos mobile, entre outros.',
  ];

  public typedCompleted = false;
  public descriptionCompleted = false;

  constructor() { }

  ngOnInit() {
  }

  goToFacebook() {
    window.open('https://www.facebook.com/marcio.camara.52493');
  }

  goToInstagram() {
    window.open('https://www.instagram.com/_xcamarax/');
  }

  goToGithub() {
    window.open('https://github.com/MarcioCamara');
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async completedTypedStrings() {
    await this.delay(1125);
    this.typedCompleted = true;
  }

  async completedDescription() {
    await this.delay(1125);
    this.descriptionCompleted = true;
  }

  visible: boolean;
  openChatbot() {
    this.visible = false;
  }
}
