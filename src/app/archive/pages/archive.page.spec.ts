import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivePage } from './archive.page';

describe('ArchivePageComponent', () => {
  let component: ArchivePage;
  let fixture: ComponentFixture<ArchivePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivePage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
