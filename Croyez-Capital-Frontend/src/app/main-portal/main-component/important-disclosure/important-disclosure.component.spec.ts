import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantDisclosureComponent } from './important-disclosure.component';

describe('ImportantDisclosureComponent', () => {
  let component: ImportantDisclosureComponent;
  let fixture: ComponentFixture<ImportantDisclosureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportantDisclosureComponent]
    });
    fixture = TestBed.createComponent(ImportantDisclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
