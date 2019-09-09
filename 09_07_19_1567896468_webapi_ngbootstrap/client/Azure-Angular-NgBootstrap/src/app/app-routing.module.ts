import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './App_Core_Modules/login/login/login.component';
import { HomeComponent } from './App_Core_Modules/home/home/home.component';
import { UploadfileComponent } from './App_Core_Modules/uploadfile/uploadfile/uploadfile.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'uploadfile',component:UploadfileComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
