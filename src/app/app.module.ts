import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/store/counter.reducer';
import { CounterbuttonComponent } from './component/counterbutton/counterbutton.component';
import { CounterdisplayComponent } from './component/counterdisplay/counterdisplay.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material.module';
import { CustomeCounterComponent } from './component/custome-counter/custome-counter.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { blogReducer } from './shared/store/Blog/blog.reducers';
import { BlogComponent } from './component/blog/blog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppState } from './shared/store/global/App.state';
import { AddblogComponent } from './component/addblog/addblog.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { BlogEffect } from './shared/store/Blog/blog.effects';

@NgModule({
  declarations: [
    AppComponent,
    CounterbuttonComponent,
    CounterdisplayComponent,
    CustomeCounterComponent,
    BlogComponent,
    NavbarComponent,
    AddblogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(AppState),
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([BlogEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
   
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
