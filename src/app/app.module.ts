// modules
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import pt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NZ_I18N, pt_BR } from 'ng-zorro-antd/i18n';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';
import { PostRegisterGuardService } from './guards/post-register-guard.service';
// services
import { CustomizeMessageService } from './services/customize-message.service';
import { HttpRequestService } from './services/http-request.service';
import { StorageService } from './services/storage.service';
import { TokenService } from './services/token.service';
import { UtilsService } from './services/utils.service';
import { SharedModule } from './shared/shared.module';

registerLocaleData(pt);

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
    FormsModule,
  ],
  providers: [
    CustomizeMessageService,
    HttpRequestService,
    StorageService,
    TokenService,
    UtilsService,
    PostRegisterGuardService,
    { provide: NZ_I18N, useValue: pt_BR },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: StorageBucket, useValue: 'blog-angular-2dec4.appspot.com' },
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
