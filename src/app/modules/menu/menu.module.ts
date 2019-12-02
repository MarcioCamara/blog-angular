import { NgModule } from '@angular/core';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BlogRegisterComponent } from './blog-register/blog-register.component';

@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    BlogComponent,
    BlogRegisterComponent,
  ],
  imports: [
    MenuRoutingModule,
    SharedModule,
  ],
})
export class MenuModule { }
