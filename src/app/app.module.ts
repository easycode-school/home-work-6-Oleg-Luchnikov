import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { SinglePostComponent } from './components/single-post/single-post.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AllPostsComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
