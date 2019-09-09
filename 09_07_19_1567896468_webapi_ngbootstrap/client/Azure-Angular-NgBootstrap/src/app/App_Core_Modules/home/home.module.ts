import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilesuploadedModule } from '../filesuploaded/filesuploaded.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,FlexLayoutModule,FilesuploadedModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
