import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TopbarComponent } from './myComponents/topbar/topbar.component';
import { HeaderComponent } from './myComponents/header/header.component';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './myComponents/posts/posts.component';
import { PostComponent } from './myComponents/post/post.component';
import { SingleComponent } from './pages/single/single.component';
import { WriteComponent } from './pages/write/write.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TopbarComponent,
    HeaderComponent,
    PostsComponent,
    PostComponent,
    SingleComponent,
    WriteComponent,
    SettingsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
