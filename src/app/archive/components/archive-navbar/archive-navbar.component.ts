import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-archive-navbar',
  templateUrl: './archive-navbar.component.html',
  styleUrls: ['./archive-navbar.component.scss']
})
export class ArchiveNavbarComponent {
  @Output() toggleFilters = new EventEmitter<boolean>();

  onFilterButtonClick() {
    this.toggleFilters.emit(true);
  }
}
