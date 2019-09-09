import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadfileComponent } from './uploadfile/uploadfile.component';



@NgModule({
  declarations: [UploadfileComponent],
  imports: [
    CommonModule
  ],
  exports:[UploadfileComponent]
})
export class UploadfileModule { }
