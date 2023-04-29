import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-archive-filter',
  templateUrl: './archive-filter.component.html',
  styleUrls: ['./archive-filter.component.scss']
})
export class ArchiveFilterComponent {
  @Input() filtersExpanded!: boolean;

  selectedAuthorName = '';
  authorNames: string[] = ['Jan', 'Erik', 'Bjørn'];
  authorControl = new FormControl('');

  selectedAuthorAlternateName = '';
  authorAlternateNames: string[] = ['anonym', 'hemmelig'];
  authorAlternateNamesControl = new FormControl('');

  selectedBookTitle = '';
  bookTitles: string[] = ['Name of the Wind', 'Sang og dans', 'The Way of Kings'];
  bookTitlesControl = new FormControl('');

  selectedPublisher = '';
  publishers: string[] = ['Cappelen', 'Damm', 'Tor'];
  publishersControl = new FormControl('');

  selectedEdition = '';
  editions: string[] = ['1', '2', '3', '4'];
  editionsControl = new FormControl('');

  selectedFormat = '';
  formats: string[] = ['bok', 'A4', 'tidsskrift'];
  formatsControl = new FormControl('');

  selectedBindingType = '';
  bindingTypes: string[] = ['hardcover', 'pocket'];
  bindingTypesControl = new FormControl('');

  selectedCategory = '';
  categories: string[] = ['Krim', 'Fakta', 'Geografi'];
  categoriesControl = new FormControl('');

  selectedStore = '';
  stores: string[] = ['Ark', 'Norli'];
  storesControl = new FormControl('');

  selectedRegNumber = '';
  regNumbers: string[] = ['123', '456', '789'];
  regNumbersControl = new FormControl('');

}
