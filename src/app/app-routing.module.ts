import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArchivePage} from "./archive/pages/archive.page";

const routes: Routes = [
  { path: '', component: ArchivePage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
