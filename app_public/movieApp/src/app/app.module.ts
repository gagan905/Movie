import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import {APP_BASE_HREF} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

import { HomeListComponent } from './home-list/home-list.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FrameworkComponent } from './framework/framework.component';
import { CreateComponent } from './create/create.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [

    HomeListComponent,

    AboutComponent,

    HomepageComponent,

    HeaderComponent,

    FrameworkComponent,

    CreateComponent,

    DetailsPageComponent,

    UpdateComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'create',
        component:CreateComponent
      },{
      path:'movie/:movieid',
        component:DetailsPageComponent
      },
      {
        path:'update/:movieid',
        component:UpdateComponent

      },
      {
        path:'delete/:movieid',
        component:DetailsPageComponent
      }
    ])
  ],
  providers: [{provide: APP_BASE_HREF,useValue: '/'}],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
