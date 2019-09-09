import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesuploadedComponent } from './filesuploaded/filesuploaded.component';
import { FlexModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [FilesuploadedComponent],
  imports: [
    CommonModule,FlexModule,FormsModule
  ],
  exports:[FilesuploadedComponent]
})
export class FilesuploadedModule { }
