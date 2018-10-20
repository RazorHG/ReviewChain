import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// Angular Material Module
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { BarRatingModule } from 'ngx-bar-rating';
import {MatListModule} from '@angular/material/list';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SetPeerComponent } from './components/set-peer/set-peer.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { Peer2PeerService } from './providers/peer2peer.service';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ReviewDetailComponent } from './components/review-detail/review-detail.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { BlockChainService } from './providers/blockchain.service';
import { MovieSelectionComponent } from './components/movie-selection/movie-selection.component';
import { UserService } from './providers/user.service';
import { MovieService } from './providers/movie.service';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SetPeerComponent,
    ReviewFormComponent,
    WebviewDirective,
    ReviewListComponent,
    ReviewDetailComponent,
    AddReviewComponent,
    MovieSelectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    MatInputModule,
    MatFormFieldModule,
    BarRatingModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [
    ElectronService,
    Peer2PeerService,
    BlockChainService,
    UserService,
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
