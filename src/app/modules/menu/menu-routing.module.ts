import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BlogRegisterComponent } from './blog-register/blog-register.component';

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
        path: 'blog', component: BlogComponent,
      },
      {
        path: 'blog/register', component: BlogRegisterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule { }
