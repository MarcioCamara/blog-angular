import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NzFormatEmitEvent } from 'ng-zorro-antd/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public headerLogo = 'assets/logo_h.png';
  public user = null;
  public showMenu = true;

  public isCollapsed = false;
  public notificationsCount = 5;

  nodes = [
    {
      title: 'parent 1',
      key: '100',
      expanded: true,
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          expanded: true,
          children: [
            { title: 'leaf', key: '10010', isLeaf: true },
            { title: 'leaf', key: '10011', isLeaf: true },
            { title: 'leaf', key: '10012', isLeaf: true },
          ],
        },
        {
          title: 'parent 1-1',
          key: '1002',
          children: [{ title: 'leaf', key: '10020', isLeaf: true }]
        },
        {
          title: 'parent 1-2',
          key: '1003',
          children: [{ title: 'leaf', key: '10030', isLeaf: true }, { title: 'leaf', key: '10031', isLeaf: true }]
        },
      ],
    },
  ];

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  constructor(
    private router: Router,
    public authService: AuthService,
  ) {
    this.router.events.subscribe((routerEvent) => {
      if (routerEvent instanceof NavigationEnd) {
        console.log(routerEvent.url);
        const regex = /error\/.*/;

        this.showMenu = !regex.test(routerEvent.url);
      }
    });
  }

  ngOnInit() { }

  async login() {
    await this.authService.loginWithGoogle();
  }

  goHome() {
    this.router.navigate(['home']);
  }

  goBlogView() {
    this.router.navigate(['posts', 'view']);
  }

  goBlogRegister() {
    this.router.navigate(['posts', 'register']);
  }
}
