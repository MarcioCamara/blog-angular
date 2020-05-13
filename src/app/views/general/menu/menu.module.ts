import { NgModule } from '@angular/core';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from '../home/home.component';
import { PostsViewComponent } from '../../blog/posts-view/posts-view.component';
import { PostRegisterComponent } from '../../blog/posts-register/posts-register.component';
import { PostsDetailsComponent } from '../../blog/posts-details/posts-details.component';
import { Error403Component } from '../errors/error403/error403.component';

import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    PostsViewComponent,
    PostRegisterComponent,
    PostsDetailsComponent,
    Error403Component,
  ],
  imports: [
    MenuRoutingModule,
    SharedModule,
    ClickOutsideModule,
  ],
})
export class MenuModule { }
