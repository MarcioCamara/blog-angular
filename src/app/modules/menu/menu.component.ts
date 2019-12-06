import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NzFormatEmitEvent } from 'ng-zorro-antd/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public user = JSON.parse(localStorage.getItem('user'));

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
            { title: 'leaf', key: '10012', isLeaf: true }
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
  ) { }

  ngOnInit() { }

  login() {
    this.authService.loginWithGoogle();
  }

  logout() {

  }

  goHome() {
    this.router.navigate(['menu', 'home']);
  }

  goBlogView() {
    this.router.navigate(['menu', 'blog']);
  }

  goBlogRegister() {
    this.router.navigate(['menu', 'blog', 'register']);
  }
}
