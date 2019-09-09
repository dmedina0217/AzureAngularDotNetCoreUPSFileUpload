import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginModule } from './App_Core_Modules/login/login.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeModule } from './App_Core_Modules/home/home.module';
import { UploadfileModule } from './App_Core_Modules/uploadfile/uploadfile.module';
import { FormsModule } from '@angular/forms';
import { FilesuploadedModule } from './App_Core_Modules/filesuploaded/filesuploaded.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgbModule,LoginModule,FlexLayoutModule,HomeModule,UploadfileModule,FormsModule,FilesuploadedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
