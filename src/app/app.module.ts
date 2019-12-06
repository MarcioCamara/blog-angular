// modules
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// components
import { AppComponent } from './app.component';

// services
import { CustomizeMessageService } from './services/customize-message.service';
import { HttpRequestService } from './services/http-request.service';
import { StorageService } from './services/storage.service';
import { TokenService } from './services/token.service';
import { UtilsService } from './services/utils.service';

import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
registerLocaleData(pt);

import { NZ_I18N, pt_BR } from 'ng-zorro-antd/i18n';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserModule.withServerTransition({ appId: 'site' }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [
    CustomizeMessageService,
    HttpRequestService,
    StorageService,
    TokenService,
    UtilsService,
    { provide: NZ_I18N, useValue: pt_BR },
    { provide: StorageBucket, useValue: 'my-bucket-name' },
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
