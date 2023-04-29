import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveNavbarComponent } from './archive-navbar.component';

describe('ArchiveNavbarComponent', () => {
  let component: ArchiveNavbarComponent;
  let fixture: ComponentFixture<ArchiveNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchiveNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
