import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchFieldComponent} from "./search-field/search-field.component";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";



@NgModule({
  declarations: [
    SearchFieldComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  exports: [
    SearchFieldComponent
  ]
})
export class SharedModule { }
