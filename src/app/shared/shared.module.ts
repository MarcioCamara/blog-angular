// modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './../components/components.module';

// see documentation: https://ng.ant.design/components/spin/en
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import {
  UserOutline,
  LockOutline,
  MenuUnfoldOutline,
  MenuFoldOutline,
  TeamOutline,
  LogoutOutline,
  FormOutline,
  LoginOutline,
  HomeOutline,
  ArrowLeftOutline,
  PlusOutline,
  DeleteOutline,
  MinusSquareOutline,
  PlusSquareOutline,
  StarFill,
  LikeFill,
  MessageFill,
  FacebookOutline,
  InstagramOutline,
  GithubOutline,
  MessageOutline,
  MailOutline,
} from '@ant-design/icons-angular/icons';

import { NgxTypedJsModule } from 'ngx-typed-js';
import { NgxSummernoteModule } from 'ngx-summernote';

const icons: IconDefinition[] = [
  UserOutline,
  LockOutline,
  MenuUnfoldOutline,
  MenuFoldOutline,
  TeamOutline,
  LogoutOutline,
  FormOutline,
  LoginOutline,
  HomeOutline,
  ArrowLeftOutline,
  PlusOutline,
  DeleteOutline,
  MinusSquareOutline,
  PlusSquareOutline,
  StarFill,
  LikeFill,
  MessageFill,
  FacebookOutline,
  InstagramOutline,
  GithubOutline,
  MessageOutline,
  MailOutline,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    NgZorroAntdModule,
    NzIconModule,
    NgxTypedJsModule,
    NgxSummernoteModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    NgZorroAntdModule,
    NgxTypedJsModule,
    NgxSummernoteModule,
  ],
  providers: [
    { provide: NZ_ICONS, useValue: icons },
  ],
})
export class SharedModule { }
