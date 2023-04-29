import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveFilterComponent } from './archive-filter.component';

describe('ArchiveFilterComponent', () => {
  let component: ArchiveFilterComponent;
  let fixture: ComponentFixture<ArchiveFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchiveFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
