import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { Child2Component } from './components/child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    Child2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
   providers: [], 
  //  providers: [
  //    {provide:CommonService,useless:CommonService}后面是需要实例化的类
  //  ],
      //提供器
  bootstrap: [AppComponent]
})
export class AppModule { }


