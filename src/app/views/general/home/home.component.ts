import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public dots1Visible = true;
  public dots2Visible = true;
  public dots3Visible = true;
  public dots4Visible = true;

  public typedStrings = [
    'Olá, meu nome é Marcio. ^1000 Sou desenvolvedor web full-stack.',
  ];

  public description = [
    'Atuo no setor desde meados de 2013. Tenho experiência no desenvolvimento de sistemas ERP, sites institucionais, sistemas de controle de criptomoedas, aplicativos mobile, entre outros.',
  ];

  public typedCompleted = false;
  public descriptionCompleted = false;

  public myAge: number = 0;

  public isModalVisible = false;
  public isWebModalVisible = false;
  public isDesktopModalVisible = false;
  public isMobileModalVisible = false;

  constructor() { }

  ngOnInit() {
    this.myAge = moment().diff(moment([1991, 9, 21]), 'years');
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

  clickRecents(item: string) {
    if (item === 'anteros') {
      window.open('https://anterostextil.com.br/');
    } else if (item === 'wanda') {
      window.open('https://wandacamara.github.io/solucoes/');
    } else if (item === 'runner') {
      window.open('https://marciocamara.github.io/infinite-runner/');
    } else if (item === 'sikck161') {
      window.open('https://sick161.github.io/home/');
    } else if (item === 'key2text') {
      window.open('https://marciocamara.github.io/key2text-ahk/');
    } else if (item === 'trayOpener') {
      window.open('https://marciocamara.github.io/trayopener/');
    }
  }

  showModal(): void {
    this.isModalVisible = true;
  }

  showJobsModal(modal: string): void {
    if (modal === 'web') {
      this.isWebModalVisible = true;
    } else if (modal === 'desktop') {
      this.isDesktopModalVisible = true;
    } else if (modal === 'mobile') {
      this.isMobileModalVisible = true;
    }
  }

  handleOk(): void {
    this.isModalVisible = false;
  }

  handleJobsOk(modal: string): void {
    if (modal === 'web') {
      this.isWebModalVisible = false;
    } else if (modal === 'desktop') {
      this.isDesktopModalVisible = false;
    } else if (modal === 'mobile') {
      this.isMobileModalVisible = false;
    }
  }

  handleJobsCancel(modal: string): void {
    if (modal === 'web') {
      this.isWebModalVisible = false;
    } else if (modal === 'desktop') {
      this.isDesktopModalVisible = false;
    } else if (modal === 'mobile') {
      this.isMobileModalVisible = false;
    }
  }

}
