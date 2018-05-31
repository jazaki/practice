import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
