import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchiveListComponent } from './components/archive-list/archive-list.component';
import { ArchiveFilterComponent } from './components/archive-filter/archive-filter.component';
import { ArchivePage } from './pages/archive.page';
import { ArchiveNavbarComponent } from './components/archive-navbar/archive-navbar.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule  } from "@angular/material/toolbar";
import { MatInputModule  } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { ReactiveFormsModule } from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    ArchiveListComponent,
    ArchiveFilterComponent,
    ArchivePage,
    ArchiveNavbarComponent,
  ],
  exports: [
    ArchiveFilterComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class ArchiveModule { }
