import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { HomeComponent } from '../home/home.component';
import { PostsViewComponent } from '../../blog/posts-view/posts-view.component';
import { PostRegisterComponent } from '../../blog/posts-register/posts-register.component';
import { PostsDetailsComponent } from '../../blog/posts-details/posts-details.component';
import { PostRegisterGuardService } from 'src/app/guards/post-register-guard.service';
import { Error403Component } from '../errors/error403/error403.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full',
      },
      {
        path: 'home', component: HomeComponent,
      },
      {
        path: 'posts/view', component: PostsViewComponent,
      },
      {
        path: 'posts/register', component: PostRegisterComponent, canActivate: [PostRegisterGuardService]
      },
      {
        path: 'posts/details/:uuid', component: PostsDetailsComponent,
      },
      {
        path: 'error/:error', component: Error403Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule { }
